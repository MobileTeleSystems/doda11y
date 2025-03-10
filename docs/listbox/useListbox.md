---
outline: deep
---

# useListbox

**useListbox** - хук, предоставляющий доступность для Listbox.

## API

|       |                                                                                |
| ----: |:-------------------------------------------------------------------------------|
| Type: | `<T extends Record<string, never>>(options: UseListboxOptions<T>): UseListbox` |

### `UseListboxOptions<I extends ListItem = ListItem>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `orientation`  | `Orientation`   | Ориентация списка. По умолчанию - `vertical`  | 
| `id`  | `any`   | id элемента  | 
| `withSemanticRole`  | `any`   | Признак, использовать ли семантическую роль. В случае, если используется семантический тег (например `<button>` или `<article>`, лучше передать `false`)  | 
| `active`  | `string`   | Свойство, обозначающее активный элемент  | 
| `list`  | `ItemList<I, ListItemPayload<I>>`   | Список элементов, отображаемых в компоненте  | 
| `selection`  | `SelectionControl`   | Selection методы для управления выбором  | 
| `changeActive`  | `(id: string) => void`   | Метод, изменяющий активный элемент  | 
| `changeFocus`  | `(id: string) => void`   | Метод, изменяющий текущий сфокусированный элемент  | 

### `UseListboxUnionListboxProps`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `role`  | `"listbox"`   | Роль listbox  | 
| `tabIndex`  | `0 \| -1`   | Свойство, означающее, должен ли элемент участвовать в последовательности с помощью клавиатуры и в каком порядке  | 
| `aria-multiselectable`  | `Booleanish`   | Свойство aria, определяющее, доступен ли множественный выбор для списка. По умолчанию - `false`  | 
| `aria-orientation`  | `"vertical" \| "horizontal"`   | Ориентация элемента. По умолчанию - `vertical`  | 
| `id`  | `string`   | id элемента  | 
| `onKeyDown`  | `KeyboardEventHandler`   | Обработчик на нажатие клавиш  | 
| `onFocus`  | `FocusEventHandler`   | Обработчик на focus  | 

### `UseListbox`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `listboxProps`  | `UseListboxUnionListboxProps`   | Свойства, необходимые для доступности listbox  | 

## Пример

`useListbox` используется для обеспечения веб-доступности `Listbox`, его необходимо сочетать с другими хуками, или же имплементировать собственную логику выбора элемента, хранения коллекции, фокусировки и т.д. 

**Listbox.tsx**

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
