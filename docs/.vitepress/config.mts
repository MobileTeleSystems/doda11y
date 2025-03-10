import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "DodA11y Accessibility",
    description: "Accessibility for web",
    ignoreDeadLinks: true,
      themeConfig: {
      // https://vitepress.dev/reference/default-theme-config
          search: {
              provider: 'local'
          },

          nav: [
              { text: 'Главная', link: '/' },
              { text: 'Обзор', link: '/initial/overview' }
          ],

          sidebar: [
              {
                  text: 'Инициализация',
                  items: [
                      { text: 'Обзор', link: '/initial/overview' },
                      { text: 'Установка', link: '/initial/installation' },
                  ]
              },
          {
              text: 'Breadcrumbs',
              items: [
                  { text: 'Концепция', link: '/breadcrumbs/conceptions' },
                  { text: 'useBreadcrumbs', link: '/breadcrumbs/useBreadcrumbs', items: [
                          { text: 'useBreadcrumbsProps', link: '/breadcrumbs/useBreadcrumbsProps' },
                      ]
                  },
                  { text: 'useBreadcrumbsItem', link: '/breadcrumbs/useBreadcrumbsItem', items: [
                          { text: 'useBreadcrumbsItemProps', link: '/breadcrumbs/useBreadcrumbsItemProps' }
                      ]
              },
              ]
          },
          {
              text: 'Button',
              items: [
                  { text: 'Концепция', link: '/button/conceptions' },
                  { text: 'useButton', link: '/button/useButton', items: [
                          { text: 'useButtonProps', link: '/button/useButtonProps' },
                          { text: 'useButtonControl', link: '/button/useButtonControl' },
                      ]
                  },
              ]
          },
          {
              text: 'Toggle Button',
              items: [
                  { text: 'Концепция', link: '/toggleButton/conceptions' },
                  { text: 'useToggleButton', link: '/toggleButton/useToggleButton', items: [
                          { text: 'useToggleButtonProps', link: '/toggleButton/useToggleButtonProps' },
                          { text: 'useToggleButtonControl', link: '/toggleButton/useToggleButtonControl' },
                      ]
                  },
              ]
          },
          {
            text: 'Switch',
            items: [
              { text: 'Концепция', link: '/switch/conceptions' },
              { text: 'useSwitch', link: '/switch/useSwitch', items: [
                  { text: 'useSwitchProps', link: '/switch/useSwitchProps' },
                  { text: 'useSwitchControl', link: '/switch/useSwitchControl' },
                ]
              },
            ]
          },
          {
            text: 'Checkbox',
            items: [
              { text: 'Концепция', link: '/checkbox/conceptions' },
              { text: 'useCheckbox', link: '/checkbox/useCheckbox', items: [
                  { text: 'useCheckboxProps', link: '/checkbox/useCheckboxProps' },
                  { text: 'useCheckboxControl', link: '/checkbox/useCheckboxControl' },
                ]
              },
            ]
          },
          {
            text: 'Radio',
            items: [
              { text: 'Концепция', link: '/radioButton/conceptions' },
              { text: 'useRadio', link: '/radioButton/useRadio', items: [
                  { text: 'useRadioProps', link: '/radioButton/useRadioProps' },
                ]
              },
            ]
          },
          {
              text: 'Combobox',
              items: [
                  { text: 'Концепция', link: '/combobox/conceptions' },
                  { text: 'useCombobox', link: '/combobox/useCombobox', items: [
                          { text: 'useComboboxProps', link: '/combobox/useComboboxProps' },
                          { text: 'useComboboxControl', link: '/combobox/useComboboxControl' },
                      ]
                  },
                  { text: 'useComboboxListbox', link: '/combobox/useComboboxListbox', items: [
                      { text: 'useComboboxListboxProps', link: '/combobox/useComboboxListboxProps' },
                      { text: 'useComboboxListboxControl', link: '/combobox/useComboboxListboxControl' },
                    ]
                  },
              ]
          },
          {
              text: 'Listbox',
              items: [
                  { text: 'Концепция', link: '/listbox/conceptions' },
                  { text: 'useListbox', link: '/listbox/useListbox', items: [
                          { text: 'useListboxProps', link: '/listbox/useListboxProps' },
                          { text: 'useListboxControl', link: '/listbox/useListboxControl' },
                      ]
                  },
              ]
          },
          {
              text: 'Select',
              items: [
                  { text: 'Концепция', link: '/select/conceptions' },
                  { text: 'useSelectListbox', link: '/select/useSelectListbox', items: [
                      { text: 'useSelectListboxProps', link: '/select/useSelectListboxProps' },
                      { text: 'useSelectListboxControl', link: '/select/useSelectListboxControl' },
                    ]
                  },
                  { text: 'useSelectCombobox', link: '/select/useSelectCombobox', items: [
                      { text: 'useSelectComboboxProps', link: '/select/useSelectComboboxProps' },
                      { text: 'useSelectComboboxControl', link: '/select/useSelectComboboxControl' },
                    ]
                  },
              ]
          },
          {
              text: 'Feed',
              items: [
                  { text: 'Концепция', link: '/feed/conceptions' },
                  { text: 'useFeed', link: '/feed/useFeed', items: [
                          { text: 'useFeedProps', link: '/feed/useFeedProps' },
                          { text: 'useFeedControl', link: '/feed/useFeedControl' },
                      ]
                  },
                  { text: 'useFeedArticle', link: '/feed/useFeedArticle', items: [
                          { text: 'useFeedArticleProps', link: '/feed/useFeedArticleProps' },
                      ]
                  },
              ]
          },
          {
              text: 'Carousel',
              items: [
                  { text: 'Концепция', link: '/carousel/conceptions' },
                  { text: 'useCarousel', link: '/carousel/useCarousel', items: [
                          { text: 'useCarouselProps', link: '/carousel/useCarouselProps' },
                      ]
                  },
                  { text: 'useCarouselSlide', link: '/carousel/useCarouselSlide', items: [
                          { text: 'useCarouselSlideProps', link: '/carousel/useCarouselSlideProps' },
                      ]
                  },
              ]
          },
          {
              text: 'Option',
              items: [
                  { text: 'Концепция', link: '/option/conceptions' },
                  { text: 'useOption', link: '/option/useOption', items: [
                          { text: 'useOptionProps', link: '/option/useOptionProps' },
                      ]
                  },
              ]
          },
            {
              text: 'Tabs',
              items: [
                { text: 'Концепция', link: '/tabs/conceptions' },
                { text: 'useTab', link: '/tabs/useTab', items: [
                    { text: 'useTabProps', link: '/tabs/useTabProps' },
                    { text: 'useTabControl', link: '/tabs/useTabControl' },
                  ]
                },
                { text: 'useTablist', link: '/tabs/useTablist', items: [
                    { text: 'useTablistProps', link: '/tabs/useTablistProps' },
                    { text: 'useTablistControl', link: '/tabs/useTablistControl' },
                  ]
                },
                { text: 'useTabPanel', link: '/tabs/useTabPanel', items: [
                    { text: 'useTabPanelProps', link: '/tabs/useTabPanelProps' },
                    { text: 'useTabPanelControl', link: '/tabs/useTabPanelControl' },
                  ]
                },
              ]
            },
          {
            text: 'Tree',
            items: [
              { text: 'Концепция', link: '/tree/conceptions' },
              { text: 'useTree', link: '/tree/useTree', items: [
                  { text: 'useTreeProps', link: '/tree/useTreeProps' },
                  { text: 'useTreeControl', link: '/tree/useTreeControl' },
                ]
              },
              { text: 'useTreeItem', link: '/tree/useTreeItem', items: [
                  { text: 'useTreeItemProps', link: '/tree/useTreeItemProps' },
                ]
              },
              { text: 'useSubtree', link: '/tree/useSubtree', items: [
                  { text: 'useSubtreeProps', link: '/tree/useSubtreeProps' },
                ]
              },
            ]
          },
          {
              text: 'Menu',
              items: [
                { text: 'Концепция', link: '/menu/conceptions' },
                { text: 'Menubar', items: [
                    { text: 'Концепция', link: '/menu/menubarConceptions' },
                    { text: 'useMenubar', link: '/menu/useMenubar', items: [
                        { text: 'useMenubarProps', link: '/menu/useMenubarProps' },
                        { text: 'useMenubarControl', link: '/menu/useMenubarControl' },
                      ]
                    },
                  ]
                },
                { text: 'useMenu', link: '/menu/useMenu', items: [
                    { text: 'useMenuProps', link: '/menu/useMenuProps' },
                    { text: 'useMenuControl', link: '/menu/useMenuControl' },
                  ]
                },
                { text: 'useSubmenu', link: '/menu/useSubmenu', items: [
                    { text: 'useSubmenuProps', link: '/menu/useSubmenuProps' },
                  ]
                },
                { text: 'useMenuItem', link: '/menu/useMenuItem', items: [
                    { text: 'useMenuItemProps', link: '/menu/useMenuItemProps' },
                    { text: 'useMenuItemControl', link: '/menu/useMenuItemControl' },
                  ]
                },
                { text: 'useMenuItemRadioGroup', link: '/menu/useMenuItemRadioGroup', items: [
                    { text: 'useMenuItemRadioGroupProps', link: '/menu/useMenuItemRadioGroupProps' },
                    { text: 'useMenuItemRadioGroupControl', link: '/menu/useMenuItemRadioGroupControl' },
                  ]
                },
                { text: 'useMenuItemRadio', link: '/menu/useMenuItemRadio', items: [
                    { text: 'useMenuItemRadioProps', link: '/menu/useMenuItemRadioProps' },
                  ]
                },
                { text: 'useMenuItemCheckbox', link: '/menu/useMenuItemCheckbox', items: [
                    { text: 'useMenuItemCheckboxProps', link: '/menu/useMenuItemCheckboxProps' },
                    { text: 'useMenuItemCheckboxControl', link: '/menu/useMenuItemCheckboxControl' },
                  ]
                },
                { text: 'useMenuButton', link: '/menu/useMenuButton', items: [
                        { text: 'useMenuButtonProps', link: '/menu/useMenuButtonProps' },
                        { text: 'useMenuButtonControl', link: '/menu/useMenuButtonControl' },
                    ]
                },
              ]
          },
          {
              text: 'Meter',
              items: [
                  { text: 'Концепция', link: '/meter/conceptions' },
                  { text: 'useMeter', link: '/meter/useMeter', items: [
                          { text: 'useMeterProps', link: '/meter/useMeterProps' },
                      ]
                  },
              ]
          },
          {
              text: 'ProgressBar',
              items: [
                  { text: 'Концепция', link: '/progressbar/conceptions' },
                  { text: 'useProgressBar', link: '/progressbar/useProgressBar', items: [
                          { text: 'useProgressBarProps', link: '/progressbar/useProgressBarProps' },
                      ]
                  },
              ]
          },
          {
              text: 'Group',
              items: [
                  { text: 'Концепция', link: '/group/conceptions' },
                  { text: 'useGroup', link: '/group/useGroup', items: [
                          { text: 'useGroupProps', link: '/group/useGroupProps' },
                      ]
                  },
              ]
          },
          {
            text: 'Alert',
            items: [
              { text: 'Концепция', link: '/alert/conceptions' },
              { text: 'useAlert', link: '/alert/useAlert', items: [
                  { text: 'useAlertProps', link: '/alert/useAlertProps' },
                ]
              },
            ]
          },
            {
              text: 'TextField',
              items: [
                { text: 'Концепция', link: '/textfield/conceptions' },
                { text: 'useTextField', link: '/textfield/useTextField', items: [
                    { text: 'useTextFieldProps', link: '/textfield/useTextFieldProps' },
                  ]
                },
              ]
            },
          {
              text: 'Image',
              items: [
                  { text: 'Концепция', link: '/image/conceptions' },
                  { text: 'useImage', link: '/image/useImage', items: [
                          { text: 'useImageProps', link: '/image/useImageProps' },
                      ]
                  },
              ]
          },
          {
              text: 'Popup',
              items: [
                  { text: 'Концепция', link: '/popup/conceptions' },
                  { text: 'usePopupTrigger', link: '/popup/usePopupTrigger', items: [
                          { text: 'usePopupTriggerProps', link: '/popup/usePopupTriggerProps' },
                          { text: 'usePopupTriggerControl', link: '/popup/usePopupTriggerControl' },
                      ]
                  },
              ]
          },
          {
              text: 'Link',
              items: [
                  { text: 'Концепция', link: '/link/conceptions' },
                  { text: 'useLink', link: '/link/useLink', items: [
                          { text: 'useLinkProps', link: '/link/useLinkProps' },
                          { text: 'useLinkControl', link: '/link/useLinkControl' },
                      ]
                  },
              ]
          },
          {
              text: 'Tooltip',
              items: [
                  { text: 'Концепция', link: '/tooltip/conceptions' },
                  { text: 'useTooltip', link: '/tooltip/useTooltip', items: [
                          { text: 'useTooltipProps', link: '/tooltip/useTooltipProps' },
                          { text: 'useTooltipControl', link: '/tooltip/useTooltipControl' },
                      ]
                  },
              ]
          },
          {
              text: 'Intl',
              items: [
                  { text: 'Концепция', link: '/intl/conceptions' },
                  { text: 'useCollator', link: '/intl/useCollator' },
                  { text: 'useFilter', link: '/intl/useFilter' },
              ]
          },
          {
              text: 'Core',
              items: [
                  { text: 'useLabels', link: '/core/useLabels' },
                  { text: 'useDescription', link: '/core/useDescription' },
                  { text: 'useSelection', link: '/core/useSelection' },
                  { text: 'useDataSelectionControl', link: '/core/useDataSelectionControl' },
                  { text: 'useActiveDescendant', link: '/core/useActiveDescendant' },
                  { text: 'useRefMap', link: '/core/useRefMap' },
                  { text: 'useVisibility', link: '/core/useVisibility' },
                  { text: 'useExpanded', link: '/core/useExpanded' },
                  { text: 'useAutocompleteHandler', link: '/core/useAutocompleteHandler' },
                  { text: 'useUnfocusHandler', link: '/core/useUnfocusHandler' },
              ]
          },
          {
              text: 'Structures',
              items: [
                { text: 'Linked List', link: '/structures/linkedList', items: [
                    { text: 'Linked List Node', link: '/structures/linkedListNode' },
                  ]
                },
                { text: 'ItemList', link: '/structures/itemList', items: [
                    { text: 'useItemList', link: '/structures/useItemList' },
                    { text: 'useItemListControl', link: '/structures/useItemListControl' },
                    { text: 'useItemListSearchControl', link: '/structures/useItemListSearchControl' },
                  ]
                },
                { text: 'Tree', link: '/structures/tree', items: [
                    { text: 'Tree Node', link: '/structures/treeNode' },
                  ]
                },
                { text: 'ItemTree', link: '/structures/itemTree', items: [
                    { text: 'useItemTree', link: '/structures/useItemTree' },
                    { text: 'useItemTreeControl', link: '/structures/useItemTreeControl' },
                    { text: 'useItemTreeSearchControl', link: '/structures/useItemTreeSearchControl' },
                  ]
                },
                { text: 'SelectableItemTree', link: '/structures/selectableItemTree', items: [
                    { text: 'useSelectableItemTree', link: '/structures/useSelectableItemTree' },
                  ]
                },
                { text: 'Iterable', items: [
                    { text: 'useIterableSearch', link: '/structures/useIterableSearch' },
                    { text: 'useIterableSearchControl', link: '/structures/useIterableSearchControl' },
                  ]
                },
              ]
          }
      ]
    }
})
