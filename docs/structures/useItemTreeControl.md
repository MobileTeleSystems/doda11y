---
outline: deep
---

# useItemTreeControl

**useItemTreeControl** - хук, предоставляющий методы управления деревом.

## API

|       |                                                                                                              |
| ----: |:-------------------------------------------------------------------------------------------------------------|
| Type: | `<I extends TreeItem = TreeItem>(tree: ItemTree<I>, options: UseItemTreeControlOptions): UseItemTreeControl` |

### `UseItemTreeControlOptions<I extends TreeItem = TreeItem>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `active`  | `string`   | Свойство, обозначающее активный элемент в коллекции  | 
| `expanded`  | `Set<string>`   | Свойство, развернутые узлы дерева  | 
| `orientation`  | `Orientation`   | Свойство, определяющее направление меню. По умолчанию - 'vertical'  | 
| `changeFocus`  | `(active: string) => void`   | Метод, изменяющий текущий сфокусированный элемент списка  | 
| `changeActive`  | `(active: string) => void`   | Метод, изменяющий активный элемент списка  | 
| `hide`  | `(key: string) => void`   | Метод, закрывающий узел дерева  | 
| `expand`  | `(key: string) => void`   | Метод, раскрывающий узел дерева  | 
| `onActivate`  | `(node: TreeNode<TreeItemPayload<I>>) => void`   | Метод, вызываемый на активацию элемента  | 

### `UseItemTreeControl`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `onKeyDown`  | `KeyboardEventHandler`   | Обработчик на нажатие клавиш  | 
