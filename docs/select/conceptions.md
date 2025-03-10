---
outline: deep
---

# Select

![An image](/select.png)

**Select** - интерактивный элемент, позволяющий пользователю выбирать подходящий вариант из списка с вариантами.   

[W3C ARIA Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/)

## A11Y

Для реализации Select рекомендуется использовать `<input />` с аттрибутом `readonly` как поле для отображения выбранного значения, а также `<ul>`/`<ol>` или `<li>` для реализации списка вариантов для выбора.

Для удобства пользователей также стоит поддержать фильтрацию списка на ввод. Управлением компонентом должно учитывать возможность взаимодействия с клавиатуры, поддерживать клавиши навигации по списку, выбора варианта, очистки. 

## Пример

Реализация доступного компонента Select достигается за счет использования нескольких хуков: [`useVisibility`](/core/useVisibility) - для управления состоянием Popup, [`useTreeList`](/core/useList) - для создания списка из React элементов, [`useSelection`](/core/useSelection) - для управления состоянием выбора, [`useActiveDescendant`](/core/useActiveDescendant) - для управления фокусом и [`useSelectControl`] - для правильных ролей, аттрибутов и обработчиков.

**SelectOption.tsx**

```tsx
interface SelectOptionProps {
  isSelected?: boolean
  focused?: boolean
}

export const SelectOption = forwardRef<HTMLDivElement, PropsWithChildren<SelectOptionProps>>(({ children, isSelected, focused, ...props }, ref) => {
  const { optionProps } = useOption({ selected: isSelected!, focusable: focused })

  return (
    <div {...optionProps} {...props} ref={ref}>{children}</div>
  )
})
```

**Select.tsx**

```tsx
type SelectProps = {
  value?: string
  onChange: ChangeEventHandler
  onSelect?: (value: string) => void
  items: { label: string, type: ListItemType }[]
  renderItem: (item: { label: string, type: ListItemType, callbackRef: (el: HTMLElement | null) => void, focused: boolean }, isSelected: boolean) => ReactElement
}

export const Select: FC<PropsWithChildren<SelectProps>> = ({ renderItem, items }) => {
  const comboboxRef = useRef<HTMLInputElement>(null)

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

  const { activeDescendant, setActiveDescendantId } = useActiveDescendant()
  const { get, set } = useRefMap<string, HTMLElement | null>()

  const { listboxProps } = useSelectListbox({
    list,
    selection,
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
    comboboxElement: comboboxRef.current,
    loopList: true
  })

  const { comboboxProps } = useSelectCombobox({
    list,
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
  })

  return (
    <div>
      <input {...comboboxProps} ref={comboboxRef} readOnly value={list.getNode([...selection.selectedKeys][0])?.payload.label} placeholder='Выбрать' />
      <div
        {...listboxProps}
        hidden={!isOpen}
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
        {list.getNodes()?.map((node) =>
          renderItem({ label: node.payload.label, type: node.payload.type ?? 'item', focused: activeDescendant === node.key, callbackRef: (el) => set(node.key, el) }, selection.isSelected(node.key)),
        )}
      </div>
    </div>
  )
}
```

```tsx
const Page: FC = () => {
  const [value, setValue] = useState('')

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const renderItem = (item: { label: string, type: ListItemType, callbackRef: (el: HTMLElement | null) => void, focused: boolean }, isSelected: boolean) => {
    return <SelectOption ref={item.callbackRef} focused={item.focused} isSelected={isSelected}>{item.label}</SelectOption>
  }

  return (
    <Select renderItem={renderItem} items={[
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
