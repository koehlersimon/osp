<?php
namespace SIMONKOEHLER\Osp\Controller;
use TYPO3\CMS\Extbase\Annotation\Inject;
use TYPO3\CMS\Backend\Utility\BackendUtility;

/**
 * PostController
 */
class PostController extends \TYPO3\CMS\Extbase\Mvc\Controller\ActionController
{

    /**
     * Protected Variable FrontendUserRepository wird mit NULL initialisiert.
     *
     * @var \TYPO3\CMS\Extbase\Domain\Repository\FrontendUserRepository
     * @Inject
     */
    protected $frontendUserRepository = NULL;

    /**
     * postRepository
     *
     * @var \SIMONKOEHLER\Osp\Domain\Repository\PostRepository
     * @Inject
     */
    protected $postRepository = null;

    /**
     * @var \TYPO3\CMS\Extbase\Persistence\Generic\PersistenceManager
     * @Inject
     */
    protected $persistenceManager;

    /**
     * action home
     *
     * @return void
     */
    public function homeAction(){
        $this->settings['fe_user'] = $GLOBALS['TSFE']->fe_user->user;
        $this->view->assign('settings',$this->settings);
        $this->view->assign('posts',$this->postRepository->findAll());
    }

    /**
     * action homeData
     *
     * @return void
     */
    public function homeDataAction(){
        $this->view->assign('settings',$this->settings);
        $this->view->assign('posts',$this->postRepository->findAll());
    }

    /**
     * action list
     *
     * @return void
     */
    public function listAction(){
        $this->settings['fe_user'] = $GLOBALS['TSFE']->fe_user->user;
        $this->view->assign('settings',$this->settings);
        $this->view->assign('posts',$this->postRepository->findByOwner($GLOBALS['TSFE']->fe_user->user['uid']));
    }

    /**
     * action list
     *
     * @return void
     */
    public function backendListAction(){
        $this->view->assign('posts',$this->postRepository->findAll());
    }

    /**
     * action preview
     *
     * @return void
     */
    public function previewAction(){
        $args = $this->request->getArguments();
        $args['bodytext'] = $_POST['bodytext'];
        $this->view->assign('args',$args);
    }

    /**
     * action detail
     *
     * @return void
     */
    public function detailAction(){
        if($this->request->hasArgument('post')){
            $this->view->assign('post', $this->postRepository->findByUid($this->request->getArgument('post')));
        }
    }

    /**
     * action fetch
     *
     * @return void
     */
    public function fetchAction(){

        // Get Url from post owner fe_user record
        if($this->request->hasArgument('owner')){
            $owner = $this->postRepository->frontendUserApiUrl($this->request->getArgument('owner'));
            $apiBaseUrl = $owner['tx_osp_url'];
        }
        else{
            $apiBaseUrl = $this->settings['site']['absRefPrefix'];
        }

        if($this->request->hasArgument('post')){
            $url = $apiBaseUrl.'?type='.$this->settings['pages']['types']['page_external_post_provide'].'&tx_osp_post[post]='.$this->request->getArgument('post');
            $get_data = $this->postRepository->callAPI('GET', $url, false);
            $post = json_decode($get_data);
            if($post){
                $output = $post;
            }
            else{
                $output['content'] = 'p(badge bg-danger p-4). Post data could not be fetched!<br>('.$url.')';
            }
        }
        else{
            $output['content'] = 'p(badge bg-danger). No post ID given!';
        }

        $this->view->assign('post', $output);

    }

    /**
     * action provide
     * This action provides JSON content of a post
     * It must be called with the page type 910 and a post ID of an external post
     *
     * @return void
     */
    public function provideAction(){
        if($this->request->hasArgument('post')){
            $post = $this->postRepository->findByUid($this->request->getArgument('post'));
            if($post){
                $array['uid'] = $this->request->getArgument('post');
                $array['content'] = $post->getContent();
                $array['crdate'] = $post->getCrdate();
                $array['owner'] = $post->getOwner();
                $array['ownername'] = $post->getOwnername();
                $this->view->assign('dataJson',json_encode($array));
            }
            else{
                $this->view->assign('dataJson',json_encode(['content' => '<div class="alert alert-warning">Post ('.$this->request->getArgument('post').') is not accessible or could not be loaded!</div>']));
            }
        }
        else{
            $this->view->assign('dataJson',json_encode(['content' => '<div class="alert alert-danger">No post ID given!</div>']));
        }
    }

    /**
     * action form
     *
     * @return void
     */
    public function formAction(){

        if($this->request->hasArgument('content')){
            if(strlen($this->request->getArgument('content')) > 0){

                // Create new post record

                $newPost = new \SIMONKOEHLER\Osp\Domain\Model\Post();
                $newPost->setFeGroup('-2');
                $newPost->setLikes(0);
                $newPost->setOwner($this->request->getArgument('owner'));
                $newPost->setOwnername($this->request->getArgument('ownername'));
                $newPost->setContent($this->request->getArgument('content'));
                $this->postRepository->add($newPost);
                $this->persistenceManager->persistAll();

                // Create file reference for post record
                $uploadedFiles = $this->request->getArgument('files');

                if(count($uploadedFiles) > 0){
                    foreach ($uploadedFiles as $file) {
                        if($file['tmp_name'] !== '' && $file['name'] !== ''){
                            $newFile = $this->postRepository->createFileObject($file['tmp_name'],$file['name'],$this->settings['storage']['media']);
                            $this->postRepository->createFileReference($newFile->getProperties()['uid'],$newPost->getUid(),$newPost->getPid(),'tx_osp_domain_model_post','media');
                        }
                    }
                }

                $this->addFlashMessage(
                   $messageBody = 'Your post has been saved',
                   $messageTitle = 'Yeah',
                   $severity = \TYPO3\CMS\Core\Messaging\AbstractMessage::OK,
                   $storeInSession = TRUE
                );

                $uriBuilder = $this->uriBuilder;
                $uri = $uriBuilder
                  ->setTargetPageUid($this->settings['pages']['post']['form'])
                  ->build();
                $this->redirectToUri($uri, 1, 303);

            }
            else{
                $this->addFlashMessage("Well, that's too little!");
            }
        }
        $this->view->assign('fe_user',$GLOBALS['TSFE']->fe_user->user);
    }

    /**
     * action delete
     *
     * @return void
     */
    public function deleteAction(\SIMONKOEHLER\Osp\Domain\Model\Post $post){

        $this->postRepository->remove($post);

        $this->addFlashMessage(
           $messageBody = 'You can recover this post in the backend by using the recycler module.',
           $messageTitle = 'Post #'.$post->getUid().' deleted!',
           $severity = \TYPO3\CMS\Core\Messaging\AbstractMessage::OK,
           $storeInSession = TRUE
        );

        $uriBuilder = $this->uriBuilder;
        $uri = $uriBuilder
          ->setTargetPageUid($this->settings['pages']['post']['form'])
          ->build();
        $this->redirectToUri($uri, 1, 303);

    }


    /**
     * action edit
     *
     * @return void
     */
    public function editAction(){
        if($this->request->hasArgument('post')){
            $this->view->assign('post', $this->postRepository->findByUid($this->request->getArgument('post')));
        }
    }


    /**
     * action update
     *
     * @return void
     */
    public function updateAction(\SIMONKOEHLER\Osp\Domain\Model\Post $post){
        $post->setContent($this->request->getArgument('content'));
        $this->postRepository->update($post);

        $this->addFlashMessage(
           $messageBody = '',
           $messageTitle = 'Post #'.$post->getUid().' updated!',
           $severity = \TYPO3\CMS\Core\Messaging\AbstractMessage::OK,
           $storeInSession = TRUE
        );

        $uriBuilder = $this->uriBuilder;
        $uri = $uriBuilder
          ->setTargetPageUid($this->settings['pages']['post']['form'])
          ->build();
        $this->redirectToUri($uri, 1, 303);
    }


}
