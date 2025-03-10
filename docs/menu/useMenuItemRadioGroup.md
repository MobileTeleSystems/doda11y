---
outline: deep
---

# useMenuRadioGroup

**useMenuRadioGroup** - хук, предоставляющий доступность элементу группы радио-кнопок в составе меню.

## API

|       |                                                                                            |
| ----: |:-------------------------------------------------------------------------------------------|
| Type: | `<T extends HTMLElement>(options: UseMenuItemRadioGroupOptions): UseMenuItemRadioGroup<T>` |

### `UseMenuItemRadioGroupOptions`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `withSemanticRole`  | `boolean`   | Признак, использовать ли семантическую роль. В случае, если используется семантический тег (например `<menu>` или `<article>`, лучше передать `false`)  | 
| `label`  | `string`   | Свойство, позволяющее добавить текстовое имя/назначение элементу, которое может быть прочитан программами чтения с экрана, чтобы обеспечить доступ к информации, которая может быть утрачена из-за ограничений восприятия.  | 
| `labelledBy`  | `string`   | Аналогично `aria-label`, позволяет добавить имя/назначение к элементу, однако ссылается на описание с помощью id  | 
| `onActivate`  | `() => void`   | Обработчик на активацию radio кнопку  | 

### `UseMenuItemRadioGroupUnionProps<T extends HTMLElement>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `aria-label`  | `string`   | Свойство, добавляющее текстовое имя/назначение элементу, которое может быть прочитан программами чтения с экрана, чтобы обеспечить доступ к информации, которая может быть утрачена из-за ограничений восприятия.  | 
| `aria-labelledby`  | `string`   | Аналогично `aria-label`, позволяет добавить текстовое имя/назначение элементу, однако ссылается на описание с помощью id  | 
| `role`  | `"group"`   | Роль group  | 
| `onKeyDown`  | `KeyboardEventHandler`   | Обработчик на нажатие клавиш  | 

### `UseMenuItemRadioGroup<T extends HTMLElement>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `menuItemRadioGroupProps`  | `UseMenuItemRadioGroupUnionProps<T>`   | Свойства, необходимые для доступности menuItemRadio  | 

## Пример

`useMenuItemRadioGroup` используется для обеспечения веб-доступности меню. 

**MenuRadioGroup.tsx**

```tsx
interface MenuRadioGroupProps {
  activeNode?: TreeNode<TreeItemPayload<MenuTreeElement> | null>
  value?: string
  onChange?: (value: string) => void
}

const MenuRadioGroup = forwardRef<HTMLLegendElement, PropsWithChildren<Omit<HTMLAttributes<HTMLLegendElement>, 'onChange'> & MenuRadioGroupProps>>(({ children, value, activeNode, onChange, ...props }, ref) => {
  const { menuItemRadioGroupProps } = useMenuItemRadioGroup({
    onActivate() {
      onChange?.(activeNode?.payload?.item.element.props.value)
    },
  })

  return (
    <legend {...menuItemRadioGroupProps} className='menuRadioGroup' {...props} ref={ref}>
      {Children.map(children as JSX.Element[], (child) => cloneElement(child, { ...child.props, checked: value === child.props.value }, child.props.children))}
    </legend>
  )
})

MenuRadioGroup.displayName = 'MenuRadioGroup'
```

Также важно учесть, что любую группу в составе Menu необходимо добавить в useMenu

```tsx{2}
const elementToList = useCallback((child: ReactElement): MenuTreeElement => {
  const type = treeNodeTypeResolver({ childElement: [MenuItem, SubmenuTrigger, MenuRadioItem, MenuCheckboxItem, MenuLinkItem], parentElement: Submenu, groupElement: [MenuRadioGroup] })(child)
  return ({ element: child, children: type === 'group' || type === 'parent' ? Children.map(child.props?.children, elementToList) : [], type })
}, [])
const items = Children.map(children, elementToList)
```
