<?php
namespace SIMONKOEHLER\Osp\Controller;
use SIMONKOEHLER\Osp\Domain\Repository\AccountRepository;
use TYPO3\CMS\Extbase\Domain\Model\FrontendUser;
use TYPO3\CMS\Extbase\Domain\Repository\FrontendUserRepository;
use TYPO3\CMS\Core\Crypto\PasswordHashing\PasswordHashFactory;
use TYPO3\CMS\Core\Utility\GeneralUtility;

/**
 * AccountController
 */
class AccountController extends \TYPO3\CMS\Extbase\Mvc\Controller\ActionController {

    /**
    * @var AccountRepository
    */
    protected $accountRepository;

    /**
    * @var FrontendUserRepository
    */
    protected $frontendUserRepository;

    /**
     * Construct
     *
     * @return void
     */
    public function __construct(AccountRepository $accountRepository, FrontendUserRepository $frontendUserRepository) {
        $this->accountRepository = $accountRepository;
        $this->frontendUserRepository = $frontendUserRepository;
    }

    /**
     * action overview
     *
     * @return void
     */
    public function overviewAction() {
        $fe_user = $this->frontendUserRepository->findByUid($GLOBALS['TSFE']->fe_user->user['uid']);
        $this->view->assign('fe_user', $fe_user);
        $this->view->assign('fe_user_array', $GLOBALS['TSFE']->fe_user->user);
    }

    /**
     * action edit
     *
     * @return void
     */
    public function editAction() {

        // Translation variables for JavaScript
        $translationVariables = '<script>';
        $translationVariables .= 'var lang_username_available ="'.$this->getTranslation('account.username_available').'";';
        $translationVariables .= 'var lang_username_not_available ="'.$this->getTranslation('account.username_not_available').'";';
        $translationVariables .= 'var lang_username_not_available ="'.$this->getTranslation('account.username_not_available').'";';
        $translationVariables .= 'var lang_username_checking ="'.$this->getTranslation('account.username_checking').'";';
        $translationVariables .= 'var lang_password_minlength ="'.$this->getTranslation('account.password_minlength').'";';
        $translationVariables .= '</script>';

        // Get all arguments
        $postVars = $this->request->getArguments();

        // Set some vars for the fe_user
        $feUser['uid'] = $GLOBALS['TSFE']->fe_user->user['uid'];
        $feUser['image'] = $GLOBALS['TSFE']->fe_user->user['image'];

        if($this->request->hasArgument('delete')){
            $this->addFlashMessage($this->getTranslation('account.delete_account_finally_question'));
            $this->view->assign('deleteConfirm','true');
        }
        elseif($this->request->hasArgument('confirmed')){
            $this->accountRepository->deleteAccount($feUser['uid']);
            $this->addFlashMessage($this->getTranslation('account.deleted'));
            $this->view->assign('deleteConfirm','true');
            $uriBuilder = $this->uriBuilder;
            $uri = $uriBuilder
              ->setTargetPageUid(1)
              ->build();
            $this->redirectToUri($uri, 0, 404);
        }
        else{

            // If something comes from the username field
            if(trim($postVars['username']) !== ''){
                if($this->accountRepository->usernameExists(trim($postVars['username'])) == 1){
                    $this->addFlashMessage('Sorry, this username already exists!');
                    $feUser['username'] = $GLOBALS['TSFE']->fe_user->user['username'];
                }
                else{
                   $feUser['usernameUnique'] = trim($postVars['username']);
                   $feUser['username'] = trim($postVars['username']);
                }
            }
            else{
                $feUser['username'] = $GLOBALS['TSFE']->fe_user->user['username'];
            }

            $feUser['company'] = $this->preparedFieldName('company');
            $feUser['title'] = $this->preparedFieldName('title');
            $feUser['name'] = $this->preparedFieldName('name');
            $feUser['first_name'] = $this->preparedFieldName('first_name');
            $feUser['middle_name'] = $this->preparedFieldName('middle_name');
            $feUser['last_name'] = $this->preparedFieldName('last_name');
            $feUser['email'] = $this->preparedFieldName('email');
            $feUser['telephone'] = $this->preparedFieldName('telephone');
            $feUser['address'] = $this->preparedFieldName('address');
            $feUser['zip'] = $this->preparedFieldName('zip');
            $feUser['city'] = $this->preparedFieldName('city');
            $feUser['country'] = $this->preparedFieldName('country');
            $feUser['passwordCurrent'] = $this->preparedFieldName('passwordCurrent');
            $feUser['passwordCurrentConfirmation'] = $this->preparedFieldName('passwordCurrentConfirmation');
            $feUser['passwordNew'] = $this->preparedFieldName('passwordNew');

            // If all three password fields are filled out...
            if($feUser['passwordCurrent'] && $feUser['passwordCurrentConfirmation'] && $feUser['passwordNew'] !== ''){

                if($feUser['passwordCurrent'] === $feUser['passwordCurrentConfirmation']){
                    $hashInstance = GeneralUtility::makeInstance(PasswordHashFactory::class)->getDefaultHashInstance('FE');
                    $feUser['passwordNewHashed'] = $hashInstance->getHashedPassword($feUser['passwordNew']);
                    $this->addFlashMessage($this->getTranslation('account.password_saved'));
                }
                else{
                    $this->addFlashMessage($this->getTranslation('account.password_confirmation_failed'));
                }

            }

            if($postVars){
                if($this->accountRepository->updateUserData($feUser)){
                    $this->addFlashMessage($this->getTranslation('account.successfully_saved'));
                }
            }

            $this->view->assign('user', $feUser);
            $this->view->assign('settings',$this->settings);

        }


    }

    private function preparedFieldName($fieldName) {
        if($this->request->hasArgument($fieldName)){
            return $this->request->getArgument($fieldName);
        }
        else{
            return $GLOBALS['TSFE']->fe_user->user[$fieldName];
        }
    }

    private function getTranslation($key){
        return \TYPO3\CMS\Extbase\Utility\LocalizationUtility::translate($key,'osp');
    }


}
