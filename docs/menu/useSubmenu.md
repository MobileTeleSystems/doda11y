---
outline: deep
---

# useSubmenu

**useSubmenu** - хук, предоставляющий доступность подменю.

## API

|       |                                                                        |
| ----: |:-----------------------------------------------------------------------|
| Type: | `<T extends HTMLElement>(options: : UseSubmenuOptions): UseSubmenu<T>` |

### `UseSubmenuOptions`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `setSize`  | `number`   | Размер коллекции, частью которой является элемент  | 
| `level`  | `number`   | Свойство, обозначающее уровень вложенности элемента  | 
| `posInSet`  | `number`   | Позиция элемента в коллекции  | 
| `withSemanticRole`  | `boolean`   | Признак, использовать ли семантическую роль. В случае, если используется семантический тег (например `<button>` или `<article>`, лучше передать `false`)  | 
| `selected`  | `boolean`   | Признак, выбран ли элемент в данный момент. В отличие от isChecked используется при одиночном выборе  | 
| `checked`  | `boolean`   | Признак, выбран ли элемент в данный момент. В отличие от isSelected используется при множественном выборе  | 
| `expanded`  | `boolean`   | Признак, раскрыто ли поддерево  | 
| `focusable`  | `boolean`   | Признак, выбран находится ли активный фокус на данном элементе.  | 

### `UseSubmenuUnionProps<T extends HTMLElement>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `role`  | `"menu"`   | Роль menu  | 
| `tabIndex`  | `-1`   | Свойство, означающее, должен ли элемент участвовать в последовательности с помощью клавиатуры и в каком порядке  | 
| `aria-selected`  | `Booleanish`   | Свойство aria, определяющее, выбран ли элемент. Используется, если для выбора доступен только один элемент  | 
| `aria-checked`  | `boolean \| "false" \| "true" \| "mixed"`   | Свойство aria, определяющее, выбран ли элемент. Используется, если для выбора доступно несколько элементов  | 
| `aria-posinset`  | `number`   | Свойство aria, определяющее позицию элемента в коллекции  | 
| `aria-setsize`  | `number`   | Свойство aria, определяющее количество элементов в коллекции  | 
| `aria-level`  | `number`   | Свойство aria, определяющее вложенность элемента  | 
| `aria-expanded`  | `Booleanish`   | Свойство aria, определяющее раскрыт ли элемент  | 

### `UseSubmenu<T extends HTMLElement>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `submenuProps`  | `SubmenuProps<T>`   | Свойства, необходимые для доступности tree элемента  | 

## Пример

`useSubmenu` используется для обеспечения веб-доступности подменю. 

**Submenu.tsx**

```tsx
const SubmenuTrigger = forwardRef<HTMLDivElement, PropsWithChildren<HTMLAttributes<HTMLDivElement> & { selectable?: boolean, level?: number, selected?: boolean, checked?: boolean, focused?: boolean, isExpandedMenu?: boolean }>>(({ children, level, selected, checked, isExpandedMenu, focused, ...props }, ref) => { // [!code focus]
	const { menuItemProps } = useMenuItem({ // [!code focus]
		level, // [!code focus]
		selected: props.selectable ? selected: undefined, // [!code focus]
		checked: props.selectable ? checked : undefined, // [!code focus]
		focusable: focused, // [!code focus]
		popup: 'menu', // [!code focus]
		expanded: isExpandedMenu // [!code focus]
	}) // [!code focus]

	return <div {...menuItemProps} {...props} ref={ref}>{children}</div> // [!code focus]
}) // [!code focus]

SubmenuTrigger.displayName = 'SubmenuTrigger'

interface SubmenuProps extends HTMLAttributes<HTMLUListElement> {
  active?: string,
  setActive?: (active: string | undefined) => void,
  isOpen?: boolean
  setRef?: (key: string, value: HTMLElement) => void
  onOpen?: VoidFunction
  textValue?: string,
  level?: number,
  selected?: boolean
  checked?: boolean
  orientation?: Orientation
}

const Submenu = forwardRef<HTMLLIElement, PropsWithChildren<SubmenuProps>>(({ isOpen, level, checked, selected, children }, ref) => { // [!code focus]
	const [trigger, ...list] = Children.toArray(children) // [!code focus]

	const { submenuProps } = useSubmenu({ expanded: isOpen!, level, checked, selected }) // [!code focus]
  // [!code focus]
	return (
		<li ref={ref}> // [!code focus]
			{trigger} // [!code focus]
			<ul {...submenuProps} hidden={!isOpen}> // [!code focus]
				{list} // [!code focus]
			</ul> // [!code focus]
		</li> // [!code focus]
	) // [!code focus]
}) // [!code focus]

Submenu.displayName = 'Submenu'

const Menu: FC<MenuProps> = ({ renderItem, renderButton, children, onClose, triggerRef, isOpen }) => {
  const { expand, expanded, toggle, hide } = useExpanded()

  const elementToList = useCallback((child: ReactElement): MenuTreeElement => {
    const type = treeNodeTypeResolver({ childElement: [MenuItem, SubmenuTrigger, MenuRadioItem, MenuCheckboxItem, MenuLinkItem], parentElement: Submenu, groupElement: [MenuRadioGroup] })(child) // [!code focus]
    return ({ element: child, children: type === 'group' || type === 'parent' ? Children.map(child.props?.children, elementToList) : [], type }) // [!code focus]
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

export const Page: React.FC = () => {
  const renderItem: MenuProps['renderItem'] = useCallback((node, callbackRef, { extended, toggleExtended, active, expand, hide, level, tree }) => {
    const {
      payload,
      children,
      key
    } = node

    if (payload?.type === 'parent') { // [!code focus]
      return ( // [!code focus]
        <Submenu level={level}  key={key} data-key={key} ref={(el) => callbackRef(key, el)} isOpen={extended.has(key)}> // [!code focus]
          {children.map((child) => renderItem(child, callbackRef, { extended, toggleExtended, active, hide, expand, level: child.level, tree }))} // [!code focus]
        </Submenu> // [!code focus]
      ) // [!code focus]
    } // [!code focus]

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

    if (payload?.isTrigger) { // [!code focus]
      return ( // [!code focus]
        <SubmenuTrigger isExpandedMenu={payload?.triggerFor ? extended.has(payload.triggerFor) : undefined} focused={active === key} level={level ? level - 1 : undefined} onClick={() => toggleExtended(payload?.triggerFor ?? '')} key={key} data-key={key} ref={(el) => callbackRef(key, el)}> // [!code focus]
          {payload?.item.element.props?.children} // [!code focus]
        </SubmenuTrigger>  // [!code focus]
      ) // [!code focus]
    } // [!code focus]

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
        <Submenu> // [!code focus]
          <SubmenuTrigger>Профиль</SubmenuTrigger> // [!code focus]
          <Submenu> // [!code focus]
            <SubmenuTrigger>Профиль</SubmenuTrigger> // [!code focus]
            <MenuRadioGroup value={value} onChange={setValue}> // [!code focus]
              <MenuRadioItem value='1'>ИП Иванов И.И.</MenuRadioItem> // [!code focus]
              <MenuRadioItem value='2'>ИП Сидоров С.С.</MenuRadioItem> // [!code focus]
              <MenuRadioItem value='3'>ИП Петров П.П.</MenuRadioItem> // [!code focus]
            </MenuRadioGroup> // [!code focus]
          </Submenu> // [!code focus]
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
