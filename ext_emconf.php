<?php

/***************************************************************
 * Made by Simon Köhler @ simon-koehler.com
 ***************************************************************/

$EM_CONF[$_EXTKEY] = [
    'title' => 'Open Social Project',
    'description' => 'Become the master of your own social platform',
    'category' => 'plugin',
    'author' => 'Simon Köhler',
    'author_email' => 'info@simon-koehler.com',
    'state' => 'alpha',
    'uploadfolder' => 0,
    'createDirs' => '',
    'clearCacheOnLoad' => 0,
    'version' => '0.0.6',
    'constraints' => [
        'depends' => [
            'typo3' => '9.5.99-10.4.99',
            'textile' => '1.0.0',
            'fallback' => '1.0.0'
        ],
        'conflicts' => [],
        'suggests' => [],
    ],
    'autoload' => [
       'psr-4' => [
           'SIMONKOEHLER\\Osp\\' => 'Classes'
        ],
    ],
];
