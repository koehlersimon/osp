plugin.tx_osp {
    settings{
        site{
            # cat=OSP Site//a; type=string; label=URL prefix ('auto' will not work here, please enter at least '/')
            absRefPrefix = /
            # cat=OSP Site//a; type=string; label=Branding for navbar
            navbarBrand =
        }
        user{
            admin{
                # cat=OSP User//a; type=string; label=Profile Picture
                profilePicture = fileadmin/profile/pp.jpeg
                # cat=OSP Frontend//a; type=string; label=Usergroup of admin users
                usergroup =
            }
            visitor{
                # cat=OSP Frontend//a; type=string; label=Usergroup of visitors
                usergroup =
            }
            external{
                # cat=OSP Frontend//a; type=string; label=Usergroup for external users or other OSP platforms
                usergroup =
            }
        }
        frontend{

        }
        pages{
            # cat=OSP Pages//a; type=string; label=Home page
            home =
            # cat=OSP Pages//a; type=string; label=Main Wall
            wall =
            # cat=OSP Pages//a; type=string; label=Login
            login =
            post{
                # cat=OSP Pages//a; type=string; label=Post Form
                form =
                # cat=OSP Pages//a; type=string; label=Post Detail
                detail =
            }
        }
        storage{
            # cat=OSP Storage//a; type=string; label=Media Storage
            media =
            # cat=OSP Storage//a; type=string; label=Post Storage
            posts =
            # cat=OSP Storage//a; type=string; label=Comment Storage
            comments =
            # cat=OSP Storage//a; type=string; label=Likes Storage
            likes =
        }
        layout{
            # cat=OSP Layout//a; type=integer; label=Disables the "header" block of all pages
            disableHeader = 0
            # cat=OSP Layout//a; type=string; label=Header CSS classes
            headerClasses = container h-50
        }
        menus{
            primary{
                # cat=OSP Menus//a; type=string; label=Menu Primary Root
                root = 1
            }
            secondary{
                # cat=OSP Menus//a; type=string; label=Menu Secondary Root
                root = 6
            }
        }
    }

}

plugin.tx_osp_wall {
    view {
        # cat=plugin.tx_osp_wall/file; type=string; label=Path to template root (FE)
        templateRootPath = EXT:osp/Resources/Private/Templates/
        # cat=plugin.tx_osp_wall/file; type=string; label=Path to template partials (FE)
        partialRootPath = EXT:osp/Resources/Private/Partials/
        # cat=plugin.tx_osp_wall/file; type=string; label=Path to template layouts (FE)
        layoutRootPath = EXT:osp/Resources/Private/Layouts/
    }
}

plugin.tx_osp_form {
    view {
        # cat=plugin.tx_osp_form/file; type=string; label=Path to template root (FE)
        templateRootPath = EXT:osp/Resources/Private/Templates/
        # cat=plugin.tx_osp_form/file; type=string; label=Path to template partials (FE)
        partialRootPath = EXT:osp/Resources/Private/Partials/
        # cat=plugin.tx_osp_form/file; type=string; label=Path to template layouts (FE)
        layoutRootPath = EXT:osp/Resources/Private/Layouts/
    }
}

content.RTE_compliant = 0
