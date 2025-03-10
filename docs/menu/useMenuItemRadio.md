---
outline: deep
---

# useMenuItemRadio

**useMenuItemRadio** - хук, предоставляющий доступность элементу меню, являющемуся радио-кнопкой.

## API

|       |                                                                                     |
| ----: |:------------------------------------------------------------------------------------|
| Type: | `<T extends HTMLElement>(options: UseMenuItemRadioOptions<T>): UseMenuItemRadio<T>` |

### `UseMenuItemRadioOptions`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `onActivate`  | `() => void`   | Метод, вызываемый на активацию элемента radio меню  |
| `checked`  | `boolean`   | Признак, определяющий, выбрана ли радио-кнопка  | 
| `disabled`  | `boolean`   | Признак, определяющий, заблокирована ли в данный момент кнопка для выбора  | 
| `posInSet`  | `number`   | Свойство aria, определяющее позицию элемента в коллекции  | 
| `setSize`  | `number`   | Свойство aria, определяющее количество элементов в коллекции  | 
| `withSemanticRole`  | `boolean`   | Признак, использовать ли семантическую роль. В случае, если используется семантический тег (например `<menu>` или `<article>`, лучше передать `false`)  | 
| `focusable`  | `boolean`   | Признак, находится ли активный фокус на данном элементе.  | 
| `level`  | `number`   | Свойство, обозначающее уровень вложенности элемента  | 

### `UseMenuItemRadioUnionProps<T extends HTMLElement>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `role`  | `"menuitemradio"`   | Роль menuitemradio  | 
| `tabIndex`  | `0 \| -1`   | Свойство, означающее, должен ли элемент участвовать в последовательности с помощью клавиатуры и в каком порядке  | 
| `aria-level`  | `number`   | Свойство aria, определяющее вложенность элемента  | 
| `aria-haspopup`  | `boolean \| "dialog" \| "menu" \| "listbox" \| "tree" \| "grid" \| "false" \| "true"`   | Свойство aria, обозначающее тип popup  | 
| `aria-checked`  | `boolean \| "false" \| "true" \| "mixed"`   | Свойство aria, определяющее, выбрана ли радио-кнопка  | 
| `aria-disabled`  | `Booleanish`   | Свойство aria, определяющее, заблокирована ли в данный момент кнопка для выбора  | 
| `aria-posinset`  | `number`   | Свойство aria, определяющее позицию элемента в коллекции  | 
| `aria-setsize`  | `number`   | Свойство aria, определяющее количество элементов в коллекции  | 
| `onKeyDown`  | `KeyboardEventHandler`   | Обработчик на нажатие клавиш  | 

### `UseMenuItemRadio<T extends HTMLElement>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `menuItemRadioProps`  | `MenuItemRadioProps<T>`   | Свойства, необходимые для доступности menuItemRadio  | 

## Пример

`useMenuItemRadio` используется для обеспечения веб-доступности элемента меню, являющегося радио-кнопкой. 

**MenuItemRadio.tsx**

```tsx
interface MenuRadioItemProps {
  value: string
  selectable?: boolean
  level?: number
  selected?: boolean
  checked?: boolean
  focused?: boolean
}

const MenuRadioItem = forwardRef<HTMLLIElement, PropsWithChildren<HTMLAttributes<HTMLLIElement> & MenuRadioItemProps>>(({ children, level, checked, focused }, ref) => {
  const { menuItemRadioProps } = useMenuItemRadio({
    focusable: focused,
    checked: checked ?? false,
    level,
  })

  return (
    <li ref={ref} {...menuItemRadioProps}>
      {children}
    </li>
  )
})

MenuRadioItem.displayName = 'MenuRadioItem'
```
