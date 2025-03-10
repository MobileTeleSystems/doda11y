---
outline: deep
---

# useMenu

**useMenu** - хук, предоставляющий доступность меню.

## API

|       |                                                  |
| ----: |:-------------------------------------------------|
| Type: | `<T extends HTMLElement, I extends TreeItem = TreeItem>(options: : UseMenuOptions<I>): UseMenu` |

### `UseMenuOptions<I extends TreeItem = TreeItem>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `tree`  | `ItemTree<I, TreeItemPayload<I, "child" \| "group" \| "parent">>`   | Экземпляр класса SelectableNodeTree  | 
| `active`  | `any`   | Свойство, обозначающее активный элемент в списке  | 
| `triggerElement`  | `HTMLElement`   | Функция, возвращающая ссылка на триггер меню Node в DOM дереве  | 
| `changeActive`  | `(active: string) => void`   | Метод на изменение активного элемента в списке  | 
| `onExpand`  | `(key: string) => void`   | Метод на раскрытие родительского элемента (подменю)  | 
| `onHide`  | `(key: string) => void`   | Метод на закрытие родительского элемента (подменю)  | 
| `onActivate`  | `(node: TreeNode<TreeItemPayload<I>>) => void`   | Метод, вызываемый на активацию элемента меню  | 
| `onClose`  | `() => void`   | Метод, вызываемый на закрытие меню  | 
| `expanded`  | `Set<string>`   | Свойство, определяющее "раскрытые" ключи  | 
| `orientation`  | `any`   | Свойство, определяющее направление меню. По умолчанию - 'vertical'  | 
| `closeOnEsc`  | `boolean`   | Признак, определяющий, надо ли закрывать поддерево на нажатие `Esc`. По умолчанию - `true`  | 
| `withSemanticRole`  | `boolean`   | Признак, использовать ли семантическую роль.  | 
| `isOpen`  | `boolean`   | Признак, открыто ли меню.  | 
| `label`  | `string`   | Свойство, позволяющее добавить текстовое имя/назначение элементу, которое может быть прочитан программами чтения с экрана, чтобы обеспечить доступ к информации, которая может быть утрачена из-за ограничений восприятия.  | 
| `labelledBy`  | `string`   | Аналогично `aria-label`, позволяет добавить имя/назначение к элементу, однако ссылается на описание с помощью id  | 

### `UseMenuUnionProps`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `onKeyDown`  | `KeyboardEventHandler`   | Обработчик на нажатие клавиш  | 
| `onBlur`  | `FocusEventHandler`   | Обработчик на blur  | 
| `role`  | `"menu"`   | Роль menu  | 
| `tabIndex`  | `0 \| -1`   | Свойство, означающее, должен ли элемент участвовать в последовательности с помощью клавиатуры и в каком порядке  | 

### `UseMenu`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `menuProps`  | `UseMenuUnionProps`   | Свойства, необходимые для доступности button  | 

## Пример

`useMenu` используется для обеспечения веб-доступности меню. 

**Menu.tsx**

```tsx
interface MenuTreeElement {
  element: ReactElement,
  children: MenuTreeElement[]
  type: TreeItemType | null
}

interface MenuProps {
  renderItem: (node: TreeNode<TreeItemPayload<MenuTreeElement> | null>, callbackRef: (key: string, value: HTMLElement | null) => void, options: { extended: Set<string>, toggleExtended: (key: string) => void, expand: (key: string) => void, hide: (key: string) => void, active?: string, level?: number, tree: ItemTree<MenuTreeElement, TreeItemPayload<MenuTreeElement>> }) => ReactElement
  renderButton: (params: { onFocusFirst: VoidFunction, onFocusLast: VoidFunction }) => ReactElement
  mode?: 'single' | 'multiple'
  children: ReactElement<any, string | JSXElementConstructor<any>> | readonly ReactElement<any, string | JSXElementConstructor<any>>[]
  orientation?: Orientation
  onClose?: VoidFunction
  triggerRef: RefObject<HTMLButtonElement>
  isOpen: boolean
}

const Menu: FC<MenuProps> = ({ renderItem, renderButton, children, onClose, triggerRef, isOpen }) => {
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

  const { menuProps } = useMenu<HTMLElement, MenuTreeElement>({
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
  }, [activeDescendant, get])

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

interface MenuButtonProps {
  isOpen: boolean
  menuId: string
  onFocusFirst: VoidFunction
  onFocusLast: VoidFunction
  onOpen: VoidFunction
}

const MenuButton = forwardRef<HTMLButtonElement, PropsWithChildren<MenuButtonProps>>(({ onFocusLast, onOpen, children }, ref) => {
  const { buttonProps } = useMenuButton({
    isOpen,
    menuId,
    onFocusFirst,
    onFocusLast,
    onOpen
  })

  return <button {...buttonProps} ref={ref}>{children}</button>
})

MenuButton.displayName = 'MenuButton'

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
      <Menu isOpen={isOpen} renderButton={({ onFocusFirst, onFocusLast }) => <MenuButton onOpen={open} isOpen={isOpen} menuId={menuId} onFocusFirst={onFocusFirst} onFocusLast={onFocusLast} ref={ref}>Меню</MenuButton>} triggerRef={ref} onClose={close} renderItem={renderItem}>
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
      </Menu>
    </>
  )
}
```

Реализацию компонентов MenuCheckboxItem, Submenu, MenuItemLink, MenuRadioItem и т.д вы можете найти в соответствующих разделах ниже.

**Здесь стоит разобрать пару важных вещей:**

### Реализация фокуса

Реализация модели фокуса лежит на вашей стороне, однако, для упрощения здесь существует пару хуков, которые помогут вам сделать это эффективно.

`useRefMap` - для связывания ключей в списке с их ref
`useActiveDescendant` - для отслеживания активного элемента

В данном примере она сделана так:

```tsx
    const Menu: FC<MenuProps> = ({ renderItem, renderButton, children, onClose, triggerRef, isOpen }) => {
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

  const { activeDescendant, setActiveDescendantId } = useActiveDescendant() // [!code focus]

  const { set, get } = useRefMap<string, HTMLElement | null>() // [!code focus]

  const { menuProps } = useMenu<HTMLElement, MenuTreeElement>({
    tree: itemTree,
    triggerElement: triggerRef.current,
    changeActiveDescendant: setActiveDescendantId,
    activeDescendant,
    expanded,
    onHide: hide,
    onExpand: expand,
    onClose
  })

  useEffect(() => { // [!code focus]
    if (activeDescendant) { // [!code focus]
      get(activeDescendant)?.focus() // [!code focus]
    } // [!code focus]
  }, [activeDescendant, get]) // [!code focus]

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
```

### Модели рендеринга

В примере мы используем передачу children и последующее разрешение того, какому элементу сопоставить с правильной передачей различных пропов, однако, допустима так же модель, при которой в menu передается список, функция renderItem так же опциональна. 

Стоит участь, что в этом случае необходимо передать дженерик в useItemTree и useMenu для правильной типизации. В примере есть функция elementToList и переменная items для преобразования children в list.

```tsx
const Menu: FC<MenuProps> = ({ renderItem, renderButton, children, onClose, triggerRef, isOpen }) => {
  const { expand, expanded, toggle, hide } = useExpanded()

  const elementToList = useCallback((child: ReactElement): MenuTreeElement => { // [!code focus]
    const type = treeNodeTypeResolver({ childElement: [MenuItem, SubmenuTrigger, MenuRadioItem, MenuCheckboxItem, MenuLinkItem], parentElement: Submenu, groupElement: [MenuRadioGroup] })(child) // [!code focus]
    return ({ element: child, children: type === 'group' || type === 'parent' ? Children.map(child.props?.children, elementToList) : [], type }) // [!code focus]
  }, []) // [!code focus]
  const items = Children.map(children, elementToList) // [!code focus]

  const itemTree = useItemTree<MenuTreeElement>({ // [!code focus]
    items,
    typeResolver: (item) => item.type,
    expanded: [...expanded],
    triggerResolver: (item) => [SubmenuTrigger].includes(item.element.type as any),
    triggerForResolver: (_, node) => node.parent?.key,
    labelResolver: (item) => item.element.props?.label,
  })

  const { activeDescendant, setActiveDescendantId } = useActiveDescendant()

  const { set, get } = useRefMap<string, HTMLElement | null>()

  const { menuProps } = useMenu<HTMLElement, MenuTreeElement>({ // [!code focus]
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
  }, [activeDescendant, get])

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
```
