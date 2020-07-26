<?php
// plugin signature: <extension key without underscores> '_' <plugin name in lowercase>
$pluginAccount = 'osp_account';
$pluginList = 'osp_list';

$GLOBALS['TCA']['tt_content']['types']['list']['subtypes_addlist'][$pluginAccount] = 'pi_flexform';
$GLOBALS['TCA']['tt_content']['types']['list']['subtypes_addlist'][$pluginList] = 'pi_flexform';

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPiFlexFormValue(
    $pluginAccount,
    'FILE:EXT:osp/Configuration/FlexForms/Account.xml'
);

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPiFlexFormValue(
    $pluginList,
    'FILE:EXT:osp/Configuration/FlexForms/List.xml'
);
