<?php
declare(strict_types=1);
namespace SIMONKOEHLER\Osp;

use SIMONKOEHLER\Osp\Widgets\FrontendUserWidget;
//use SIMONKOEHLER\Osp\Widgets\Provider\ExampleProvider;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Loader\Configurator\ContainerConfigurator;
use Symfony\Component\DependencyInjection\Reference;
use TYPO3\CMS\Core\Utility\ExtensionManagementUtility;

return function (ContainerConfigurator $configurator, ContainerBuilder $containerBuilder) {
    $services = $configurator->services();

    if (ExtensionManagementUtility::isLoaded('osp')) {
        $services->set('widgets.dashboard.widget.frontendUser')
            ->class(FrontendUserWidget::class)
            ->arg('$view', new Reference('dashboard.views.widget'))
            ->arg('$buttonProvider', null)
            ->arg('$options', ['template' => 'Widget/FrontendUserWidget'])
            ->tag('dashboard.widget', [
               'identifier' => 'widgets-frontendUser',
               'groupNames' => 'osp',
               'title' => 'Latest Registrations',
               'description' => 'Shows the last 20 users who have signed up',
               'iconIdentifier' => 'content-widget-list',
               'height' => 'medium',
               'width' => 'medium'
            ])
        ;
    }
    else{
        print_r("FUUUCK NO!!");
    }
};
