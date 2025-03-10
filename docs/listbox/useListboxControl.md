---
outline: deep
---

# useListboxControl

**useListboxControl** - хук, предоставляющий свойства управления для Listbox (обработчики, отфильтрованный список).

## API

|       |                                                                                              |
| ----: |:---------------------------------------------------------------------------------------------|
| Type: | `<T extends Record<string, never>>(options: UseListboxControlOptions<T>): UseListboxControl` |

### `UseListboxControlOptions<I extends ListItem = ListItem>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `list`  | `ItemList<I, ListItemPayload<I>>`   | Список элементов, отображаемых в компоненте  | 
| `orientation`  | `Orientation`   | Ориентация списка. По умолчанию - `vertical`  | 
| `selection`  | `SelectionControl`   | Selection методы для управления выбором  | 
| `active`  | `string`   | Свойство, обозначающее активный элемент  | 
| `changeActive`  | `(id: string) => void`   | Метод, изменяющий активный элемент  | 
| `changeFocus`  | `(id: string) => void`   | Метод, изменяющий текущий сфокусированный элемент  | 

### `UseListboxControl`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `onKeyDown`  | `KeyboardEventHandler`   | Обработчик на нажатие клавиш  | 
| `onFocus`  | `FocusEventHandler`   | Обработчик на focus  | 
