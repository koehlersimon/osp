<?php
declare(strict_types = 1);

return [
    \TYPO3\CMS\Extbase\Domain\Model\FrontendUser::class > [
        'subclasses' => [
            \SIMONKOEHLER\Osp\Domain\Model\User::class
        ]
    ],
    \SIMONKOEHLER\Osp\Domain\Model\User::class > [
        'tableName' => 'fe_users',
        'recordType' => 0,
        'properties' => [
            'url' => [
                'fieldName' => 'www'
            ]
        ],
    ]
];
