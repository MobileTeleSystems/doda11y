---
outline: deep
---

# Feed

![An image](/feed.png)

**Feed** - интерактивный элемент, позволяющий пользователю по мере прокручивания элемента динамически подгружать новые данные.   

[W3C ARIA Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/feed/)

## A11Y

Для реализации Feed рекомендуется использовать компонент с бесконечной подгрузкой контента

## Пример

Реализация доступного компонента Feed достигается за счет использования нескольких хуков: [`useCarousel`](/feed/useFeed) - для самой ленты, [`useTreeList`](/core/useList) - для создания списка из React элементов, [`useRefMap`](/core/useRefMap) - для сопоставления элементов коллекции с ссылками, [`useCarouselSlide`](/feed/useFeedArticle) - для обеспечения доступности элементов бесконечной ленты.

**FeedContainer.tsx**

```tsx
const Feed: FC<{ children: ReactElement[] }> = ({ children }) => {
  const isLoading = false
  const { activeDescendant: active, setActiveDescendantId: changeActive } = useActiveDescendant()
  const { get, set } = useRefMap<string, HTMLElement | null>()

  const list = useItemList({
    typeResolver: listNodeTypeResolver({ itemElement: FeedElement }),
    items: children,
    keyResolver: (item) => item.props.listKey || ''
  })

  const { feedProps } = useFeed({
    active,
    list,
    changeActive,
    changeFocus(key) {
      if (!key) return
      get(key)?.focus()
    },
    isBusy: isLoading
  })

  /**
   * Здесь логика для бесконечной подгрузки
   * элементов может быть реализована любым
   * доступным способом
   */

  return (
    <div {...feedProps}>
      {Children.map(children, (child) => {
        if (child.type === FeedElement) return <FeedElement {...child.props} ref={(el) => set(child.props.listKey || '', el)} onChangeActive={changeActive} />

        return child
      })}
    </div>
  )
}
```

**FeedItem.tsx**

```tsx{3}
const FeedElement = forwardRef<HTMLDivElement, PropsWithChildren<{ pos: number, listKey: string, onChangeActive?: (key: string | undefined) => void }>>(({ pos, listKey, onChangeActive, ...props }, ref) => {
	const changeActive = useCallback((key: string | undefined) => {
		onChangeActive?.(key)
	}, [onChangeActive])

	const { feedArticleProps } = useFeedArticle({ posInSet: pos ?? 0, setSize: -1, key: listKey, changeActive })

	return (
		<div {...feedArticleProps} ref={ref} {...props}>
      Hello from feed!
		</div>
	)
})
```


## Особенности

- Поддержка необходимых `role` для элементов
- Поддержка необходимых `aria` аттрибутов для доступности
- Необходимое управление с помощью клавиатуры
