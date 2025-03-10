---
outline: deep
---

# useFeedControl

**useFeedControl** - хук, предоставляющий свойства управления для Feed (обработчики).

## API

|       |                                                    |
| ----: |:---------------------------------------------------|
| Type: | `(options: UseFeedControlOptions): UseFeedControl` |

### `UseFeedControlOptions<I extends ListItem = ListItem>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `list`  | `ItemList<I, ListItemPayload<I>>`   | Список элементов, отображаемых в компоненте  | 
| `active`  | `string`   | Текущий сфокусированный ключ из коллекции  | 
| `changeActive`  | `(key: string) => void`   | Обработчик на изменение активного элемента в списке  | 
| `changeFocus`  | `(key: string) => void`   | Метод, изменяющий текущий сфокусированный элемент  | 

### `UseFeedControl`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `onKeyDown`  | `KeyboardEventHandler`   | Обработчик на нажатие клавиш  | 
