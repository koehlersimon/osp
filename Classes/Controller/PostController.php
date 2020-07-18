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
     * action list
     *
     * @return void
     */
    public function listAction(){

        $this->view->assign('settings',$this->settings);
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
