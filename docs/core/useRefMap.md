---
outline: deep
---

# useRefMap

**useRefMap** - хук связывания элементов коллекции с их ссылками.

## API

### `UseRefMap<K, V>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `set`  | `(key: K, value: V) => void`   |   | 
| `get`  | `(key: K) => V`   |   | 
| `map`  | `Map<K, V>`   |   | 

## Пример

`useRefMap` используется для связывания ссылок. Например, в компоненте Feed.

В данном случае мы используем его, чтобы связать ключи коллекции List со ссылками на соответствующие DOM элементы.

**Feed.tsx**

```tsx{5,7,22,31}
const Feed: FC<PropsWithChildren> = ({ children }) => {
    const list = useTreeList({ children, nodeTypeResolver: nodeTypeResolver({ itemElement: SbpPaymentFeedElement, groupElement: FeedGroup })})
    const [focusedKey, setFocusedKey] = useState('')

    const refMap = useRefMap<CollectionKey, HTMLElement>()

    const { onKeyDown } = useCarousel({ refMap, list, focusedKey, isBusy: isLoading })

    /**
     * Здесь логика для бесконечной подгрузки
     * элементов может быть реализована любым
     * доступным способом
     */

    return (
        <div onKeyDown={onKeyDown}>
            {[...list].map((item) => (
                item.type === 'item'
                    ? cloneElement(item.node, {
                        ...item.props,
                        id: item.key,
                        ref: (el: HTMLElement) => refMap.set(item.key, el),
                        onFocus: setFocusedKey,
                    })
                    : cloneElement(item.node, {
                        ...item.props,
                    }, item.childNodes?.map((item) =>
                        cloneElement(item.node, {
                            ...item.props,
                            id: item.key,
                            ref: (el: HTMLElement) => refMap.set(item.key, el),
                            onFocus: setFocusedKey,
                        })))
            ))}
        </div>
    )
}
```
