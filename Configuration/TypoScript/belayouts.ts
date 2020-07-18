mod {
    web_layout {
        BackendLayouts {

            default {
                title = LLL:EXT:osp/Resources/Private/Language/locallang.xlf:be_layout.pagets__default
                config {
                    backend_layout {
                        colCount = 12
                        rowCount = 3
                        rows {
                            1 {
                                columns{
                                    1 {
                                        name = LLL:EXT:osp/Resources/Private/Language/locallang.xlf:be_layout.columns.header
                                        colPos = 3
                                        colspan = 12
                                    }
                                }
                            }
                            2 {
                                columns {
                                    1 {
                                        name = LLL:EXT:osp/Resources/Private/Language/locallang.xlf:be_layout.columns.left
                                        colPos = 1
                                        colspan = 3
                                    }
                                    2 {
                                        name = LLL:EXT:osp/Resources/Private/Language/locallang.xlf:be_layout.columns.main
                                        colPos = 0
                                        colspan = 6
                                    }
                                    3 {
                                        name = LLL:EXT:osp/Resources/Private/Language/locallang.xlf:be_layout.columns.right
                                        colPos = 2
                                        colspan = 3
                                    }
                                }
                            }
                            3 {
                                columns{
                                    1 {
                                        name = LLL:EXT:osp/Resources/Private/Language/locallang.xlf:be_layout.columns.footer.one
                                        colPos = 200
                                        colspan = 3
                                    }
                                    2 {
                                        name = LLL:EXT:osp/Resources/Private/Language/locallang.xlf:be_layout.columns.footer.two
                                        colPos = 210
                                        colspan = 3
                                    }
                                    3 {
                                        name = LLL:EXT:osp/Resources/Private/Language/locallang.xlf:be_layout.columns.footer.three
                                        colPos = 220
                                        colspan = 3
                                    }
                                    4 {
                                        name = LLL:EXT:osp/Resources/Private/Language/locallang.xlf:be_layout.columns.footer.four
                                        colPos = 230
                                        colspan = 3
                                    }
                                }
                            }
                        }
                    }
                }
                icon = EXT:osp/ext_icon.gif
            }

            page {
                title = OSP Page Default
                config {
                    backend_layout {
                        colCount = 12
                        rowCount = 1
                        rows {
                            1 {
                                columns {
                                    1 {
                                        name = LLL:EXT:osp/Resources/Private/Language/locallang.xlf:be_layout.columns.left
                                        colPos = 1
                                        colspan = 3
                                    }
                                    2 {
                                        name = LLL:EXT:osp/Resources/Private/Language/locallang.xlf:be_layout.columns.main
                                        colPos = 0
                                        colspan = 6
                                    }
                                    3 {
                                        name = LLL:EXT:osp/Resources/Private/Language/locallang.xlf:be_layout.columns.right
                                        colPos = 2
                                        colspan = 3
                                    }
                                }
                            }
                        }
                    }
                }
                icon = EXT:osp/ext_icon.gif
            }

            sidebar_left {
                title = OSP Sidebar left
                config {
                    backend_layout {
                        colCount = 12
                        rowCount = 1
                        rows {
                            1 {
                                columns {
                                    1 {
                                        name = LLL:EXT:osp/Resources/Private/Language/locallang.xlf:be_layout.columns.left
                                        colPos = 1
                                        colspan = 3
                                    }
                                    2 {
                                        name = LLL:EXT:osp/Resources/Private/Language/locallang.xlf:be_layout.columns.main
                                        colPos = 0
                                        colspan = 9
                                    }
                                }
                            }
                        }
                    }
                }
                icon = EXT:osp/ext_icon.gif
            }

            sidebar_right {
                title = OSP Sidebar right
                config {
                    backend_layout {
                        colCount = 12
                        rowCount = 1
                        rows {
                            1 {
                                columns {
                                    1 {
                                        name = LLL:EXT:osp/Resources/Private/Language/locallang.xlf:be_layout.columns.main
                                        colPos = 0
                                        colspan = 9
                                    }
                                    2 {
                                        name = LLL:EXT:osp/Resources/Private/Language/locallang.xlf:be_layout.columns.right
                                        colPos = 2
                                        colspan = 3
                                    }
                                }
                            }
                        }
                    }
                }
                icon = EXT:osp/ext_icon.gif
            }

            sidebar_left_header{
                title = OSP Sidebar left header right
                config {
                    backend_layout {
                        colCount = 12
                        rowCount = 1
                        rows {
                            1 {
                                columns {
                                    1 {
                                        name = LLL:EXT:osp/Resources/Private/Language/locallang.xlf:be_layout.columns.left
                                        colPos = 1
                                        colspan = 3
                                    }
                                    2 {
                                        name = LLL:EXT:osp/Resources/Private/Language/locallang.xlf:be_layout.columns.main
                                        colPos = 0
                                        colspan = 9
                                    }
                                }
                            }
                        }
                    }
                }
                icon = EXT:osp/ext_icon.gif
            }

            sidebar_right_header{
                title = OSP Sidebar right header left
                config {
                    backend_layout {
                        colCount = 12
                        rowCount = 1
                        rows {
                            1 {
                                columns {
                                    1 {
                                        name = LLL:EXT:osp/Resources/Private/Language/locallang.xlf:be_layout.columns.main
                                        colPos = 0
                                        colspan = 9
                                    }
                                    2 {
                                        name = LLL:EXT:osp/Resources/Private/Language/locallang.xlf:be_layout.columns.right
                                        colPos = 2
                                        colspan = 3
                                    }
                                }
                            }
                        }
                    }
                }
                icon = EXT:osp/ext_icon.gif
            }

        }
    }
}
