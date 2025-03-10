---
outline: deep
---

# useFeedArticleControl

**useFeedArticleControl** - хук, предоставляющий свойства управления для доступности дочерних элементов Feed.

## API

|       |                                                                                        |
| ----: |:---------------------------------------------------------------------------------------|
| Type: | `(options: UseFeedArticleControlOptions): UseFeedArticleControl` |

### `UseFeedArticleControlOptions`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `changeActive`  | `(key: string) => void`   | Обработчик на изменение активного элемента в списке  | 
| `key`  | `string`   | Ключ элемента в списке  | 

### `UseFeedArticleControl`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `onFocus`  | `FocusEventHandler`   | Обработчик на нажатие клавиш  | 

