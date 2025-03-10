---
outline: deep
---

# useSubtree

**useSubtree** - хук, предоставляющий доступность поддереву.

## API

|       |                                                                        |
| ----: |:-----------------------------------------------------------------------|
| Type: | `<T extends HTMLElement>(options: : UseSubTreeOptions): UseSubTree<T>` |

### `UseSubTreeOptions`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `setSize`  | `number`   | Размер коллекции, частью которой является элемент  | 
| `level`  | `number`   | Свойство, обозначающее уровень вложенности элемента  | 
| `posInSet`  | `number`   | Позиция элемента в коллекции  | 
| `withSemanticRole`  | `boolean`   | Признак, использовать ли семантическую роль. В случае, если используется семантический тег (например `<button>` или `<article>`, лучше передать `false`)  | 
| `selected`  | `boolean`   | Признак, выбран ли элемент в данный момент. В отличие от checked используется при одиночном выборе  | 
| `checked`  | `boolean`   | Признак, выбран ли элемент в данный момент. В отличие от selected используется при множественном выборе  | 
| `expanded`  | `boolean`   | Признак, раскрыто ли поддерево  | 

### `UseSubTreeUnionProps<T extends HTMLElement>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `role`  | `"treeitem"`   | Роль treeitem  | 
| `tabIndex`  | `0 \| -1`   | Свойство, означающее, должен ли элемент участвовать в последовательности с помощью клавиатуры и в каком порядке  | 
| `aria-selected`  | `Booleanish`   | Свойство aria, определяющее, выбран ли элемент. Используется, если для выбора доступен только один элемент  | 
| `aria-checked`  | `boolean \| "false" \| "true" \| "mixed"`   | Свойство aria, определяющее, выбран ли элемент. Используется, если для выбора доступно несколько элементов  | 
| `aria-posinset`  | `number`   | Свойство aria, определяющее позицию элемента в коллекции  | 
| `aria-setsize`  | `number`   | Свойство aria, определяющее количество элементов в коллекции  | 
| `aria-level`  | `number`   | Свойство aria, определяющее вложенность элемента  | 

### `UseSubTree<T extends HTMLElement>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `subTreeProps`  | `TreeItemProps<T>`   | Свойства, необходимые для доступности tree элемента  | 

## Пример

`useSubtree` используется для обеспечения веб-доступности дерева. 

**Subtree.tsx**

```tsx
interface SubTreeProps extends HTMLAttributes<HTMLUListElement> {
  active?: string,
  setActive?: (active: string | undefined) => void,
  list?: List<any, any>
  isOpen?: boolean
  setRef?: (key: string, value: HTMLElement) => void
  onOpen?: VoidFunction
  textValue?: string,
  level?: number,
  isSelected?: boolean
  isChecked?: boolean
}

const SubTree = forwardRef<HTMLLIElement, PropsWithChildren<SubTreeProps>>(({ isOpen, level, isChecked, isSelected, children }, ref) => {
  const [trigger, ...list] = Children.toArray(children)

  const { subTreeProps } = useSubTree({ isExpanded: isOpen!, level, isChecked, isSelected })

  return (
    <li ref={ref}>
      {trigger}
      <ul {...subTreeProps} hidden={!isOpen}>
        {list}
      </ul>
    </li>
  )
})

SubTree.displayName = 'SubTree'
```

**SubtreeTrigger.tsx**

```tsx
const SubTreeTrigger = forwardRef<HTMLDivElement, PropsWithChildren<HTMLAttributes<HTMLDivElement> & { selectable?: boolean, level?: number, selected?: boolean, checked?: boolean, focused?: boolean }>>(({ children, level, selected, checked, focused, ...props }, ref) => {
  const { treeItemProps } = useTreeItem({
    level,
    selected: props.selectable ? selected: undefined,
    checked: props.selectable ? checked : undefined,
    focusable: focused,
  })

  return <div {...treeItemProps} {...props} className='subtreeTrigger' ref={ref}>{children}</div>
})

SubTreeTrigger.displayName = 'SubTreeTrigger'
```
