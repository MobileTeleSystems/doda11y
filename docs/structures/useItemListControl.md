---
outline: deep
---

# useItemListControl

**useItemListControl** - хук, предоставляющий методы управления деревом.

## API

|       |                                                                                                              |
| ----: |:-------------------------------------------------------------------------------------------------------------|
| Type: | `<I extends ListItem = ListItem>(list: ItemList<I>, options?: UseItemListControlOptions): UseItemListControl` |

### `UseItemListControlOptions`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `active`  | `string`   | Свойство, обозначающее активный элемент в списке  | 
| `changeActive`  | `(active: string) => void`   | Метод, изменяющий активный элемент списка  | 
| `changeFocus`  | `(active: string) => void`   | Метод, изменяющий текущий сфокусированный элемент списка  | 
| `orientation`  | `Orientation`   | Ориентация списка. По умолчанию - `vertical`  | 
| `loop`  | `boolean`   | Признак, нужно ли повторять переход по списку по циклу  | 

### `UseItemListControl`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `onKeyDown`  | `KeyboardEventHandler`   | Обработчик нажатия на клавиши  | 
