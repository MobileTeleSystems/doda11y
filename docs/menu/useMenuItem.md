---
outline: deep
---

# useMenuItem

**useMenuItem** - хук, предоставляющий доступность элементу меню.

## API

|       |                                                 |
| ----: |:------------------------------------------------|
| Type: | `(options: UseMenuItemOptions): UseMenuItem`    |

### `UseMenuItemOptions`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `onActivate`  | `() => void`   | Метод, вызываемый на активацию элемента меню  | 
| `withSemanticRole`  | `boolean`   | Признак, использовать ли семантическую роль. В случае, если используется семантический тег (например `<menu>` или `<article>`, лучше передать `false`)  | 
| `setSize`  | `number`   | Размер коллекции, частью которой является элемент option  | 
| `level`  | `number`   | Свойство, обозначающее уровень вложенности элемента  | 
| `posInSet`  | `number`   | Позиция элемента в коллекции  | 
| `selected`  | `boolean`   | Признак, выбран ли элемент в данный момент. В отличие от isChecked используется при одиночном выборе  | 
| `checked`  | `boolean`   | Признак, выбран ли элемент в данный момент. В отличие от isSelected используется при множественном выборе  | 
| `focusable`  | `boolean`   | Признак, находится ли активный фокус на данном элементе.  | 
| `popup`  | `true \| "menu"`   | Признак, имеет ли подменю данный пункт меню (для триггеров)  | 
| `expanded`  | `boolean`   | Признак, раскрыто ли подменю (для триггеров)  | 
| `label`  | `string`   | Свойство, позволяющее добавить текстовое имя/назначение элементу, которое может быть прочитан программами чтения с экрана, чтобы обеспечить доступ к информации, которая может быть утрачена из-за ограничений восприятия.  | 
| `labelledBy`  | `string`   | Аналогично `aria-label`, позволяет добавить имя/назначение к элементу, однако ссылается на описание с помощью id  | 

### `UseMenuItemUnionProps<T extends HTMLElement>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `onKeyDown`  | `KeyboardEventHandler`   | Обработчик на нажатие клавиш  | 
| `role`  | `"menuitem"`   | Роль menuitem  | 
| `tabIndex`  | `0 \| -1`   | Свойство, означающее, должен ли элемент участвовать в последовательности с помощью клавиатуры и в каком порядке  | 
| `aria-posinset`  | `number`   | Свойство aria, определяющее позицию элемента в коллекции  | 
| `aria-setsize`  | `number`   | Свойство aria, определяющее количество элементов в коллекции  | 
| `aria-level`  | `number`   | Свойство aria, определяющее вложенность элемента  | 
| `aria-expanded`  | `Booleanish`   | Свойство aria, определяющее раскрыт ли подпункт  | 
| `aria-haspopup`  | `boolean \| "dialog" \| "menu" \| "listbox" \| "tree" \| "grid" \| "false" \| "true"`   | Свойство aria, определяющее есть у элемента связанный попап  | 

### `UseMenuItem<T extends HTMLElement>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `menuItemProps`  | `UseMenuItemUnionProps<T>`   | Свойства, необходимые для доступности menuItem  | 

## Пример

`useMenuItem` используется для обеспечения веб-доступности меню. 

**MenuItem.tsx**

```tsx
const MenuItem = forwardRef<HTMLLIElement, PropsWithChildren<HTMLAttributes<HTMLLIElement> & { selectable?: boolean, level?: number, selected?: boolean, checked?: boolean, focused?: boolean, onActivate?: () => void }>>(({ children, level, selected, checked, focused, onActivate, ...props }, ref) => {
  const { menuItemProps } = useMenuItem({
    level,
    selected: props.selectable ? selected: undefined,
    checked: props.selectable ? checked : undefined,
    focusable: focused,
    onActivate,
  })

  return <li {...menuItemProps} {...props} ref={ref}>{children}</li>
})

MenuItem.displayName = 'MenuItem'
```
