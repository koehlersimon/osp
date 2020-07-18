plugin.tx_osp {
    settings{
        site{
            # cat=OSP Site//a; type=string; label=Base URL
            baseUrl = {$plugin.tx_osp.settings.site.baseUrl}
            # cat=OSP Site//a; type=string; label=Navbar Brand
            navbarBrand = {$plugin.tx_osp.settings.site.navbarBrand}
        }
        user{
            admin{
                profilePicture = {$plugin.tx_osp.settings.user.admin.profilePicture}
                usergroup = {$plugin.tx_osp.settings.user.admin.usergroup}
            }
        }
        pages{
            wall = {$plugin.tx_osp.settings.pages.wall}
            login = {$plugin.tx_osp.settings.pages.login}
            post{
                form = {$plugin.tx_osp.settings.pages.post.form}
                detail = {$plugin.tx_osp.settings.pages.post.detail}
            }
        }
        storage{
            media = {$plugin.tx_osp.settings.storage.media}
            posts = {$plugin.tx_osp.settings.storage.posts}
            comments = {$plugin.tx_osp.settings.storage.comments}
        }
        layout{
            disableHeader = {$plugin.tx_osp.settings.layout.disableHeader}
            headerClasses = {$plugin.tx_osp.settings.layout.headerClasses}
            showNavbarContent = {$plugin.tx_osp.settings.layout.showNavbarContent}
        }
        menus{
            primary{
                root = {$plugin.tx_osp.settings.menus.primary.root}
            }
            secondary{
                root = {$plugin.tx_osp.settings.menus.secondary.root}
            }
        }
    }
    persistence {
        storagePid = {$plugin.tx_osp.settings.storage.posts}
    }
    view {
        templateRootPaths.0 = EXT:osp/Resources/Private/Templates/
        partialRootPaths.0 = EXT:osp/Resources/Private/Partials/
        layoutRootPaths.0 = EXT:osp/Resources/Private/Layouts/
    }
}

plugin.tx_osp_wall {
    view {
        templateRootPaths.0 = EXT:osp/Resources/Private/Templates/
        templateRootPaths.1 = {$plugin.tx_osp_wall.view.templateRootPath}
        partialRootPaths.0 = EXT:osp/Resources/Private/Partials/
        partialRootPaths.1 = {$plugin.tx_osp_wall.view.partialRootPath}
        layoutRootPaths.0 = EXT:osp/Resources/Private/Layouts/
        layoutRootPaths.1 = {$plugin.tx_osp_wall.view.layoutRootPath}
    }
    persistence {
        storagePid = {$plugin.tx_osp.settings.storage.posts}
    }
}

plugin.tx_osp_form {
    view {
        templateRootPaths.0 = EXT:osp/Resources/Private/Templates/
        templateRootPaths.1 = {$plugin.tx_osp_form.view.templateRootPath}
        partialRootPaths.0 = EXT:osp/Resources/Private/Partials/
        partialRootPaths.1 = {$plugin.tx_osp_form.view.partialRootPath}
        layoutRootPaths.0 = EXT:osp/Resources/Private/Layouts/
        layoutRootPaths.1 = {$plugin.tx_osp_form.view.layoutRootPath}
    }
    persistence {
        storagePid = {$plugin.tx_osp.settings.storage.posts}
    }
}

module.tx_osp {
    view {
        templateRootPaths {
            10 = EXT:osp/Resources/Private/Backend/Templates/
        }
        layoutRootPaths {
           10 = EXT:osp/Resources/Private/Backend/Layouts/
        }
    }
}

config.no_cache = 1
config.baseURL = {$plugin.tx_osp.settings.site.baseUrl}

page = PAGE
page {
    typeNum = 0
    config.contentObjectExceptionHandler = 0
    bodyTagAdd = class="bg-light"

    meta {
        viewport = width=device-width, initial-scale=1
        X-UA-Compatible = IE=11
        X-UA-Compatible.httpEquivalent = 1
        msapplication-TileColor = #2b2b2b
        theme-color = #2b2b2b
        mobile-web-app-capable = yes
        apple-mobile-web-app-status-bar-style = white
        apple-mobile-web-app-capable = yes
        apple-mobile-web-app-title = OSP
    }

    headerData{
        10 = TEXT
        10.value(
            <!--[if lt IE 9]>
                <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
                <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
            <![endif]-->
        )
        20 = TEXT
        20.value(
            <style>
                .typo3-messages{
                    list-style-type:none;
                    padding:0;
                }
                .typo3-messages .alert-message{
                    margin:0;
                }
            </style>
        )
    }

    includeCSS{
        bootstrap = https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css
        bootstrap.integrity = sha384-r4NyP46KrjDleawBgD5tp8Y7UzmLA05oM1iAEQ17CSuDqnUK2+k9luXQOfXJCJ4I
        bootstrap.crossorigin = anonymous
        bootstrap.external = 1
        fa = https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css
        fa.external = 1
        lightbox = EXT:osp/Resources/Public/Js/javascript-lightbox/javascriptLightbox.css
    }

    includeJSFooterlibs{
        bootstrap_popper = https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js
        bootstrap_popper.integrity = sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo
        bootstrap_popper.crossorigin = anonymous
        bootstrap = https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/js/bootstrap.min.js
        bootstrap.integrity = sha384-oesi62hOLfzrys4LxRF63OJCXdXDipiYWBnvTl9Y9/TRlw5xlKIEHpNyvvDShgf/
        bootstrap.crossorigin = anonymous
        lightbox = EXT:osp/Resources/Public/Js/javascript-lightbox/javascriptLightbox.js
        global = EXT:osp/Resources/Public/Js/Global.js
        form = EXT:osp/Resources/Public/Js/Form.js
        like = EXT:osp/Resources/Public/Js/Like.js
    }

    10 = FLUIDTEMPLATE
    10{

        layoutRootPath = EXT:osp/Resources/Private/Layouts/
        partialRootPath = EXT:osp/Resources/Private/Partials/

        dataProcessing {

            5 = TYPO3\CMS\Frontend\DataProcessing\MenuProcessor
            5 {
               special = directory
               special.value = {$plugin.tx_osp.settings.menus.primary.root}
               levels = 2
               as = menuPrimary
               expandAll = 1
               includeSpacer = 1
               titleField = nav_title // title
               dataProcessing {
                  10 = TYPO3\CMS\Frontend\DataProcessing\FilesProcessor
                  10 {
                     references.fieldName = media
                  }
               }
            }

            15 = TYPO3\CMS\Frontend\DataProcessing\MenuProcessor
            15 {
                levels = 3
                special = directory
                special.value = {$plugin.tx_osp.settings.menus.secondary.root}
                expandAll = 0
                includeSpacer = 1
                as = menuSecondary
            }

            20 = TYPO3\CMS\Frontend\DataProcessing\MenuProcessor
            20 {
                special = rootline
                special.range = 1|-1
                as = menuRootline
            }

        }

        settings < plugin.tx_osp.settings

        variables {

            left < styles.content.get
            left.select.where = colPos = 1
            left.select.includeRecordsWithoutDefaultTranslation = 1
            left.slide = -1

            content < styles.content.get
            content.select.where = colPos = 0
            content.select.includeRecordsWithoutDefaultTranslation = 1

            right < styles.content.get
            right.select.where = colPos = 2
            right.select.includeRecordsWithoutDefaultTranslation = 1
            right.slide = -1

            header < styles.content.get
            header.select.where = colPos = 3
            header.select.includeRecordsWithoutDefaultTranslation = 1
            header.slide = -1

            rootPageId = TEXT
            rootPageId.data = site:rootPageId

        }

        file.cObject = CASE
        file.cObject {
            key.data = levelfield:-1, backend_layout_next_level, slide
            key.override.field = backend_layout

            pagets__sidebar_left = TEXT
            pagets__sidebar_left.value = EXT:osp/Resources/Private/Templates/SidebarLeft.html

            pagets__sidebar_right = TEXT
            pagets__sidebar_right.value = EXT:osp/Resources/Private/Templates/SidebarRight.html

            pagets__sidebar_left_header = TEXT
            pagets__sidebar_left_header.value = EXT:osp/Resources/Private/Templates/SidebarLeftHeader.html

            pagets__sidebar_right_header = TEXT
            pagets__sidebar_right_header.value = EXT:osp/Resources/Private/Templates/SidebarRightHeader.html

            pagets__post_detail = TEXT
            pagets__post_detail.value = EXT:osp/Resources/Private/Templates/PostDetail.html

            pagets__page = TEXT
            pagets__page.value = EXT:osp/Resources/Private/Templates/Page.html

            default = TEXT
            default.value = EXT:osp/Resources/Private/Templates/Default.html
        }
    }
}

[frontend.user.isLoggedIn]
page.10.dataProcessing.25 = TYPO3\CMS\Frontend\DataProcessing\DatabaseQueryProcessor
page.10.dataProcessing.25 {
    table = fe_users
    pidInList = 4
    uidInList.stdWrap.data = TSFE:fe_user|user|uid
    recursive = 1
    where = deleted = 0
    as = fe_user
    dataProcessing {
        10 = TYPO3\CMS\Frontend\DataProcessing\FilesProcessor
        10 {
            references.fieldName = image
            as = images
        }
        20 = TYPO3\CMS\Frontend\DataProcessing\FilesProcessor
        20 {
            references.fieldName = tx_osp_header_image
            as = header
        }
    }
}
[end]

lib.userProfileImage = COA_INT
lib.userProfileImage {
    10 = FILES
    10 {
        references {
            table = fe_users
            fieldName = image
            uid.dataWrap = {TSFE:fe_user|user|uid}
        }
        begin = 0
        maxItems = 1
        renderObj = IMAGE
        renderObj {
            file.width = 180c
            file.height = 180c
            file.import.dataWrap = {file:current:storage}:{file:current:identifier}
            params = class="img-circle img-fluid img-thumbnail" style="border-radius:50%;"
            wrap = |
        }
    }
}

ajaxRequest = PAGE
ajaxRequest {
    config {
        disableAllHeaderCode = 1
        additionalHeaders = Content-Type:text/html;charset=utf-8
        #xhtml_cleaning = 0
        admPanel = 0
        debug = 0
    }
    typeNum = 666
}

browserExtensionInterface = PAGE
browserExtensionInterface {
    config {
        disableAllHeaderCode = 1
        additionalHeaders = Content-Type:text/html;charset=utf-8
        #xhtml_cleaning = 0
        admPanel = 0
        debug = 0
    }
    typeNum = 890
    10 = COA
    10 {
        10 = USER
        10 {
            userFunc = TYPO3\CMS\Extbase\Core\Bootstrap->run
            extensionName = Osp
            pluginName = Browser
            vendorName = SIMONKOEHLER
            controller = Browser
            action = index
            switchableControllerActions {
                Browser {
                    1 = index
                }
            }
            view < plugin.tx_osp.view
            persistence < plugin.tx_osp.persistence
            settings < plugin.tx_osp.settings
        }
    }
}

browserExtensionForm = PAGE
browserExtensionForm {
    config {
        disableAllHeaderCode = 1
        additionalHeaders = Content-Type:text/html;charset=utf-8
        #xhtml_cleaning = 0
        admPanel = 0
        debug = 0
    }
    typeNum = 891
    10 = COA
    10 {
        10 = USER
        10 {
            userFunc = TYPO3\CMS\Extbase\Core\Bootstrap->run
            extensionName = Osp
            pluginName = Form
            vendorName = SIMONKOEHLER
            controller = Browser
            action = form
            switchableControllerActions {
                Post {
                    1 = form
                }
            }
            view < plugin.tx_osp.view
            persistence < plugin.tx_osp.persistence
            settings < plugin.tx_osp.settings
        }
    }
}

markdownPreview = PAGE
markdownPreview {
    config {
        disableAllHeaderCode = 1
        additionalHeaders = Content-Type:text/html;charset=utf-8
        xhtml_cleaning = 0
        admPanel = 0
        debug = 0
    }
    typeNum = 897

    10 = COA
    10 {
        10 = USER
        10 {
            userFunc = TYPO3\CMS\Extbase\Core\Bootstrap->run
            extensionName = Osp
            pluginName = Post
            vendorName = SIMONKOEHLER
            controller = Post
            action = save
            switchableControllerActions {
                Post {
                    1 = preview
                }
            }
            view < plugin.tx_osp.view
            persistence < plugin.tx_osp.persistence
            settings < plugin.tx_osp.settings
        }
    }

}

like = PAGE
like {
    config.contentObjectExceptionHandler = 0
    config {
        disableAllHeaderCode = 1
        additionalHeaders = Content-Type:text/html;charset=utf-8
        xhtml_cleaning = 0
        admPanel = 0
        debug = 0
    }
    typeNum = 898
    10 = COA
    10 {
        10 = USER
        10 {
            userFunc = TYPO3\CMS\Extbase\Core\Bootstrap->run
            extensionName = Osp
            pluginName = Like
            vendorName = SIMONKOEHLER
            controller = Like
            action = like
            switchableControllerActions {
                Like {
                    1 = like
                }
            }
            view < plugin.tx_osp.view
            persistence < plugin.tx_osp.persistence
            settings < plugin.tx_osp.settings
        }
    }
}

[frontend.user.isLoggedIn]
    ajaxRequest.20 = TEXT
    ajaxRequest.20.value = Hello World!
[else]
    ajaxRequest.20 = TEXT
    ajaxRequest.20.value = {message:'No access!'}
    markdownPreview.20 = TEXT
    markdownPreview.20.value = <div class="alert alert-info">WARNING: NO PUBLIC ACCESS</div>
    browserExtensionInterface.10 >
    browserExtensionInterface.10 = TEXT
    browserExtensionInterface.10.value = <div class="alert alert-info">WARNING: NO PUBLIC ACCESS</div>
    browserExtensionForm.10 >
    browserExtensionForm.10 = TEXT
    browserExtensionForm.10.insertData = 1
    browserExtensionForm.10.value = <div class="alert alert-info">You must be logged in to write a post! <a href="{site:base}" class="link">Login</a></div>
[end]


# Profile image

lib.profileHeader = IMG_RESOURCE
lib.profileHeader {
  file {
    import = uploads/media/
    import.data = levelmedia:-1, slide
    treatIdAsReference = 1
    import.listNum = 0
    width = 1680c
    height = 1050c
  }
}

#tt_content.stdWrap.dataWrap >
lib.parseFunc_RTE.nonTypoTagStdWrap.encapsLines >

lib.navbarContent = TEXT
lib.navbarContent.value(
    <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
        <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-expanded="false">
            Dropdown
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
            </ul>
        </li>
        <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
    </ul>
)
