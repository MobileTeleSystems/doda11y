---
outline: deep
---

# useItemTree

**useItemTree** - хук, предоставляющий методы взаимодействия с [Item Tree](/structures/itemTree).

## API

|       |                                                                                   |
| ----: |:----------------------------------------------------------------------------------|
| Type: | `<I extends ListItem = ListItem>(options: UseItemTreeOptions<I>): UseItemTree<I>` |

### `UseItemTreeOptions<I extends TreeItem = TreeItem>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `items`  | `I[]`   | Элементы коллекции  | 
| `prefix`  | `string`   |   | 
| `typeResolver`  | `(item: I) => TreeItemType`   |   | 
| `triggerResolver`  | `(item: I, index: number) => boolean`   |   | 
| `labelResolver`  | `(item: I) => string`   |   | 
| `triggerForResolver`  | `(item: I, treeNode: TreeNode<TreeItemPayload<I, "child" \| "group" \| "parent">>) => string`   |   | 
| `expanded`  | `string[]`   |   | 

### `UseItemTree<I extends ListItem = ListItem>`

| Имя                          | Тип                                                                                                                                                                           | Описание                                                                                                       |
|:-----------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------|
| `tree`                       | `Tree<TreeItemPayload<I, "child" \| "group" \| "parent">>`                                                                                                                    |                                                                                                                | 
| `reachableKeys`              | `Set<string>`                                                                                                                                                                 |                                                                                                                | 
| `isReachableInParents`       | `(key: string) => boolean`                                                                                                                                                    | Метод, определяющий, является ли элемент доступным (достижимым по раскрытости/скрытности родителей) в родителе | 
| `getReachableNodes`          | `() => TreeNode<TreeItemPayload<I, "child" \| "group" \| "parent">>[]`                                                                                                        | Метод получения всех достижимых нод                                                                            | 
| `getTrigger`                 | `(key: string) => TreeNode<TreeItemPayload<I, "child" \| "group" \| "parent">>`                                                                                               | Метод получения триггера родительского элемента по ключу                                                       | 
| `getChildren`                | `(key: string) => TreeNode<TreeItemPayload<I, "child" \| "group" \| "parent">>[]`                                                                                             | Метод получения всех дочерних элементов по ключу                                                               | 
| `getNextNode`                | `(key: string, types?: TreeItemType[], excludedKeys?: string[]) => TreeNode<TreeItemPayload<I, "child" \| "group" \| "parent">>`                                              | Метод получения следующей ноды                                                                                 | 
| `getPrevNode`                | `(key: string, types?: TreeItemType[], excludedKeys?: string[]) => TreeNode<TreeItemPayload<I, "child" \| "group" \| "parent">>`                                              | Метод получения предыдущей ноды                                                                                | 
| `getNextParentNode`          | `(parentKey: string, key: string, types?: TreeItemType[], excludedKeys?: string[]) => TreeNode<TreeItemPayload<I, "child" \| "group" \| "parent">>`                           | Метод получения следующего элемента с тем же родителем, что элемент с соответсвующим переданным ключом         | 
| `getPrevParentNode`          | `(parentKey: string, key: string, types?: TreeItemType[], excludedKeys?: string[]) => TreeNode<TreeItemPayload<I, "child" \| "group" \| "parent">>`                           | Метод получения предыдущего элемента с тем же родителем, что элемент с соответсвующим переданным ключом        | 
| `getFirstNode`               | `(types?: TreeItemType[]) => TreeNode<TreeItemPayload<I, "child" \| "group" \| "parent">>`                                                                                    | Метод получения первой ноды в дереве                                                                           | 
| `getLastNode`                | `(types?: TreeItemType[]) => TreeNode<TreeItemPayload<I, "child" \| "group" \| "parent">>`                                                                                    | Метод получения последней ноды в дереве                                                                        | 
| `getFirstParentNode`         | `(parentKey: string, types?: TreeItemType[]) => TreeNode<TreeItemPayload<I, "child" \| "group" \| "parent">>`                                                                 | Метод получения первой ноды в родительском элементе                                                            | 
| `getLastParentNode`          | `(parentKey: string, types?: TreeItemType[]) => TreeNode<TreeItemPayload<I, "child" \| "group" \| "parent">>`                                                                 | Метод получения последней ноды в родительском элементе                                                         | 
| `getCloseParentByTypes`      | `(key: string, types?: TreeItemType[]) => TreeNode<TreeItemPayload<I, "child" \| "group" \| "parent">>`                                                                       | Метод, позволяющий получить ближайшего к ноде родителя по указанному типу                                      | 
| `getDistantParentByTypes`    | `(key: string, types?: TreeItemType[]) => TreeNode<TreeItemPayload<I, "child" \| "group" \| "parent">>`                                                                       | Метод, позволяющий получить дальнего к ноде родителя по указанному типу                                        | 
| `getNextExtendedNode`        | `(key: string, types?: TreeItemType[], excludedKeys?: string[], includeTrigger?: boolean) => TreeNode<TreeItemPayload<I, "child" \| "group" \| "parent">>`                    | Метод, позволяющий получить следующий достижимый элемент дерева                                                | 
| `getNextParentExtendedNode`  | `(parentKey: string, key: string, types?: TreeItemType[], excludedKeys?: string[], includeTrigger?: boolean) => TreeNode<TreeItemPayload<I, "child" \| "group" \| "parent">>` | Метод, позволяющий получить следующий достижимый элемент в родительском элементе                               | 
| `getPrevExtendedNode`        | `(key: string, types?: TreeItemType[], excludedKeys?: string[], includeTrigger?: boolean) => TreeNode<TreeItemPayload<I, "child" \| "group" \| "parent">>`                    | Метод, позволяющий получить предыдущий достижимый элемент дерева                                               | 
| `getPrevParentExtendedNode`  | `(parentKey: string, key: string, types?: TreeItemType[], excludedKeys?: string[], includeTrigger?: boolean) => TreeNode<TreeItemPayload<I, "child" \| "group" \| "parent">>` | Метод, позволяющий получить предыдущий достижимый элемент в родительском элементе                              | 
| `getFirstExtendedNode`       | `(types?: TreeItemType[], excludedKeys?: string[], includeTrigger?: boolean) => TreeNode<TreeItemPayload<I, "child" \| "group" \| "parent">>`                                 | Метод получения первого достижимого элемента дерева                                                            | 
| `getFirstParentExtendedNode` | `(key: string, types?: TreeItemType[], excludedKeys?: string[], includeTrigger?: boolean) => TreeNode<TreeItemPayload<I, "child" \| "group" \| "parent">>`                    | Метод получения первого элемента в составе родительского                                                       | 
| `getLastExtendedNode`        | `(types?: TreeItemType[], excludedKeys?: string[], includeTrigger?: boolean) => TreeNode<TreeItemPayload<I, "child" \| "group" \| "parent">>`                                 | Метод получения последнего достижимого элемента дерева                                                         | 
| `getLastParentExtendedNode`  | `(key: string, types?: TreeItemType[], excludedKeys?: string[], includeTrigger?: boolean) => TreeNode<TreeItemPayload<I, "child" \| "group" \| "parent">>`                    | Метод получения последнего элемента в составе родительского                                                    | 

## Пример

Паттерн Item Tree используется для реализации многих UI паттернов, таких как Menu, Tree

[Пример Menu](/menu/useMenu.html#пример)

[Пример Tree](/tree/conceptions.html#пример)
