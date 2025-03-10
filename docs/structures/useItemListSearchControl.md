---
outline: deep
---

# useItemListSearchControl

**useItemListSearchControl** - хук, предоставляющий методы поиска в [Item List](/structures/itemList).

## API

|       |                                                                                   |
| ----: |:----------------------------------------------------------------------------------|
| Type: | `<I extends ListItem = ListItem>(list: ItemList<I>, options?: UseItemListSearchControlOptions<I>): UseItemListSearchControl` |

### `UseItemListSearchControlOptions<I>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `onFound`  | `(key: LinkedListNode<ListItemPayload<I>>) => void`   | Обработчик на случай, когда найден элемент коллекции  | 

### `UseItemListSearchControl`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `onKeyDown`  | `KeyboardEventHandler`   | Обработчик на нажатие клавиш  | 
