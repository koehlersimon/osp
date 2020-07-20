plugin.tx_osp {
    settings{
        site{
            # cat=OSP Site//a; type=string; label=URL prefix ('auto' will not work here, please enter at least '/')
            absRefPrefix = /
            # cat=OSP Site//a; type=string; label=Logo for navbar
            navbarLogo = EXT:osp/Resources/Public/Icons/Public/favicon-32x32.png
        }
        user{
            admin{
                # cat=OSP User//a; type=string; label=Profile Picture
                profilePicture = fileadmin/profile/pp.jpeg
                # cat=OSP User//a; type=string; label=Usergroup of admin users
                usergroup =
            }
            visitor{
                # cat=OSP User//a; type=string; label=Usergroup of visitors
                usergroup =
            }
            external{
                # cat=OSP User//a; type=string; label=Usergroup for external users or other OSP platforms
                usergroup =
            }
            account{
                editfields{
                    username{
                        show = 1
                        editable = 1
                    }
                    company{
                        show = 0
                    }
                    title{
                        show = 1
                    }
                    first_name{
                        show = 1
                    }
                    middle_name{
                        show = 1
                    }
                    last_name{
                        show = 1
                    }
                    email{
                        show = 1
                    }
                    telephone{
                        show = 1
                    }
                    country{
                        show = 1
                    }
                    address{
                        show = 1
                    }
                    zip{
                        show = 1
                    }
                    city{
                        show = 1
                    }
                    password{
                        show = 1
                    }
                }
            }
        }
        frontend{
            # cat=OSP Frontend//a; type=string; label=Maximum length of post teaser text
            teaserLength = 300
        }
        pages{
            # cat=OSP Pages//a; type=string; label=Home page
            home =
            # cat=OSP Pages//a; type=string; label=Main Wall
            wall =
            # cat=OSP Pages//a; type=string; label=Page with login form
            login =
            account{
                # cat=OSP Pages//a; type=string; label=Account overview page
                overview =
                # cat=OSP Pages//a; type=string; label=Account edit page
                edit =
            }
            post{
                # cat=OSP Pages//a; type=string; label=Post Form
                form =
                # cat=OSP Pages//a; type=string; label=Post Detail
                detail =
            }
            types{
                page_posts_home = 800
                page_markdown_preview = 810
                page_like_click = 820
                page_external_post = 830
                page_external_post_fetch = 840
                page_browser_extension = 1100
                page_browser_extension_form = 1110
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
            # cat=OSP Storage//a; type=string; label=Frontend User Storage
            user =
        }
        layout{
            # cat=OSP Layout//a; type=integer; label=Disables the "header" block of all pages
            disableHeader = 0
            # cat=OSP Layout//a; type=string; label=Header CSS classes
            headerClasses = container h-50
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
