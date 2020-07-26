TCEFORM{
    tt_content{
        frame_class {
            disabled = 0
            removeItems = ruler-before, ruler-after, indent, indent-left, indent-right
            addItems.card = OSP card
        }
        layout {
            disabled = 1
        }
        CType {
            removeItems = header, text, textpic, image, bullets, table, uploads, multimedia, media, mailform, search, login, menu_subpages, menu_abstract,menu_categorized, div
        }
    }
}

mod.wizards {
    newContentElement.wizardItems {
        plugins {
            elements {
                osp_home {
                    iconIdentifier = osp-home
                    title = OSP Home
                    description = List of external and friends posts
                    tt_content_defValues {
                        CType = list
                        list_type = osp_home
                    }
                }
                osp_wall {
                    iconIdentifier = osp-wall
                    title = OSP Wall
                    description = List of your own private posts
                    tt_content_defValues {
                        CType = list
                        list_type = osp_wall
                    }
                }
                osp_form {
                    iconIdentifier = osp-form
                    title = OSP Post Form
                    description = The form to create a post
                    tt_content_defValues {
                        CType = list
                        list_type = osp_form
                    }
                }
            }
        }
        common{
            elements{
                osp_menu {
                    iconIdentifier = osp-menu
                    title = OSP Menu
                    description = The form to create a post
                    tt_content_defValues {
                        CType = osp_menu
                    }
                }
            }
            show := addToList(osp_menu)
        }
    }
}

web_layout.tt_content.preview.osp_menu = EXT:osp/Resources/Private/Backend/Previews/OspMenu.html
