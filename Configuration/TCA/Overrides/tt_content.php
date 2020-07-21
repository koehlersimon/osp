<?php
// plugin signature: <extension key without underscores> '_' <plugin name in lowercase>
$pluginSignature = 'osp_account';

$GLOBALS['TCA']['tt_content']['types']['list']['subtypes_addlist'][$pluginSignature] = 'pi_flexform';
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPiFlexFormValue(
    $pluginSignature,
    'FILE:EXT:osp/Configuration/FlexForms/Account.xml'
);


$GLOBALS['TCA']['tt_content']['columns']['frame_class']['config']['items'] = NULL;
$GLOBALS['TCA']['tt_content']['columns']['frame_class']['config']['items']['default'] = [
   0 => 'LLL:EXT:osp/Resources/Private/Language/locallang.xlf:ce.frames.default',
   1 => 'default'
];
$GLOBALS['TCA']['tt_content']['columns']['frame_class']['config']['items'][] = [
   0 => 'LLL:EXT:osp/Resources/Private/Language/locallang.xlf:ce.frames.card',
   1 => 'card'
];
