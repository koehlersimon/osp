<?php
defined('TYPO3_MODE') or die();

call_user_func(function () {
	$frontendLanguageFilePrefix = 'LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:';

	\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTcaSelectItem(
		'tt_content',
		'CType',
		[
			'LLL:EXT:osp/Resources/Private/Language/locallang_db.xlf:content.tx_osp.wizard.title',
			'osp_menu',
			'osp-menu'
		],
		'header',
		'after'
	);

	$GLOBALS['TCA']['tt_content']['ctrl']['typeicon_classes']['osp_menu'] = $GLOBALS['TCA']['tt_content']['ctrl']['typeicon_classes']['default'];

	// New palette header
	$GLOBALS['TCA']['tt_content']['palettes']['header'] = array(
  			'showitem' => 'header,header_layout','canNotCollapse' => 1
	);

	$GLOBALS['TCA']['tt_content']['types']['osp_menu'] = [
		'showitem' => '
                --palette--;' . $frontendLanguageFilePrefix . 'palette.general;general,
                --palette--;;header,
				pages,
				osp_menu_expand_all,
				--div--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:tabs.appearance,
				--palette--;LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:palette.frames;frames,
            	--div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:language,
                --palette--;;language,
            	--div--;' . $frontendLanguageFilePrefix . 'tabs.access,
                hidden;' . $frontendLanguageFilePrefix . 'field.default.hidden,
                --palette--;' . $frontendLanguageFilePrefix . 'palette.access;access,
            	--div--;LLL:EXT:core/Resources/Private/Language/Form/locallang_tabs.xlf:notes,
                rowDescription,
        ',
        'columnsOverrides' => [
			'pages' => [
                'config' => [
                    'maxitems' => 1,
					'size' => 1
                ]
            ]
        ]
    ];

	\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTCAcolumns('tt_content', [
		'osp_menu_expand_all' => [
			'label' => 'Expand all',
			'config' => [
				'type' => 'check',
				'renderType' => 'checkboxToggle',
			],
		]
	]);

});
