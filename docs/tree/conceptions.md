---
outline: deep
---

# Tree

![An image](/tree.png)

**Tree** - элемент, отображающий иерархический список. Любой элемент в иерархии может иметь дочерние элементы, а также свернут/развернут. 

[W3C ARIA Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/treeview/)

## Пример

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

  useEffect(() => {
    if (activeDescendant) activeDescendantRef?.focus()
  }, [activeDescendant])

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

## Особенности

- Поддержка необходимых `role` для элементов
- Поддержка необходимых `aria` аттрибутов для доступности
