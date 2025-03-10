---
outline: deep
---

# Option

![An image](/option.png)

**Option** - элемент выпадающего меню. Используется для реализации компонентов: `<Select>`, `<Listbox>`, `<Combobox>`

## A11Y

Компоненты типа `Option` используются как элементы выпадающего меню или списка. 

Для их реализации можно использовать многие элементы, однако необходимо обеспечить правильные роли и aria-аттрибуты.

## Пример

Возьмем прошлую реализации элемента списка `Combobox`. В данном примере используется хук `useOptionProps`, предоставляющий необходимые пропсы для элемента. 

**ComboboxItem.tsx**

```tsx
interface ComboboxItemProps {
	isSelected?: boolean
}

export const Item = styled.div<{ isSelected?: boolean }>`
  &[data-focused='true'] {
    outline: 1px solid #0074d9;
  }

  &[aria-selected='true'] {
    background-color: #0074d9;
  }
`

export const ComboboxItem: FC<PropsWithChildren<ComboboxItemProps>> = ({ children, isSelected, ...props }) => {
	const { optionProps } = useOptionProps({ isSelected: isSelected! })

	return (
	  <Item {...optionProps} {...props}>{children}</Item>
	)
}
```

## Особенности

- Поддержка необходимых `role` для элементов
- Поддержка необходимых `aria` аттрибутов для доступности
