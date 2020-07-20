<?php
// plugin signature: <extension key without underscores> '_' <plugin name in lowercase>
$pluginSignature = 'osp_account';

$GLOBALS['TCA']['tt_content']['types']['list']['subtypes_addlist'][$pluginSignature] = 'pi_flexform';
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPiFlexFormValue(
    $pluginSignature,
    'FILE:EXT:osp/Configuration/FlexForms/Account.xml'
);
