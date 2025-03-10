---
outline: deep
---

# useMenuItemCheckbox

**useMenuItemCheckbox** - хук, предоставляющий доступность элементу меню, являющемуся checkbox.

## API

|       |                                                                                     |
| ----: |:------------------------------------------------------------------------------------|
| Type: | `<T extends HTMLElement>(options: UseMenuItemRadioOptions<T>): UseMenuItemRadio<T>` |

### `UseMenuItemCheckboxOptions`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `withSemanticRole`  | `boolean`   | Признак, использовать ли семантическую роль. В случае, если используется семантический тег (например `<menu>` или `<article>`, лучше передать `false`)  | 
| `focusable`  | `boolean`   | Признак, находится ли активный фокус на данном элементе.  | 
| `level`  | `number`   | Свойство, обозначающее уровень вложенности элемента  | 
| `checked`  | `boolean \| "mixed"`   | Признак, определяющий, выбрана ли радио-кнопка  | 
| `disabled`  | `boolean`   | Признак, определяющий, заблокирована ли в данный момент кнопка для выбора  | 
| `posInSet`  | `number`   | Свойство, определяющее позицию элемента в коллекции  | 
| `setSize`  | `number`   | Свойство, определяющее количество элементов в коллекции  | 
| `label`  | `string`   | Свойство, позволяющее добавить текстовое имя/назначение элементу, которое может быть прочитан программами чтения с экрана, чтобы обеспечить доступ к информации, которая может быть утрачена из-за ограничений восприятия.  | 
| `labelledBy`  | `string`   | Аналогично `aria-label`, позволяет добавить имя/назначение к элементу, однако ссылается на описание с помощью id  | 
| `description`  | `string`   | Свойство, позволяющее добавить текстовое описание (например, его предназначение) к элементу, которое может быть прочитан программами чтения с экрана, чтобы обеспечить доступ к информации, которая может быть утрачена из-за ограничений восприятия.  | 
| `describedBy`  | `string`   | Аналогично `aria-description`, позволяет добавить описание (например, его предназначение) к элементу, однако ссылается на описание с помощью id  | 
| `onToggle`  | `() => void`   | Обработчик на активацию checkbox  | 

### `UseMenuItemCheckboxUnionProps<T extends HTMLElement>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `role`  | `"menuitemcheckbox"`   | Роль menuitemcheckbox  | 
| `tabIndex`  | `0 \| -1`   | Свойство, означающее, должен ли элемент участвовать в последовательности с помощью клавиатуры и в каком порядке  | 
| `aria-level`  | `number`   | Свойство aria, определяющее вложенность элемента  | 
| `aria-haspopup`  | `boolean \| "dialog" \| "menu" \| "listbox" \| "tree" \| "grid" \| "false" \| "true"`   | Свойство aria, обозначающее тип popup  | 
| `aria-checked`  | `boolean \| "false" \| "true" \| "mixed"`   | Свойство aria, обозначающее, выбран ли элемент  | 
| `aria-disabled`  | `Booleanish`   | Свойство aria, обозначающее, заблокирована ли в данный момент кнопка для выбора  | 
| `aria-posinset`  | `number`   | Свойство aria, обозначающее позицию элемента в коллекции  | 
| `aria-setsize`  | `number`   | Свойство aria, обозначающее количество элементов в коллекции  | 
| `onKeyDown`  | `KeyboardEventHandler`   | Обработчик на нажатие клавиш  | 

### `UseMenuItemCheckbox<T extends HTMLElement>`

| Имя               | Тип      | Описание                               |
|:-------------------|:-----------|:---------------------------------------|
| `menuItemCheckboxProps`  | `UseMenuItemCheckboxUnionProps<T>`   | Свойства, необходимые для доступности  | 

## Пример

`useMenuItemCheckbox` используется для обеспечения веб-доступности элемента меню, являющегося чекбоксом. 

**useMenuItemCheckbox.tsx**

```tsx
interface MenuCheckboxItemProps {
  selectable?: boolean
  level?: number
  checked?: boolean
  focused?: boolean
  onToggle(): void
}

const MenuCheckboxItem = forwardRef<HTMLLIElement, PropsWithChildren<HTMLAttributes<HTMLLIElement> & MenuCheckboxItemProps>>(({ children, onToggle, level, checked, focused, onKeyDown }, ref) => {
  const { menuItemCheckboxProps } = useMenuItemCheckbox({
    focusable: focused,
    checked: checked ?? false,
    level,
    onKeyDown,
    onToggle
  })

  return (
    <li ref={ref} {...menuItemCheckboxProps}>
      {children}
    </li>
  )
})

MenuCheckboxItem.displayName = 'MenuCheckboxItem'
```
