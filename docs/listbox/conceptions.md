---
outline: deep
---

# Listbox

![An image](/listbox.png)

**Listbox** - интерактивный элемент, позволяющий пользователю выбирать вариант из списка.   

[W3C ARIA Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/listbox/)

## A11Y

Для реализации Listbox рекомендуется использовать список: `<ul>`, `<li>`. 

## Пример

Реализация доступного компонента Listbox достигается за счет использования нескольких хуков: [`useListboxProps`](/listbox/useListbox) - для необходимых пропсов для Listbox, [`useTreeList`](/core/useList) - для создания списка из React элементов, [`useSelection`](/core/useSelection) - для управления состоянием выбора, [`useActiveDescendant`](/core/useActiveDescendant) - для управления фокусом.

**Listbox.tsx**

В данном примере мы используем хук `useListboxProps` для обеспечения необходимой доступности компоненту Listbox: он предоставляет необходимые обработчики для клавиатуры, роли и аттрибуты.  

```tsx
type ItemListElement = { element: ReactElement, children: ItemListElement[], type: ListItemType, label: string }
type RenderFunc = (item: ItemListElement, key: string, meta: { label: string, active: string | undefined, callbackRef: (key: string, el: HTMLElement) => void }, callbacks: { isSelected: (key: string) => boolean, getChildren: (key: string) => LinkedListNode<ListItemPayload<ItemListElement>>[] | undefined }) => ReactElement

type TListBoxProps = Omit<HTMLAttributes<HTMLUListElement>, 'onChange'> & {
  ariaLabel?: string
  ariaLabelledby?: string
  children: any
  orientation?: Orientation
  renderItem: RenderFunc
} & (
  | { multiSelectable?: false; onChange: (value: string) => void; value?: string }
  | { multiSelectable: true; onChange: (value: string[]) => void; value?: string[] }
  )

export const ListBox = forwardRef<HTMLUListElement, TListBoxProps>(({ multiSelectable, renderItem, children, ...props }: TListBoxProps, ref) => {
    const listboxRef = useRef<HTMLUListElement | null>(null)
    useImperativeHandle(ref, () => listboxRef.current!, [])

    const listboxId = useId()
    const { set, get } = useRefMap<string, HTMLElement>()

    const elementToList = useCallback((child: any): any => {
      const type = listNodeTypeResolver({ itemElement: ListboxItem, groupElement: ListboxGroup })(child)
      return ({ element: child, children: type === 'group' ? Children.map(child.props?.children, elementToList) : [], type })
    }, [])
    const items = Children.map(children, elementToList)

    const list = useItemList<ItemListElement>({
      items,
      prefix: listboxId,
      labelResolver: (item) => item.type === 'item' ? item.element.props.children : '',
      typeResolver: (item) => item.type,
    })

    const selection = useSelection({
      keys: list.getNodes()?.map((i) => i.key) ?? [],
      selectionMode: multiSelectable ? SelectionMode.MULTIPLE : SelectionMode.SINGLE,
    })

    const { activeDescendant, setActiveDescendantId } = useActiveDescendant()

    const { listboxProps } = useListbox({
      list,
      id: listboxId,
      active: activeDescendant,
      changeActive(key) {
        if (!key) return
        setActiveDescendantId(key)
      },
      changeFocus(key) {
        if (!key) return
        get(key)?.focus()
      },
      selection,
    })

    return (
      <ul {...(props as any)} {...listboxProps} ref={listboxRef}>
        {list.getChildren('root')?.map((node) => renderItem(node.payload.item, node.key, { label: node.payload.label, active: activeDescendant, callbackRef: set }, { isSelected: selection.isSelected, getChildren: (key) => list.getChildren(key) }))}
      </ul>
    )
  }
)
```

**ListboxItem.tsx**

Для обеспечения доступности элементов списка используется хук `useOptionProps()`, предоставляющий необходимые элементы.

```tsx
export type TListboxItemProps = HTMLAttributes<HTMLLIElement> & {
  value: string
  isSelected?: boolean
  focused?: boolean
}

export const ListboxItem = forwardRef<HTMLLIElement, PropsWithChildren<TListboxItemProps>>(({ 'aria-posinset': ariaPosinset, 'aria-setsize': ariaSetsize, isSelected = false, focused, children, ...props }, ref) => {
    const { optionProps } = useOption({ selected: isSelected, setSize: ariaSetsize, posInSet: ariaPosinset, focusable: focused })

    return (
      <li {...props} {...optionProps} ref={ref}>
        {children}
      </li>
    )
  }
)
```

**ListboxGroup.tsx**

Доступность элемента группы достигается за счет использования хука [`useGroupProps`](/group/useGroup)

```tsx
export type TListboxGroupProps = ({ 'aria-label': string; 'aria-labelledby'?: undefined } | { 'aria-label'?: undefined; 'aria-labelledby': string }) & {
  childNodes?: Element[]
  selectedKeys?: CollectionKey[]
  focusedKey?: CollectionKey
}

export const ListboxGroup = forwardRef<HTMLDivElement, PropsWithChildren<TListboxGroupProps>>(({ children, ...props }, ref) => {
    const { groupProps } = useGroup()

    return (
      <div {...props} ref={ref} {...groupProps}>
        {children}
      </div>
    )
  }
)
```

**Page.tsx**

Финальная реализация 

```tsx
export const Playground: React.FC = () => {
  const [, setValue] = useState<string[]>([])

  const render: RenderFunc = (item: ItemListElement, key: string, { active, label, callbackRef }, { isSelected, getChildren }): ReactElement => {
    if (item.type === 'item') {
      return cloneElement(item.element, {
        ...item.element.props,
        id: key,
        focused: active === key,
        isSelected: isSelected(key),
        ref: (el: HTMLElement) => callbackRef(key, el)
      }, label)
    }

    return cloneElement(item.element, { ...item.element.props, ref: (el: HTMLElement) => callbackRef(key, el) }, getChildren(key)?.map(child => child?.payload.item ? render(child?.payload.item, child?.key, { label: child?.payload.label, active, callbackRef }, { isSelected, getChildren }) : null))
  }


  return (
    <ListBox multiSelectable renderItem={render} onChange={setValue}>
      <ListboxGroup aria-label='First'>
        <ListboxItem value='1'>One</ListboxItem>
      </ListboxGroup>
      <ListboxGroup aria-label='Second'>
        <ListboxItem value='2'>Two</ListboxItem>
        <ListboxItem value='3'>Three</ListboxItem>
      </ListboxGroup>
    </ListBox>
  )
}
```

## Особенности

- Поддержка необходимых `role` для элементов
- Поддержка необходимых `aria` аттрибутов для доступности
- Необходимое управление с помощью клавиатуры
