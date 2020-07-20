<?php
defined('TYPO3_MODE') || die('Access denied.');

call_user_func(
    function()
    {

        \TYPO3\CMS\Extbase\Utility\ExtensionUtility::configurePlugin(
            'Osp',
            'Home',
            [\SIMONKOEHLER\Osp\Controller\PostController::class => 'home'],
            // non-cacheable actions
            [\SIMONKOEHLER\Osp\Controller\PostController::class => 'home']
        );

        \TYPO3\CMS\Extbase\Utility\ExtensionUtility::configurePlugin(
            'Osp',
            'Wall',
            [\SIMONKOEHLER\Osp\Controller\PostController::class => 'list'],
            // non-cacheable actions
            [\SIMONKOEHLER\Osp\Controller\PostController::class => 'list']
        );

        \TYPO3\CMS\Extbase\Utility\ExtensionUtility::configurePlugin(
            'Osp',
            'Post',
            [\SIMONKOEHLER\Osp\Controller\PostController::class => 'detail,preview,fetch,provide'],
            // non-cacheable actions
            [\SIMONKOEHLER\Osp\Controller\PostController::class => 'detail,preview,fetch,provide']
        );

        \TYPO3\CMS\Extbase\Utility\ExtensionUtility::configurePlugin(
            'Osp',
            'Form',
            [\SIMONKOEHLER\Osp\Controller\PostController::class => 'form,edit,update,delete'],
            // non-cacheable actions
            [\SIMONKOEHLER\Osp\Controller\PostController::class => 'form,edit,update,delete']
        );

        \TYPO3\CMS\Extbase\Utility\ExtensionUtility::configurePlugin(
            'Osp',
            'Browser',
            [\SIMONKOEHLER\Osp\Controller\BrowserController::class => 'index'],
            // non-cacheable actions
            [\SIMONKOEHLER\Osp\Controller\BrowserController::class => 'index']
        );

        \TYPO3\CMS\Extbase\Utility\ExtensionUtility::configurePlugin(
            'Osp',
            'Like',
            [\SIMONKOEHLER\Osp\Controller\LikeController::class => 'like'],
            // non-cacheable actions
            [\SIMONKOEHLER\Osp\Controller\LikeController::class => 'like']
        );

        \TYPO3\CMS\Extbase\Utility\ExtensionUtility::configurePlugin(
            'Osp',
            'Account',
            [\SIMONKOEHLER\Osp\Controller\AccountController::class => 'overview,edit'],
            // non-cacheable actions
            [\SIMONKOEHLER\Osp\Controller\AccountController::class => 'overview,edit']
        );

        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:osp/Configuration/TypoScript/belayouts.ts">');

        $GLOBALS['TYPO3_CONF_VARS']['SYS']['Objects']['TYPO3\CMS\Extbase\Domain\Model\FrontendUser'] = array(
            'className' => 'SIMONKOEHLER\Osp\Domain\Model\User'
        );

        // Hook into the page module
        // $GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['cms/layout/db_layout.php']['drawHeaderHook']['osp'] = \SIMONKOEHLER\Osp\Hook\PageHook::class . '->render';

    }
);
