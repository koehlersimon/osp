<?php
defined('TYPO3_MODE') or die();

// Add some fields to FE Users table to show TCA fields definitions
// USAGE: TCA Reference > $GLOBALS['TCA'] array reference > ['columns'][fieldname]['config'] / TYPE: "select"
$temporaryColumns = [
        'tx_osp_url' => [
            'exclude' => 0,
            'label' => 'API Url',
            'config' => [
                'type' => 'input',
                'size' => '30'
            ]
        ],
        'tx_osp_apikey' => [
            'exclude' => 0,
            'label' => 'API Key',
            'config' => [
                'type' => 'input',
                'size' => '30'
            ]
        ],
        'tx_osp_body_classes' => [
            'exclude' => 0,
            'label' => 'Overwrite CSS classes of the body tag',
            'config' => [
                'type' => 'input',
                'size' => '40'
            ]
        ],
        'tx_osp_navbar_classes' => [
            'exclude' => 0,
            'label' => 'Overwrite CSS classes of the navbar tag',
            'config' => [
                'type' => 'input',
                'size' => '40'
            ]
        ],
        'tx_osp_header_image' => [
            'exclude' => true,
            'label' => 'Header Image',
            'config' => \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::getFileFieldTCAConfig(
                'media',
                [
                    'appearance' => [
                        'createNewRelationLinkTitle' => 'LLL:EXT:frontend/Resources/Private/Language/locallang_ttc.xlf:media.addFileReference'
                    ],
                    'foreign_types' => [
                        '0' => [
                            'showitem' => '
                            --palette--;LLL:EXT:lang/locallang_tca.xlf:sys_file_reference.imageoverlayPalette;imageoverlayPalette,
                            --palette--;;filePalette'
                        ],
                        \TYPO3\CMS\Core\Resource\File::FILETYPE_TEXT => [
                            'showitem' => '
                            --palette--;LLL:EXT:lang/locallang_tca.xlf:sys_file_reference.imageoverlayPalette;imageoverlayPalette,
                            --palette--;;filePalette'
                        ],
                        \TYPO3\CMS\Core\Resource\File::FILETYPE_IMAGE => [
                            'showitem' => '
                            --palette--;LLL:EXT:lang/locallang_tca.xlf:sys_file_reference.imageoverlayPalette;imageoverlayPalette,
                            --palette--;;filePalette'
                        ],
                        \TYPO3\CMS\Core\Resource\File::FILETYPE_AUDIO => [
                            'showitem' => '
                            --palette--;LLL:EXT:lang/locallang_tca.xlf:sys_file_reference.imageoverlayPalette;imageoverlayPalette,
                            --palette--;;filePalette'
                        ],
                        \TYPO3\CMS\Core\Resource\File::FILETYPE_VIDEO => [
                            'showitem' => '
                            --palette--;LLL:EXT:lang/locallang_tca.xlf:sys_file_reference.imageoverlayPalette;imageoverlayPalette,
                            --palette--;;filePalette'
                        ],
                        \TYPO3\CMS\Core\Resource\File::FILETYPE_APPLICATION => [
                            'showitem' => '
                            --palette--;LLL:EXT:lang/locallang_tca.xlf:sys_file_reference.imageoverlayPalette;imageoverlayPalette,
                            --palette--;;filePalette'
                        ]
                    ],
                    'maxitems' => 1
                ]
            ),
        ],
        'tx_osp_custom_css' => [
            'exclude' => 0,
            'label' => 'Custom CSS',
            'config' => [
                'type' => 'text',
                'rows' => 15,
            ]
        ],
];

\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTCAcolumns(
        'fe_users',
        $temporaryColumns
);
\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addToAllTCAtypes(
        'fe_users',
        '--div--;OSP Settings,tx_osp_header_image,tx_osp_url,tx_osp_apikey,tx_osp_custom_css,tx_osp_body_classes,tx_osp_navbar_classes',
        '',
        'after:image'
);
