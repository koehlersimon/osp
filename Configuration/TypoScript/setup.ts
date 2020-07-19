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
            home = {$plugin.tx_osp.settings.pages.home}
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
        5 = TEXT
        5.value(
            <link rel="apple-touch-icon" sizes="57x57" href="typo3conf/ext/osp/Resources/Public/Icons/Public/apple-icon-57x57.png">
            <link rel="apple-touch-icon" sizes="60x60" href="typo3conf/ext/osp/Resources/Public/Icons/Public/apple-icon-60x60.png">
            <link rel="apple-touch-icon" sizes="72x72" href="typo3conf/ext/osp/Resources/Public/Icons/Public/apple-icon-72x72.png">
            <link rel="apple-touch-icon" sizes="76x76" href="typo3conf/ext/osp/Resources/Public/Icons/Public/apple-icon-76x76.png">
            <link rel="apple-touch-icon" sizes="114x114" href="typo3conf/ext/osp/Resources/Public/Icons/Public/apple-icon-114x114.png">
            <link rel="apple-touch-icon" sizes="120x120" href="typo3conf/ext/osp/Resources/Public/Icons/Public/apple-icon-120x120.png">
            <link rel="apple-touch-icon" sizes="144x144" href="typo3conf/ext/osp/Resources/Public/Icons/Public/apple-icon-144x144.png">
            <link rel="apple-touch-icon" sizes="152x152" href="typo3conf/ext/osp/Resources/Public/Icons/Public/apple-icon-152x152.png">
            <link rel="apple-touch-icon" sizes="180x180" href="typo3conf/ext/osp/Resources/Public/Icons/Public/apple-icon-180x180.png">
            <link rel="icon" type="image/png" sizes="192x192" href="typo3conf/ext/osp/Resources/Public/Icons/Public/android-icon-192x192.png">
            <link rel="icon" type="image/png" sizes="32x32" href="typo3conf/ext/osp/Resources/Public/Icons/Public/favicon-32x32.png">
            <link rel="icon" type="image/png" sizes="96x96" href="typo3conf/ext/osp/Resources/Public/Icons/Public/favicon-96x96.png">
            <link rel="icon" type="image/png" sizes="16x16" href="typo3conf/ext/osp/Resources/Public/Icons/Public/favicon-16x16.png">
            <link rel="manifest" href="typo3conf/ext/osp/Resources/Public/Icons/Public/manifest.json">
            <meta name="msapplication-TileImage" content="typo3conf/ext/osp/Resources/Public/Icons/Public/ms-icon-144x144.png">
        )
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
            <script>
                var osp = {
                    baseUrl: document.querySelector('base').href,
                    sex: 'yes'
                };
            </script>
        )
    }

    includeCSS{
        bootstrap = https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/css/bootstrap.min.css
        bootstrap.integrity = sha384-r4NyP46KrjDleawBgD5tp8Y7UzmLA05oM1iAEQ17CSuDqnUK2+k9luXQOfXJCJ4I
        bootstrap.crossorigin = anonymous
        bootstrap.external = 1
        fa = https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css
        fa.external = 1
    }

    includeJSFooterlibs{
        bootstrap_popper = https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js
        bootstrap_popper.integrity = sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo
        bootstrap_popper.crossorigin = anonymous
        bootstrap = https://stackpath.bootstrapcdn.com/bootstrap/5.0.0-alpha1/js/bootstrap.min.js
        bootstrap.integrity = sha384-oesi62hOLfzrys4LxRF63OJCXdXDipiYWBnvTl9Y9/TRlw5xlKIEHpNyvvDShgf/
        bootstrap.crossorigin = anonymous
        lightbox = EXT:osp/Resources/Public/Js/fslightbox.js
        root = EXT:osp/Resources/Public/Js/Root.js
        home = EXT:osp/Resources/Public/Js/Home.js
        form = EXT:osp/Resources/Public/Js/Form.js
        like = EXT:osp/Resources/Public/Js/Like.js
    }

    10 = FLUIDTEMPLATE
    10{

        layoutRootPath = EXT:osp/Resources/Private/Layouts/
        partialRootPath = EXT:osp/Resources/Private/Partials/

        dataProcessing {

            1 = TYPO3\CMS\Frontend\DataProcessing\MenuProcessor
            1 {
                levels = 3
                special = directory
                special.value.data = site:rootPageId
                expandAll = 1
                includeSpacer = 1
                as = menuRoot
            }

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

            10 = TYPO3\CMS\Frontend\DataProcessing\SiteProcessor
            10 {
                as = site
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

            pagets__wall = TEXT
            pagets__wall.value = EXT:osp/Resources/Private/Templates/Wall.html

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

@import 'EXT:osp/Configuration/TypoScript/PageTypes/*.typoscript'

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
