<?php
namespace SIMONKOEHLER\Osp\Controller;
use TYPO3\CMS\Extbase\Annotation\Inject;
use TYPO3\CMS\Backend\Utility\BackendUtility;

/**
 * LikeController
 */
class LikeController extends \TYPO3\CMS\Extbase\Mvc\Controller\ActionController
{
    /**
     * likeRepository
     *
     * @var \SIMONKOEHLER\Osp\Domain\Repository\LikeRepository
     * @Inject
     */
    protected $likeRepository = null;

    /**
     * @var \TYPO3\CMS\Extbase\Persistence\Generic\PersistenceManager
     * @Inject
     */
    protected $persistenceManager;

    /**
     * action form
     *
     * @return void
     */
    public function likeAction(){

        $user = $GLOBALS['TSFE']->fe_user->user['uid'];
        $record = $this->request->getArgument('record');
        $type = $this->request->getArgument('type');

        if(is_numeric($record) && is_numeric($type)){

            switch ($type) {
                case 0:
                    if($this->likeRepository->getLikesFromPost($user,$record)){
                        $output['msg'] = 'You already liked this!';
                        $output['label'] = '<i class=\"fa fa-love\"></i> Liked!';
                    }
                    else{
                        $newLike = new \SIMONKOEHLER\Osp\Domain\Model\Like();
                        $newLike->setOwner($user);
                        $newLike->setPid(21);
                        $newLike->setParent($record);
                        $newLike->setParentType($type);
                        $this->likeRepository->add($newLike);
                        $this->persistenceManager->persistAll();
                        $output['msg'] = 'Thank you!';
                        $output['label'] = '<i class=\"fa fa-love\"></i> Liked!';
                    }
                break;
            }

        }

        $this->view->assign('json',json_encode($output));

    }


}
