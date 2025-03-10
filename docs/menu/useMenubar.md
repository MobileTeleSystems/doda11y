---
outline: deep
---

# useMenubar

**useMenubar** - хук, предоставляющий доступность меню-бара.

## API

|       |                                                  |
| ----: |:-------------------------------------------------|
| Type: | `<T extends HTMLElement, I extends TreeItem = TreeItem>(options: : UseMenubarOptions<I>): UseMenubar` |

### `UseMenubarOptions<I extends TreeItem = TreeItem>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `tree`  | `ItemTree<I, TreeItemPayload<I, "child" \| "group" \| "parent">>`   | Экземпляр класса SelectableNodeTree  | 
| `active`  | `any`   | Свойство, обозначающее активный элемент в списке  | 
| `expanded`  | `Set<string>`   | Свойство, определяющее "раскрытые" ключи  | 
| `orientation`  | `any`   | Свойство, определяющее направление меню. По умолчанию - 'vertical'  | 
| `closeOnEsc`  | `boolean`   | Признак, определяющий, надо ли закрывать поддерево на нажатие `Esc`. По умолчанию - `true`  | 
| `changeActive`  | `(active: string) => void`   | Метод на изменение активного элемента в списке  | 
| `changeFocus`  | `(id: string) => void`   | Метод, изменяющий текущий сфокусированный элемент  | 
| `onExpand`  | `(key: string) => void`   | Метод на раскрытие родительского элемента (подменю)  | 
| `onHide`  | `(key: string) => void`   | Метод на закрытие родительского элемента (подменю)  | 
| `onHideAll`  | `() => void`   | Метод на закрытие всех родительских элементов (подменю)  | 
| `onActivate`  | `(node: TreeNode<TreeItemPayload<I>>) => void`   | Метод, вызываемый на активацию элемента меню  | 
| `withSemanticRole`  | `boolean`   | Признак, использовать ли семантическую роль.  | 
| `label`  | `string`   | Свойство, позволяющее добавить текстовое имя/назначение элементу, которое может быть прочитан программами чтения с экрана, чтобы обеспечить доступ к информации, которая может быть утрачена из-за ограничений восприятия.  | 
| `labelledBy`  | `string`   | Аналогично `aria-label`, позволяет добавить имя/назначение к элементу, однако ссылается на описание с помощью id  | 

### `UseMenubarUnionProps`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `onKeyDown`  | `KeyboardEventHandler`   | Обработчик на нажатие клавиш  | 
| `onFocus`  | `FocusEventHandler`   | Обработчик на focus  | 
| `onBlur`  | `FocusEventHandler`   | Обработчик на blur  | 
| `role`  | `"menubar"`   | Роль menubar  | 
| `tabIndex`  | `0 \| -1`   | Свойство, означающее, должен ли элемент участвовать в последовательности с помощью клавиатуры и в каком порядке  | 

### `UseMenubar`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `menubarProps`  | `UseMenubarUnionProps`   | Свойства, необходимые для доступности menubar  | 

## Пример

`useMenubar` используется для обеспечения веб-доступности меню-бар. 

**Menubar.tsx**

```tsx
interface MenubarTreeElement {
  element: ReactElement,
  children: MenuTreeElement[]
  type: TreeItemType | null
}

interface MenubarProps {
  renderItem: (node: TreeNode<TreeItemPayload<MenuTreeElement> | null>, callbackRef: (key: string, value: HTMLElement | null) => void, options: { extended: Set<string>, toggleExtended: (key: string) => void, expand: (key: string) => void, hide: (key: string) => void, active?: string, level?: number, tree: ItemTree<MenuTreeElement, TreeItemPayload<MenuTreeElement>> }) => ReactElement
  mode?: 'single' | 'multiple'
  children: ReactElement<any, string | JSXElementConstructor<any>> | readonly ReactElement<any, string | JSXElementConstructor<any>>[]
  orientation?: Orientation
  onClose?: VoidFunction
  triggerRef: RefObject<HTMLButtonElement>
  isOpen: boolean
}

const Menubar: FC<MenuProps> = ({ renderItem, renderButton, children, onClose, triggerRef, isOpen }) => {
  const { expand, expanded, toggle, hide } = useExpanded()

  const elementToList = useCallback((child: ReactElement): MenuTreeElement => {
    const type = treeNodeTypeResolver({ childElement: [MenuItem, SubmenuTrigger, MenuRadioItem, MenuCheckboxItem, MenuLinkItem], parentElement: Submenu, groupElement: [MenuRadioGroup] })(child)
    return ({ element: child, children: type === 'group' || type === 'parent' ? Children.map(child.props?.children, elementToList) : [], type })
  }, [])
  const items = Children.map(children, elementToList)

  const itemTree = useItemTree<MenuTreeElement>({
    items,
    typeResolver: (item) => item.type,
    expanded: [...expanded],
    triggerResolver: (item) => [SubmenuTrigger].includes(item.element.type as any),
    triggerForResolver: (_, node) => node.parent?.key,
    labelResolver: (item) => item.element.props?.label,
  })

  const { activeDescendant, setActiveDescendantId } = useActiveDescendant()

  const { set, get } = useRefMap<string, HTMLElement | null>()

  const { menuProps } = useMenubar<HTMLElement, MenuTreeElement>({
    tree: itemTree,
    triggerElement: triggerRef.current,
    changeActiveDescendant: setActiveDescendantId,
    activeDescendant,
    expanded,
    onHide: hide,
    onExpand: expand,
    onClose
  })

  useEffect(() => {
    if (activeDescendant) {
      get(activeDescendant)?.focus()
    }
    
    if (!activeDescendant) {
      const first = tree.getFirstExtendedNode()
      if (!first) return
      
      setActiveDescdendantId(first.key)
    }
  }, [activeDescendant, get, tree])

  return (
    <>
      {renderButton({
        onFocusFirst() {
          const first = itemTree.getFirstExtendedNode()?.key
          if (!first) return

          setActiveDescendantId(first)
        },
        onFocusLast() {
          const last = itemTree.getLastExtendedNode(['child'])?.key
          if (!last) return

          setActiveDescendantId(last)
        }
      })}
      <div hidden={!isOpen}>
        <ul {...menuProps} className='menubar'>
          {itemTree.tree.root?.children.map((node) => renderItem(node, set, {
            extended: expanded,
            toggleExtended: toggle,
            active: activeDescendant,
            hide,
            expand,
            level: node.level,
            tree: itemTree
          }))}
        </ul>
      </div>
    </>
  )
}

export const Playground: React.FC = () => {
  const renderItem: MenuProps['renderItem'] = useCallback((node, callbackRef, { extended, toggleExtended, active, expand, hide, level, tree }) => {
    const {
      payload,
      children,
      key
    } = node

    if (payload?.type === 'parent') {
      return (
        <Submenu level={level}  key={key} data-key={key} ref={(el) => callbackRef(key, el)} isOpen={extended.has(key)}>
          {children.map((child) => renderItem(child, callbackRef, { extended, toggleExtended, active, hide, expand, level: child.level, tree }))}
        </Submenu>
      )
    }

    if (payload?.item.element.type === MenuRadioGroup) {
      return (
        <MenuRadioGroup {...payload?.item.element.props} activeNode={active ? tree.tree.findNode(active) || undefined : undefined} key={key} data-key={key} ref={(el) => callbackRef(key, el)}>
          {children.map((child) => renderItem(child, callbackRef, { extended, toggleExtended, active, hide, expand, level: child.level, tree }))}
        </MenuRadioGroup>
      )
    }

    if (payload?.item.element.type === MenuRadioItem) {
      return (
        <MenuRadioItem value={node.payload?.item.element.props?.value} level={level} focused={active === key} key={key} data-key={key} ref={(el) => callbackRef(key, el)}>
          {payload?.item.element.props?.children}
        </MenuRadioItem>
      )
    }

    if (payload?.item.element.type === MenuCheckboxItem) {
      return (
        <MenuCheckboxItem {...payload?.item.element.props} level={level} focused={active === key} key={key} data-key={key} ref={(el) => callbackRef(key, el)} />
      )
    }

    if (payload?.item.element.type === MenuLinkItem) {
      return (
        <MenuLinkItem {...payload?.item.element.props} level={level} focused={active === key} key={key} data-key={key} ref={(el) => callbackRef(key, el)} />
      )
    }

    if (payload?.isTrigger) {
      return (
        <SubmenuTrigger isExpandedMenu={payload?.triggerFor ? extended.has(payload.triggerFor) : undefined} focused={active === key} level={level ? level - 1 : undefined} onClick={() => toggleExtended(payload?.triggerFor ?? '')} key={key} data-key={key} ref={(el) => callbackRef(key, el)}>
          {payload?.item.element.props?.children}
        </SubmenuTrigger>
      )
    }

    return (
      <MenuItem level={level} focused={active === key} key={key} data-key={key} ref={(el) => callbackRef(key, el)}>
        {payload?.item.element.props?.children}
      </MenuItem>
    )
  }, [])

  const [value, setValue] = useState<string>()
  const [isChecked, setIsChecked] = useState(false)
  const [isCheckedTheme, setIsCheckedTheme] = useState(false)

  const { isOpen, open, close } = useVisibility()

  const menuId = useId()
  const ref = useRef<HTMLButtonElement>(null)

  return (
    <>
      <Menubar isOpen={isOpen} triggerRef={ref} onClose={close} renderItem={renderItem}>
        <Submenu>
          <SubmenuTrigger>Профиль</SubmenuTrigger>
          <Submenu>
            <SubmenuTrigger>Профиль</SubmenuTrigger>
            <MenuRadioGroup value={value} onChange={setValue}>
              <MenuRadioItem value='1'>ИП Иванов И.И.</MenuRadioItem>
              <MenuRadioItem value='2'>ИП Сидоров С.С.</MenuRadioItem>
              <MenuRadioItem value='3'>ИП Петров П.П.</MenuRadioItem>
            </MenuRadioGroup>
          </Submenu>
          <MenuRadioGroup value={value} onChange={setValue}>
            <MenuRadioItem value='1'>ИП Иванов И.И.</MenuRadioItem>
            <MenuRadioItem value='2'>ИП Сидоров С.С.</MenuRadioItem>
            <MenuRadioItem value='3'>ИП Петров П.П.</MenuRadioItem>
          </MenuRadioGroup>
        </Submenu>
        <Submenu>
          <SubmenuTrigger>Профиль</SubmenuTrigger>
          <Submenu>
            <SubmenuTrigger>Профиль</SubmenuTrigger>
            <MenuRadioGroup value={value} onChange={setValue}>
              <MenuRadioItem value='1'>ИП Иванов И.И.</MenuRadioItem>
              <MenuRadioItem value='2'>ИП Сидоров С.С.</MenuRadioItem>
              <MenuRadioItem value='3'>ИП Петров П.П.</MenuRadioItem>
            </MenuRadioGroup>
          </Submenu>
          <MenuRadioGroup value={value} onChange={setValue}>
            <MenuRadioItem value='1'>ИП Иванов И.И.</MenuRadioItem>
            <MenuRadioItem value='2'>ИП Сидоров С.С.</MenuRadioItem>
            <MenuRadioItem value='3'>ИП Петров П.П.</MenuRadioItem>
          </MenuRadioGroup>
        </Submenu>
        <MenuItem onActivate={() => console.log('Сотрудники')}>Сотрудники</MenuItem>
        <MenuLinkItem>Тарифы</MenuLinkItem>
        <MenuCheckboxItem checked={isChecked} onToggle={() => setIsChecked(p => !p)}>
          {isChecked ? 'Выключить' : 'Включить'} овердрафт
        </MenuCheckboxItem>
        <MenuCheckboxItem checked={isCheckedTheme} onToggle={() => setIsCheckedTheme(p => !p)}>
          {isCheckedTheme ? 'Выключить' : 'Включить'} темную тему
        </MenuCheckboxItem>
      </Menubar>
    </>
  )
}
```
