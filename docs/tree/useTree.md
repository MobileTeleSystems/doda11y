---
outline: deep
---

# useTree

**useTree** - хук, предоставляющий доступность дереву.

## API

|       |                                                  |
| ----: |:-------------------------------------------------|
| Type: | `<T extends HTMLElement, I extends TreeItem = TreeItem>(options: : UseTreeOptions<I>): UseTree` |

### `UseTreeOptions<I extends TreeItem>`

| Имя               | Тип                        | Описание    |
|:-------------------|:---------------------------|:-----------|
| `tree`  | `SelectableItemTree<I>`    | Экземпляр класса SelectableNodeTree  | 
| `selection`  | `SelectionControl`         | Selection методы для управления выбором  | 
| `active`  | `string`                   | Свойство, обозначающее активный элемент  | 
| `expanded`  | `Set<string>`              | Свойство, определяющее "раскрытые" ключи  | 
| `changeFocus`  | `(id: string) => void`     | Метод, изменяющий текущий сфокусированный элемент  | 
| `changeActive`  | `(active: string) => void` | Метод на изменение активного элемента в дереве  | 
| `onExpand`  | `(key: string) => void`    | Метод на раскрытие родительского элемента (поддерева)  | 
| `onHide`  | `(key: string) => void`    | Метод на закрытие родительского элемента (поддерева)  | 
| `onHideAll`  | `() => void`               | Метод на закрытие всех родительских элементов  | 
| `onToggleExpanded`  | `(key: string) => void`    | Метод на изменение состояние раскрытия родительского элемента (поддерева)  | 
| `multiSelectable`  | `boolean`                  | Признак, определяющий, доступен ли множественный выбор. По умолчанию - `false`  | 
| `withSemanticRole`  | `boolean`                  | Признак, использовать ли семантическую роль. В случае, если используется семантический тег (например `<button>` или `<article>`, лучше передать `false`)  | 
| `orientation`  | `Orientation`              | Свойство, обозначающее ориентацию дочерних элементов. По умолчанию - `vertical`  | 
| `label`  | `string`                   | Свойство, позволяющее добавить текстовое имя/назначение элементу, которое может быть прочитан программами чтения с экрана, чтобы обеспечить доступ к информации, которая может быть утрачена из-за ограничений восприятия.  | 
| `labelledBy`  | `string`                   | Аналогично `aria-label`, позволяет добавить имя/назначение к элементу, однако ссылается на описание с помощью id  | 

### `UseTreeUnionProps<T extends HTMLElement>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `role`  | `"tree"`   | Роль tree  | 
| `aria-multiselectable`  | `Booleanish`   | Признак, определяющий, доступен ли множественный выбор для дерева. По умолчанию - `false`  | 
| `aria-orientation`  | `"vertical" \| "horizontal"`   | Свойство, определяющее ориентацию элемента. По умолчанию - `vertical`  | 
| `tabIndex`  | `0 \| -1`   | Свойство, означающее, должен ли элемент участвовать в последовательности с помощью клавиатуры и в каком порядке  | 
| `aria-label`  | `string`   | Свойство, добавляющее текстовое имя/назначение элементу, которое может быть прочитан программами чтения с экрана, чтобы обеспечить доступ к информации, которая может быть утрачена из-за ограничений восприятия.  | 
| `aria-labelledby`  | `string`   | Аналогично `aria-label`, позволяет добавить текстовое имя/назначение элементу, однако ссылается на описание с помощью id  | 

### `UseTree<T extends HTMLElement>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `treeProps`  | `TreeProps<T>`   | Свойства, необходимые для доступности tree элемента  | 

## Пример

`useTree` используется для обеспечения веб-доступности дерева. 

**Tree.tsx**

```tsx
interface TreeProps {
  tree?: any
  renderItem: (node: TreeNode<SelectableTreeNodePayload | null>, callbackRef: (key: string, value: HTMLElement | null) => void, options: { extended: Set<string>, toggleExtended: (key: string) => void, expand: (key: string) => void, hide: (key: string) => void, active?: string, selectable: boolean, level?: number }) => ReactElement
  mode?: 'single' | 'multiple'
}

const Tree: FC<PropsWithChildren<TreeProps>> = ({ renderItem, tree }) => {
  const { expand, expanded, toggle, hide } = useExpanded()

  const selectableNodeTree = useSelectableNodeTree<{ children?: any, type: TreeItemType, label: string, selectable?: boolean, isTrigger?: boolean }>({
    items: tree,
    typeResolver: (item) => item.type,
    expanded: [...expanded],
    triggerResolver: (item) => item.isTrigger ?? false,
    selectableResolver: (item) => item?.selectable ?? false,
    triggerForResolver: (_, node) => node.parent?.key,
    labelResolver: (item) => item.label
  })

  const { activeDescendant, setActiveDescendantId } = useActiveDescendant()

  const selection = useSelection({
    selectionMode: SelectionMode.MULTIPLE,
    keys: Array.from(selectableNodeTree.reachableSelectableKeys)
  })

  const { set, get } = useRefMap<string, HTMLElement | null>()

  const { treeProps } = useTree({
    tree: selectableNodeTree,
    selection,
    activeDescendantRef: activeDescendant ? get(activeDescendant) : undefined,
    activeDescendant,
    changeActiveDescendant: setActiveDescendantId,
    multiSelectable: false,
    expanded,
    onHide: hide,
    onToggleExpanded: toggle,
    onExpand: expand,
  })

  return (
    <ul tabIndex={0} {...treeProps}>
      {selectableNodeTree.tree.root?.children.map((node) => renderItem(node, set, { extended: expanded, toggleExtended: toggle, active: activeDescendant, hide, expand, selectable: node.payload?.selectable ?? false, level: node.level }))}
    </ul>
  )
}
```

**Page.tsx**

```tsx
export const Page: React.FC = () => {
  const renderItem: TreeProps['renderItem'] = useCallback(({}, callbackRef, { extended, toggleExtended, active, expand, hide, selectable, level }) => {
    if (payload?.type === 'parent') {
      return (
        <SubTree level={level}  key={key} data-key={key} ref={(el) => callbackRef(key, el)} isOpen={extended.has(key)}>
          {children.map((child) => renderItem(child, callbackRef, { extended, toggleExtended, active, hide, expand, selectable: child.payload?.selectable ?? false, level: child.level }))}
        </SubTree>
      )
    }

    // Проверка на то, что элемент - триггер
    if (payload?.isTrigger) {
      return (
        <SubTreeTrigger focused={active === key} level={level ? level - 1 : undefined} onClick={() => toggleExtended(payload?.triggerFor ?? '')} key={key} data-key={key} ref={(el) => callbackRef(key, el)}>
          {payload?.label}
        </SubTreeTrigger>
      )
    }

    return (
      <TreeItem level={level} style={selectable ? { background: 'blue' } : {}} focused={active === key} key={key} data-key={key} ref={(el) => callbackRef(key, el)}>
        {payload?.label}
      </TreeItem>
    )
  }, [])

  const tree = [
    { type: 'child', label: 'Item 1', },
    { type: 'child', label: 'Item 2', selectable: true },
    { type: 'parent', label: 'Item 3 (trigger)', children: [
        { type: 'child', label: 'Item 3 (trigger)', isTrigger: true },
        { type: 'child', label: 'Item 3.1', selectable: true },
        { type: 'child', label: 'Item 3.2' },
        { type: 'child', label: 'Item 3.3' },
        { type: 'parent', children: [
            { type: 'child', label: 'Item 4.1 (trigger)', isTrigger: true },
            { type: 'child', label: 'Item 4.1.1' },
            { type: 'child', label: 'Item 4.1.2' },
          ]
        },
      ]
    },
    { type: 'parent', label: 'Item 4 (trigger)', children: [
        { type: 'child', label: 'Item 4 (trigger)', isTrigger: true },
        { type: 'child', label: 'Item 3.1', selectable: true },
        { type: 'child', label: 'Item 3.2' },
        { type: 'child', label: 'Item 3.3' },
        { type: 'parent', label: 'Item 4.1 (trigger)', children: [
            { type: 'child', label: 'Item 4.1 (trigger)', isTrigger: true },
            { type: 'child', label: 'Item 4.1.1' },
            { type: 'child', label: 'Item 4.1.2' },
          ]
        },
      ]
    },
  ]

  return (
    <Tree renderItem={renderItem} tree={tree} />
  )
}
```
