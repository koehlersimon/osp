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
            removeItems = header, textmedia, textpic, bullets, table, uploads, multimedia, media, mailform, search, login, menu_pages, menu_categorized_content, menu_sitemap_pages, menu_categorized_pages, menu_subpages, menu_abstract,menu_categorized, div
        }
    }
}

mod{
    web_layout.tt_content.preview.osp_menu = EXT:osp/Resources/Private/Backend/Previews/OspMenu.html
    wizards {
        newContentElement.wizardItems {
            plugins {
                elements {
                    osp_list {
                        iconIdentifier = osp-home
                        title = OSP List
                        description = Displays a list of posts with various options
                        tt_content_defValues {
                            CType = list
                            list_type = osp_list
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
                    osp_post_detail {
                        iconIdentifier = osp-form
                        title = OSP Post Detail
                        description = The Post detail view
                        tt_content_defValues {
                            CType = list
                            list_type = osp_post_detail
                        }
                    }
                }
            }
            menu{
                elements{
                    osp_menu {
                        iconIdentifier = osp-menu
                        title = OSP Menu
                        description = Creates a custom navigation menu
                        tt_content_defValues {
                            CType = osp_menu
                        }
                    }
                }
                show := addToList(osp_menu)
            }
        }
    }
}
