---
outline: deep
---

# useTreeItem

**useTreeItem** - хук, предоставляющий доступность элементу дерева.

## API

|       |                                                                          |
| ----: |:-------------------------------------------------------------------------|
| Type: | `<T extends HTMLElement>(options: : UseTreeItemOptions): UseTreeItem<T>` |

### `UseTreeItemOptions`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `setSize`  | `number`   | Размер коллекции, частью которой является элемент option  | 
| `level`  | `number`   | Свойство, обозначающее уровень вложенности элемента  | 
| `posInSet`  | `number`   | Позиция элемента в коллекции  | 
| `withSemanticRole`  | `boolean`   | Признак, использовать ли семантическую роль. В случае, если используется семантический тег (например `<button>` или `<article>`, лучше передать `false`)  | 
| `selected`  | `boolean`   | Признак, выбран ли элемент в данный момент. В отличие от isChecked используется при одиночном выборе  | 
| `checked`  | `boolean`   | Признак, выбран ли элемент в данный момент. В отличие от isSelected используется при множественном выборе  | 
| `focusable`  | `boolean`   | Признак, находится ли активный фокус на данном элементе.  | 

### `UseTreeItemUnionProps<T extends HTMLElement>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `role`  | `"treeitem"`   | Роль treeitem  | 
| `tabIndex`  | `0 \| -1`   | Свойство, означающее, должен ли элемент участвовать в последовательности с помощью клавиатуры и в каком порядке  | 
| `aria-selected`  | `Booleanish`   | Свойство aria, определяющее, выбран ли элемент. Используется, если для выбора доступен только один элемент  | 
| `aria-checked`  | `boolean \| "false" \| "true" \| "mixed"`   | Свойство aria, определяющее, выбран ли элемент. Используется, если для выбора доступно несколько элементов  | 
| `aria-posinset`  | `number`   | Свойство aria, определяющее позицию элемента в коллекции  | 
| `aria-setsize`  | `number`   | Свойство aria, определяющее количество элементов в коллекции  | 
| `aria-level`  | `number`   | Свойство aria, определяющее вложенность элемента  | 

### `UseTreeItem<T extends HTMLElement>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `treeItemProps`  | `TreeItemProps<T>`   | Свойства, необходимые для доступности tree элемента  | 

## Пример

`useTree` используется для обеспечения веб-доступности дерева. 

**TreeItem.tsx**

```tsx
const TreeItem = forwardRef<HTMLLIElement, PropsWithChildren<HTMLAttributes<HTMLLIElement> & { selectable?: boolean, level?: number, selected?: boolean, checked?: boolean, focused?: boolean }>>(({ children, level, selected, checked, focused, ...props }, ref) => {
  const { treeItemProps } = useTreeItem({
    level,
    selected: props.selectable ? selected: undefined,
    checked: props.selectable ? checked : undefined,
    focusabled: focused,
  })

  return <li className='treeItem' {...treeItemProps} {...props} ref={ref}>{children}</li>
})

TreeItem.displayName = 'TreeItem'
```
