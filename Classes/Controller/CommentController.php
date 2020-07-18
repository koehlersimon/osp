<?php
namespace SIMONKOEHLER\Osp\Controller;
use TYPO3\CMS\Extbase\Annotation\Inject;

/**
 * CommentController
 */
class CommentController extends \TYPO3\CMS\Extbase\Mvc\Controller\ActionController
{
    /**
     * commentRepository
     *
     * @var \SIMONKOEHLER\Osp\Domain\Repository\CommentRepository
     * @Inject
     */
    protected $commentRepository = null;

    /**
     * action list
     *
     * @return void
     */
    public function listAction(){
        $this->view->assign('settings',$this->settings);
        $this->view->assign('comments',$this->commentRepository->findAll());
    }

    /**
     * action form
     *
     * @return void
     */
    public function formAction(){
        if($this->request->hasArgument('content')){
            if(strlen($this->request->getArgument('content')) > 0){
                $newComment = new \SIMONKOEHLER\Osp\Domain\Model\Comment();
                $newComment->setContent($this->request->getArgument('content'));
                $this->commentRepository->add($newComment);
            }
            else{
                $this->addFlashMessage("Well, that's too little!");
            }
        }
    }

    /**
     * action delete
     *
     * @return void
     */
    public function deleteAction(\SIMONKOEHLER\Osp\Domain\Model\Comment $comment){
        $this->commentRepository->remove($comment);
        $this->addFlashMessage('comment deleted!');
    }


    /**
     * action edit
     *
     * @return void
     */
    public function editAction(){
        if($this->request->hasArgument('comment')){
            $this->view->assign('comment', $this->commentRepository->findByUid($this->request->getArgument('comment')));
        }
    }


    /**
     * action update
     *
     * @return void
     */
    public function updateAction(\SIMONKOEHLER\Osp\Domain\Model\Comment $comment){
        $comment->setContent($this->request->getArgument('content'));
        $this->commentRepository->update($comment);
        $this->addFlashMessage('Comment updated!');
    }

}
