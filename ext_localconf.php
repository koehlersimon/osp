<?php
defined('TYPO3_MODE') || die('Access denied.');

call_user_func(
    function()
    {

        \TYPO3\CMS\Extbase\Utility\ExtensionUtility::configurePlugin(
            'Osp',
            'List',
            [\SIMONKOEHLER\Osp\Controller\PostController::class => 'list,listAjax'],
            // non-cacheable actions
            [\SIMONKOEHLER\Osp\Controller\PostController::class => 'list,listAjax']
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

        $GLOBALS['TYPO3_CONF_VARS']['SYS']['Objects']['TYPO3\CMS\Extbase\Domain\Model\FrontendUser'] = array(
            'className' => 'SIMONKOEHLER\Osp\Domain\Model\User'
        );

        $icons = [
            'osp-wall' => 'EXT:osp/Resources/Public/Icons/osp.svg',
            'osp-form' => 'EXT:osp/Resources/Public/Icons/osp.svg',
            'osp-home' => 'EXT:osp/Resources/Public/Icons/osp.svg',
            'osp-menu' => 'EXT:osp/Resources/Public/Icons/osp.svg',
        ];
        $iconRegistry = \TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(\TYPO3\CMS\Core\Imaging\IconRegistry::class);
        foreach ($icons as $identifier => $path) {
            $iconRegistry->registerIcon(
                $identifier,
                \TYPO3\CMS\Core\Imaging\IconProvider\SvgIconProvider::class,
                ['source' => $path]
            );
        }

        // Hook into the page module
        $GLOBALS['TYPO3_CONF_VARS']['SC_OPTIONS']['cms/layout/db_layout.php']['drawHeaderHook']['osp'] = \SIMONKOEHLER\Osp\Hook\PageHook::class . '->render';

    }
);
