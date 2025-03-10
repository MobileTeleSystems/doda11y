---
outline: deep
---

# useCombobox

**useCombobox** - хук, предоставляющий доступность для Combobox.

## API

|       |                                                                        |
| ----: |:-----------------------------------------------------------------------|
| Type: | `<T extends HTMLElement>(options: UseComboboxOptions): UseCombobox<T>` |

### `UseComboboxOptions<I extends ListItem = ListItem>`

| Имя               | Тип                               | Описание    |
|:-------------------|:----------------------------------|:-----------|
| `list`  | `ItemList<I, ListItemPayload<I>>` | Список элементов, отображаемых в компоненте  | 
| `isOpen`  | `boolean`                         | Признак, открыт ли список значений  | 
| `listboxRef`  | `RefObject<HTMLElement>`          | Свойство, обозначающее ссылку на HTMLElement listbox  | 
| `autoComplete`  | `any`                             | Свойство, обозначающее режим автодополнения  | 
| `clearSelect`  | `() => void`                      | Метод очистки всех выбранных значений  | 
| `onOpen`  | `() => void`                      | Обработчик на открытие компонента  | 
| `onClose`  | `() => void`                      | Обработчик на закрытие компонента  | 
| `changeActive`  | `(id: string) => void`            | Обработчик на изменение активного элемента в списке  | 
| `changeFocus`  | `(id: string) => void`            | Метод, изменяющий текущий сфокусированный элемент  | 
| `active`  | `string`                          | Свойство, обозначающее текущий активный элемент  | 
| `popupType`  | `Popup`                           | Тип popup  | 
| `id`  | `string`                          | id элемента  | 
| `popupId`  | `string`                          | id popup элемента  | 
| `withSemanticRole`  | `boolean`                         | Признак, использовать ли семантическую роль. В случае, если используется семантический тег (например `<button>` или `<article>`, лучше передать `false`)  | 

### `UseComboboxUnionProps<T extends HTMLElement = HTMLElement>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `role`  | `"combobox"`   | Роль combobox  | 
| `tabIndex`  | `0 \| -1`   | Свойство, означающее, должен ли элемент участвовать в последовательности с помощью клавиатуры и в каком порядке  | 
| `aria-autocomplete`  | `AutoComplete`   | Свойство, обозначающее режим автодополнения  | 
| `id`  | `string`   | id элемента  | 
| `aria-haspopup`  | `boolean \| "dialog" \| "menu" \| "listbox" \| "tree" \| "grid" \| "false" \| "true"`   | Тип popup  | 
| `aria-expanded`  | `Booleanish`   | Свойство, определяющее, открыт ли popup  | 
| `aria-controls`  | `string`   | Свойство, указывающее на элемент с помощью id, который управляет видимостью popup trigger  | 
| `onKeyDown`  | `KeyboardEventHandler`   | Обработчик на нажатие клавиш  | 
| `onInput`  | `FormEventHandler`   | Обработчик на input  | 
| `onBlur`  | `FocusEventHandler`   | Обработчик на blur  | 

### `UseCombobox<T extends HTMLElement = HTMLElement>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `comboboxProps`  | `UseComboboxUnionProps<T>`   | Свойства, необходимые для доступности input элемента в составе combobox  | 

## Пример

`useCombobox` используется для обеспечения веб-доступности `Combobox`, его необходимо сочетать с другими хуками, или же имплементировать собственную логику выбора элемента, хранения коллекции, фокусировки и т.д.

**ComboBox.tsx**

В данном примере также используется хук useItemList и специально рендеринг элементов сделан с помощью cloneElement, однако стоит учесть, что вам самим необходимо прописать функции, которые определяют тип и метку элемента коллекции. Более того, допустимо писать собственные списки с рендерингом черезе callback функцию (Следующий пример).

```tsx
type ComboboxProps = {
  value?: string
  onChange: ChangeEventHandler
  onSelect?: (value: string) => void
  items: { label: string, type: ListItemType }[]
  renderItem: (item: { label: string, type: ListItemType, callbackRef: (el: HTMLElement | null) => void, focused: boolean }, isSelected: boolean) => ReactElement
}

export const Combobox: FC<PropsWithChildren<ComboboxProps>> = ({ renderItem, items }) => {
  const comboboxRef = useRef<HTMLInputElement>(null)
  const listboxRef = useRef<HTMLDivElement>(null)

  const comboboxId = useId()
  const popupId = useId()

  const { isOpen, open, close } = useVisibility()

  const list = useItemList<{ label?: string, type: ListItemType | null }>({
    items,
    prefix: comboboxId,
    typeResolver: (item) => item.type,
    labelResolver: (item) => item.label ?? '',
  })

  const selection = useSelection({
    keys: list.getNodes()?.map((i) => i.key) ?? [],
    selectionMode: SelectionMode.SINGLE,
  })

  const [value, setValue] = useState<string>()

  const { activeDescendant, setActiveDescendantId } = useActiveDescendant()
  const { get, set } = useRefMap<string, HTMLElement | null>()

  const { startsWith } = useFilter(undefined, { sensitivity: 'base', ignorePunctuation: true })
  const filteredList = useMemo(() => value !== '' ? list.filterNodes((node) => startsWith(node.payload.label, value ?? '')) : list, [value, list])

  const { listboxProps } = useComboboxListbox({
    list: filteredList as any,
    selection,
    active: activeDescendant,
    changeActive: setActiveDescendantId,
    changeFocus(active) {
      if (!active) return
      get(active)?.focus()
    },
    id: popupId,
    isOpen,
    onOpen: open,
    onClose: close,
    onSelect(key) {
      setValue(list.getNode(key)?.payload.label)
    },
    comboboxElement: comboboxRef.current,
    loopList: true
  })

  const { comboboxProps } = useCombobox({
    list: filteredList as any,
    active: activeDescendant,
    changeActive: setActiveDescendantId,
    changeFocus(active) {
      if (!active) return
      get(active)?.focus()
    },
    popupId,
    isOpen,
    onOpen: open,
    onClose: close,
    clearSelect: selection.clearSelect,
    autoComplete: 'both',
    listboxRef
  })

  return (
    <div>
      <input {...comboboxProps} onChange={(e) => setValue(e.currentTarget.value)} ref={comboboxRef} value={value} placeholder='Выбрать' />
      <div
        {...listboxProps}
        ref={listboxRef}
        hidden={!isOpen || filteredList.getNodes()?.length === 0}
        id={popupId}
        style={{
          position: 'absolute',
          zIndex: 9999999,
          background: 'white',
          width: '100%',
          borderRadius: '16px',
          padding: '10px',
          boxShadow: '0px 4px 16px 0px rgba(0,0,0,0.08),0px 0px 16px 0px rgba(0,0,0,0.08)',
          top: '30px',
        }}>
        {filteredList.getNodes()?.map((node) =>
          renderItem({ label: node.payload.label, type: node.payload.type ?? 'item', focused: activeDescendant === node.key, callbackRef: (el) => set(node.key, el) }, selection.isSelected(node.key)),
        )}
      </div>
    </div>
  )
}
```
