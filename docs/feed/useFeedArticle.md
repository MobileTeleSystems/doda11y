---
outline: deep
---

# useFeedArticle

**useFeedArticle** - хук, предоставляющий доступность для дочерних элементов Feed.

## API

|       |                                                                              |
| ----: |:-----------------------------------------------------------------------------|
| Type: | `<T extends HTMLElement>(options: UseFeedArticleOptions): UseFeedArticle<T>` |

### `UseFeedArticleOptions`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `withSemanticRole`  | `boolean`   | Признак, использовать ли семантическую роль. В случае, если используется семантический тег (например `<button>` или `<article>`, лучше передать `false`)  | 
| `setSize`  | `number`   | Размер коллекции, частью которой является элемент option  | 
| `posInSet`  | `number`   | Позиция элемента в коллекции  | 
| `description`  | `string`   | Свойство, позволяющее добавить текстовое описание (например, его предназначение) к элементу, которое может быть прочитан программами чтения с экрана, чтобы обеспечить доступ к информации, которая может быть утрачена из-за ограничений восприятия.  | 
| `describedBy`  | `string`   | Аналогично `aria-description`, позволяет добавить описание (например, его предназначение) к элементу, однако ссылается на описание с помощью id  | 
| `label`  | `string`   | Свойство, позволяющее добавить текстовое имя/назначение элементу, которое может быть прочитан программами чтения с экрана, чтобы обеспечить доступ к информации, которая может быть утрачена из-за ограничений восприятия.  | 
| `labelledBy`  | `string`   | Аналогично `aria-label`, позволяет добавить имя/назначение к элементу, однако ссылается на описание с помощью id  | 
| `changeActive`  | `(key: string) => void`   | Обработчик на изменение активного элемента в списке  | 
| `key`  | `string`   | Ключ элемента в списке  | 

### `UseFeedArticleUnionFeedProps<T extends HTMLElement>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `role`  | `"article"`   | Роль feed  | 
| `tabIndex`  | `0`   | Свойство, означающее, должен ли элемент участвовать в последовательности с помощью клавиатуры и в каком порядке  | 
| `aria-posinset`  | `number`   | Свойство aria, определяющее позицию элемента в коллекции  | 
| `aria-setsize`  | `number`   | Свойство aria, определяющее количество элементов в коллекции  | 
| `onFocus`  | `FocusEventHandler`   | Обработчик на нажатие клавиш  | 

### `UseFeedArticle<T extends HTMLElement>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `feedArticleProps`  | `UseFeedArticleUnionFeedProps<T>`   | Свойства, необходимые для доступности Feed  | 

## Пример

`useFeedArticle` используется для обеспечения веб-доступности элементов ленты. В общем случае, если элемент сверстан с правильной семантической ролью - `article`, рекомендуется передавать флаг `withSemanticRole = false`

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
