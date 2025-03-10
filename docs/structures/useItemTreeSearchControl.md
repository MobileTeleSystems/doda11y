---
outline: deep
---

# useItemTreeSearchControl

**useItemTreeSearchControl** - хук, предоставляющий методы поиска в [Item Tree](/structures/itemTree).

## API

|       |                                                                                   |
| ----: |:----------------------------------------------------------------------------------|
| Type: | `<I extends TreeItem = TreeItem>(tree: ItemTree<I>, options?: UseItemTreeSearchControlOptions<I>): UseItemTreeSearchControl` |

### `UseItemTreeSearchControlOptions<I>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `onFound`  | `(node: TreeNode<TreeItemPayload<I, "child" \| "group" \| "parent">>) => void`   | Обработчик на случай, когда найден элемент коллекции  | 
| `ignoreCase`  | `boolean`   | Игнорировать ли кейс написания при поиске  | 

### `UseItemTreeSearchControl`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `onKeyDown`  | `KeyboardEventHandler`   | Обработчик на нажатие клавиш  |
