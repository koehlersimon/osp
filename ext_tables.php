<?php
defined('TYPO3_MODE') || die('Access denied.');

call_user_func(
    function()
    {

        \TYPO3\CMS\Extbase\Utility\ExtensionUtility::registerPlugin(
            'Osp',
            'Home',
            'Open Source Platform - Homepage'
        );

        \TYPO3\CMS\Extbase\Utility\ExtensionUtility::registerPlugin(
            'Osp',
            'Wall',
            'Open Source Platform - Wall'
        );

        \TYPO3\CMS\Extbase\Utility\ExtensionUtility::registerPlugin(
            'Osp',
            'Post',
            'Open Source Platform - Post Detail'
        );

        \TYPO3\CMS\Extbase\Utility\ExtensionUtility::registerPlugin(
            'Osp',
            'Form',
            'Open Source Platform - Post Form'
        );

        \TYPO3\CMS\Extbase\Utility\ExtensionUtility::registerPlugin(
            'Osp',
            'Browser',
            'Open Source Platform - Browser Interface'
        );

        \TYPO3\CMS\Extbase\Utility\ExtensionUtility::registerPlugin(
            'Osp',
            'Like',
            'Open Source Platform - Like Plugin'
        );

        \TYPO3\CMS\Extbase\Utility\ExtensionUtility::registerPlugin(
            'Osp',
            'Account',
            'Open Source Platform - User Account'
        );

        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile('osp', 'Configuration/TypoScript', 'Open Social Project');

        // Module System > Backend Users
        \TYPO3\CMS\Extbase\Utility\ExtensionUtility::registerModule(
            'OSP',
            'web',
            'tx_osp',
            'top',
            [
                \SIMONKOEHLER\Osp\Controller\PostController::class => 'list'
            ],
            [
                'access' => 'admin',
                'icon' => 'EXT:osp/ext_icon.gif',
                'labels' => 'LLL:EXT:osp/Resources/Private/Language/locallang_mod.xlf',
            ]
        );

    }
);
