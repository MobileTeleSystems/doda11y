---
outline: deep
---

# Group

![An image](/group.png)

**Group** - элемент, содержащий в себе элементы списка, объединенные по общему признаку.

## A11Y

Поскольку `Group` не имеет определенного аналога в HTML, он, в основном, представлен тегами `<ul>` и `<div>` с ролью `group`, `<fieldset>`, `<optgroup>`, `<details>` - имеющему такую роль по умолчанию.

Для обеспечения его доступности необходимо представить описание группы, этого можно добиться, например, с помощью использования `aria-label`.

## Пример

Представим, что нам необходимо реализовать группу для `<Listbox>`. 

Для реализации элемента группы, соответствующей условиям доступности, необходимо использовать хук `useGroupProps()`

**ListboxGroup.tsx**

```tsx
export const ListGroup = forwardRef<HTMLDivElement, PropsWithChildren<TListGroupProps>>(( { childNodes, focusedKey, selectedKeys, label }, ref) => {
        const { groupProps } = useGroup({ label })
    
        return (
            <div {...groupProps}>
                {childNodes?.map((item) =>
                    cloneElement(item.node, {
                        ...item.props,
                        id: item.key,
                        'data-focused': focusedKey === item.key,
                        'aria-selected': selectedKeys?.includes(item.key),
                    })
                )}
            </div>
        )
    }
)
```

## Особенности

- Поддержка необходимых `role` для элементов
- Поддержка необходимых `aria` аттрибутов для доступности
