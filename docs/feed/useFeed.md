---
outline: deep
---

# useFeed

**useFeed** - хук, предоставляющий доступность для Feed.

## API

|       |                                                                                                                |
| ----: |:---------------------------------------------------------------------------------------------------------------|
| Type: | `<I extends ListItem = ListItem, T extends HTMLElement = HTMLElement>(options: UseFeedOptions<I>): UseFeed<T>` |

### `UseFeedOptions<I extends ListItem = ListItem>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `isBusy`  | `boolean`   | Признак, определяющий, изменяется ли в данный момент компонент  | 
| `withSemanticRole`  | `boolean`   | Признак, использовать ли семантическую роль. В случае, если используется семантический тег (например `<button>` или `<article>`, лучше передать `false`)  | 
| `label`  | `string`   | Свойство, позволяющее добавить текстовое имя/назначение элементу, которое может быть прочитан программами чтения с экрана, чтобы обеспечить доступ к информации, которая может быть утрачена из-за ограничений восприятия.  | 
| `labelledBy`  | `string`   | Аналогично `aria-label`, позволяет добавить имя/назначение к элементу, однако ссылается на описание с помощью id  | 
| `list`  | `ItemList<I, ListItemPayload<I>>`   | Список элементов, отображаемых в компоненте  | 
| `active`  | `string`   | Текущий сфокусированный ключ из коллекции  | 
| `changeActive`  | `(key: string) => void`   | Обработчик на изменение активного элемента в списке  | 
| `changeFocus`  | `(key: string) => void`   | Метод, изменяющий текущий сфокусированный элемент  | 

### `UseFeedUnionFeedProps<T extends HTMLElement>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `role`  | `"feed"`   | Роль feed  | 
| `aria-busy`  | `Booleanish`   | Признак, обозначающий, подгружает ли элемент контент в данный момент  | 
| `aria-label`  | `string`   | Свойство, добавляющее текстовое имя/назначение элементу, которое может быть прочитан программами чтения с экрана, чтобы обеспечить доступ к информации, которая может быть утрачена из-за ограничений восприятия.  | 
| `aria-labelledby`  | `string`   | Аналогично `aria-label`, позволяет добавить текстовое имя/назначение элементу, однако ссылается на описание с помощью id  | 
| `onKeyDown`  | `KeyboardEventHandler`   | Обработчик на нажатие клавиш  | 

### `UseFeed<T extends HTMLElement>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `feedProps`  | `UseFeedUnionFeedProps<T>`   | Свойства, необходимые для доступности Feed  | 

## Пример

`useFeed` используется для обеспечения веб-доступности `Feed`.

**Feed.tsx**

```tsx{7}
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
