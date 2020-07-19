plugin.tx_osp {
    settings{
        site{
            # cat=OSP Site//a; type=string; label=Base URL
            baseUrl = http://10.0.0.137/osp/
            # cat=OSP Site//a; type=string; label=Branding for navbar
            navbarBrand = OSP <small class="badge bg-primary">1.0.0</small>
        }
        user{
            admin{
                # cat=OSP User//a; type=string; label=Profile Picture
                profilePicture = fileadmin/profile/pp.jpeg
                # cat=OSP Frontend//a; type=string; label=Usergroup of admin users
                usergroup = 2
            }
            visitor{
                # cat=OSP Frontend//a; type=string; label=Usergroup of visitors
                usergroup = 1
            }
            external{
                # cat=OSP Frontend//a; type=string; label=Usergroup for external users or other OSP platforms
                usergroup = 4
            }
        }
        frontend{

        }
        pages{
            # cat=OSP Pages//a; type=string; label=Home page
            home = 1
            # cat=OSP Pages//a; type=string; label=Main Wall
            wall = 11
            # cat=OSP Pages//a; type=string; label=Login
            login = 3
            post{
                # cat=OSP Pages//a; type=string; label=Post Form
                form = 1
                # cat=OSP Pages//a; type=string; label=Post Detail
                detail = 5
            }
        }
        storage{
            # cat=OSP Storage//a; type=string; label=Media Storage
            media = 2
            # cat=OSP Storage//a; type=string; label=Post Storage
            posts = 2
            # cat=OSP Storage//a; type=string; label=Comment Storage
            comments = 2
        }
        layout{
            # cat=OSP Layout//a; type=integer; label=Disables the "header" block of all pages
            disableHeader = 0
            # cat=OSP Layout//a; type=string; label=Header CSS classes
            headerClasses = container h-50
            # cat=OSP Layout//a; type=string; label=Show navbar over content
            showNavbarContent = 1
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
