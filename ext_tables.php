<?php
defined('TYPO3_MODE') || die('Access denied.');

call_user_func(
    function()
    {

        \TYPO3\CMS\Extbase\Utility\ExtensionUtility::registerPlugin(
            'Osp',
            'List',
            'OSP - List'
        );

        \TYPO3\CMS\Extbase\Utility\ExtensionUtility::registerPlugin(
            'Osp',
            'Post',
            'OSP - Post Detail'
        );

        \TYPO3\CMS\Extbase\Utility\ExtensionUtility::registerPlugin(
            'Osp',
            'Form',
            'OSP - Post Form'
        );

        \TYPO3\CMS\Extbase\Utility\ExtensionUtility::registerPlugin(
            'Osp',
            'Browser',
            'OSP - Browser Interface'
        );

        \TYPO3\CMS\Extbase\Utility\ExtensionUtility::registerPlugin(
            'Osp',
            'Like',
            'OSP - Like Plugin'
        );

        \TYPO3\CMS\Extbase\Utility\ExtensionUtility::registerPlugin(
            'Osp',
            'Account',
            'OSP - User Account'
        );

        \TYPO3\CMS\Extbase\Utility\ExtensionUtility::registerPlugin(
            'Osp',
            'Comment',
            'OSP - Comment'
        );

        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile('osp', 'Configuration/TypoScript', 'Open Social Project');

        // Module System > Backend Users
        \TYPO3\CMS\Extbase\Utility\ExtensionUtility::registerModule(
            'OSP',
            'web',
            'tx_osp',
            'top',
            [
                \SIMONKOEHLER\Osp\Controller\PostController::class => 'backendList'
            ],
            [
                'access' => 'admin',
                'icon' => 'EXT:osp/ext_icon.gif',
                'labels' => 'LLL:EXT:osp/Resources/Private/Language/locallang_mod.xlf',
            ]
        );

    }
);
