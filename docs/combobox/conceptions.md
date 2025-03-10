---
outline: deep
---

# Combobox

![An image](/combobox.png)

**Combobox** - интерактивный элемент, позволяющий пользователю вводить собственное значение, а также выбирать подходящий вариант из списка с вариантами (подсказками).   

[W3C ARIA Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/)

## A11Y

Для реализации Combobox рекомендуется использовать `<input />` как поле для ввода значения, а также `<ul>`/`<ol>` или `<li>` для реализации списка вариантов для выбора.

Для удобства пользователей также стоит поддержать возможность автодополнения пользовательского ввод, а также фильтрации списка на ввод. Управлением компонентом должно учитывать возможность взаимодействия с клавиатуры, поддерживать клавиши навигации по списку, выбора варианта, очистки. 

## Пример

Реализация доступного компонента Combobox достигается за счет использования нескольких хуков: [`useVisibility`](/core/useVisibility) - для управления состоянием Popup, [`useTreeList`](/core/useList) - для создания списка из React элементов, [`useSelection`](/core/useSelection) - для управления состоянием выбора, [`useActiveDescendant`](/core/useActiveDescendant) - для управления фокусом.

**ComboboxOption.tsx**

```tsx
interface ComboboxOptionProps {
  isSelected?: boolean
  focused?: boolean
}

export const ComboboxOption = forwardRef<HTMLDivElement, PropsWithChildren<ComboboxOptionProps>>(({ children, isSelected, focused, ...props }, ref) => {
  const { optionProps } = useOption({ selected: isSelected!, focusable: focused })

  return (
    <div {...optionProps} {...props} ref={ref}>{children}</div>
  )
})
```

**Combobox.tsx**

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

**Page.tsx**

```tsx
const Page: FC = () => {
  const [value, setValue] = useState('')

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const renderItem = (item: { label: string, type: ListItemType, callbackRef: (el: HTMLElement | null) => void, focused: boolean }, isSelected: boolean) => {
    return <ComboboxOption ref={item.callbackRef} focused={item.focused} isSelected={isSelected}>{item.label}</ComboboxOption>
  }

  return (
    <Combobox renderItem={renderItem} items={[
      { label: 'A', type: 'item' },
      { label: 'B', type: 'item' },
      { label: 'C', type: 'item' },
      { label: 'D', type: 'item' },
      { label: 'E', type: 'item' },
    ]} onChange={onChange} value={value} onSelect={setValue} />
  )
}
```

## Особенности

- Поддержка необходимых `role` для элементов
- Поддержка необходимых `aria` аттрибутов для доступности
- Необходимое управление с помощью клавиатуры
