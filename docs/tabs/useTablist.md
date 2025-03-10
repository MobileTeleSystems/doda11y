---
outline: deep
---

# useTablist

**useTablist** - хук, предоставляющий доступность Tab List.

## API

|       |                                                                                                                      |
| ----: |:---------------------------------------------------------------------------------------------------------------------|
| Type: | `<I extends ItemTree = ItemTree, T extends HTMLElement = HTMLElement>(options: UseTablistOptions<I>): UseTablist<T>` |

### `UseTablistOptions<I extends ListItem = ListItem>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `withSemanticRole`  | `boolean`   | Признак, использовать ли семантическую роль. В случае, если используется семантический тег (например `<button>` или `<article>`, лучше передать `false`)  | 
| `orientation`  | `any`   | Свойство, определяющее направление. По умолчанию - 'horizontal'  | 
| `active`  | `any`   | Свойство, обозначающее активный элемент  | 
| `label`  | `string`   | Свойство, позволяющее добавить текстовое имя/назначение элементу, которое может быть прочитан программами чтения с экрана, чтобы обеспечить доступ к информации, которая может быть утрачена из-за ограничений восприятия.  | 
| `labelledBy`  | `string`   | Аналогично `aria-label`, позволяет добавить имя/назначение к элементу, однако ссылается на описание с помощью id  | 
| `list`  | `ItemList<I, ListItemPayload<I>>`   | Список элементов, отображаемых в компоненте  | 
| `activateOnChange`  | `boolean`   | Признак, обозначающий, необходимо ли активировать вкладку на смену  | 
| `changeActive`  | `(id: string) => void`   | Метод, изменяющий активный элемент  | 
| `changeFocus`  | `(id: string) => void`   | Метод, изменяющий текущий сфокусированный элемент списка  | 
| `onActivate`  | `(key: string) => void`   | Метод, вызываемый на активацию  | 

### `UseTablistUnionProps<T extends HTMLElement>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `role`  | `"tablist"`   | Роль Tablist  | 
| `tabIndex`  | `0 \| -1`   | Свойство, означающее, должен ли элемент участвовать в последовательности с помощью клавиатуры и в каком порядке  | 
| `aria-orientation`  | `"vertical" \| "horizontal"`   | Ориентация элемента. По умолчанию - `vertical`  | 
| `aria-label`  | `string`   | Свойство, добавляющее текстовое имя/назначение элементу, которое может быть прочитан программами чтения с экрана, чтобы обеспечить доступ к информации, которая может быть утрачена из-за ограничений восприятия.  | 
| `aria-labelledby`  | `string`   | Аналогично `aria-label`, позволяет добавить текстовое имя/назначение элементу, однако ссылается на описание с помощью id  | 
| `onKeyDown`  | `KeyboardEventHandler`   | Обработчик на нажатие клавиш  | 
| `onFocus`  | `FocusEventHandler`   | Обработчик на focus  | 

### `UseTablist<T extends HTMLElement>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `tablistProps`  | `UseTablistUnionProps<T>`   | Свойства, необходимые для доступности Tablist  | 

## Пример

`useTablist` используется для обеспечения веб-доступности Tab List.

Ref `isInitialized` здесь используется для того, чтобы не вызывать фокус на элемент в случае, если компонент рендерится в первый раз

**TabList.tsx**

```tsx
type ItemListElement = { element: ReactElement, type: ListItemType, label: string }

const Tablist: FC<{ children: ReactElement[], onActivate?: (key: string) => void, labelledBy?: string, active?: string }> = ({ children, onActivate, labelledBy, active }) => {
  const elementToList = useCallback((child: any): any => {
    const type = listNodeTypeResolver({ itemElement: Tab })(child)
    return ({ element: child, label: child.props?.children, type })
  }, [])
  const itemsArray = Children.map(children, elementToList)

  const isInit = useRef(false)

  const itemList = useItemList<ItemListElement>({
    items: itemsArray,
    typeResolver: (el) => el.type,
    labelResolver: (el) => el.label,
    keyResolver: (el) => el.element.key!,
  })

  const { activeDescendant, setActiveDescendantId } = useActiveDescendant()

  const { set, get } = useRefMap<string, HTMLElement | null>()

  useEffect(() => {
    const isInitialized = isInit.current

    if (activeDescendant && isInitialized) {
      get(activeDescendant)?.focus()
    }

    if (!activeDescendant && !isInitialized) {
      setActiveDescendantId(itemList.getFirstNode()?.key)
    }
  }, [activeDescendant, itemList])

  useEffect(() => {
    if (!isInit.current) isInit.current = true
  }, [])

  const { tablistProps } = useTablist<ItemListElement>({
    list: itemList,
    activeDescendant,
    setActiveDescendantId,
    onActivate,
    labelledBy,
  })

  return (
    <div {...tablistProps}>
      {itemList.getNodes()?.map((item) => {
        return (
          <Tab
            {...item.payload.item.element.props}
            onActivate={() => {
              if (onActivate) {
                onActivate(item.key)
                setActiveDescendantId(item.key)
              }
            }}
            key={item.key}
            ref={(el: HTMLElement) => set(item.key, el)}
            focusable={item.key === activeDescendant}
            active={item.key === active}
          />
        )
      })}
    </div>
  )
}
```
