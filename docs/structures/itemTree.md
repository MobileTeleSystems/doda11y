---
outline: deep
---

# ItemTree

**Item Tree** - структура данных, представляющая паттерн [дерева](/structures/tree), но расширяющая его возможности.

## API

### `ItemTree`

`class ItemTree<I extends TreeItem = TreeItem, P extends TreeItemPayload<I, 'parent' | 'child' | 'group'> = TreeItemPayload<I, 'parent' | 'child' | 'group'>>`

`Generic <I>` - тип item для элемента
`Generic <P>` - тип payload для элемента

`constructor(items: I[], options: ItemTreeOptions<I>, callback?: ItemTreeCallback<I, P>)`

**Параметры конструктора**

| Имя	        | Type	                    | Описание	                                                |
|:------------|:-------------------------|:---------------------------------------------------------|
| `items`	    | `I[]`                    | 	  Коллекция item элементов                              |
| `options`	  | `ItemTreeOptions<I>`     | 	  Параметры инициализации дерева                        |
| `callback`	 | `ItemTreeCallback<I, P>` | 	  Функция, вызываемая при инициализации элемента дерева |

**Свойства класса**

| Имя    | Тип                   | Описание         |
|:-------|:----------------------|:-----------------|
| `tree` | `Tree<P \| null>`     | Дерево           | 
| `reachableKeys` | `Set<TreeItemKey>` | Достижимые ключи | 

**Методы класса**

| Имя                          | Тип                                                                                                                                                                                                                     | Описание                                                                                                       |
|:-----------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------|
| `isReachableInParents`       | `(key: TreeItemKey) => boolean`                                                                                                                                                                                         | Метод, определяющий, является ли элемент доступным (достижимым по раскрытости/скрытности родителей) в родителе | 
| `getReachableNodes`          | `(key: string) => TreeNode<P> \| null`                                                                                                                                                                                  | Метод получения всех достижимых нод                                                                            | 
| `getTrigger`                 | `(key: TreeItemKey) => TreeNode<P \| null> \| null`                                                                                                                                                                     | Метод получения триггера родительского элемента по ключу                                                       | 
| `getChildren`                | `(key: TreeItemKey) => TreeNode<TreeItemPayload<I, 'parent' \| 'group' \| 'child'> \| null>[]`                                                                                                                          | Метод получения всех дочерних элементов по ключу                                                               | 
| `getNextNode`                | `(key: TreeItemKey, types: TreeItemType[] = ['child'], excludedKeys?: TreeItemKey[]) => TreeNode<TreeItemPayload<I, 'parent' \| 'group' \| 'child'> \| null> \| null`                                                   | Метод получения следующей ноды                                                                                 | 
| `getPrevNode`                | `(key: TreeItemKey, types: TreeItemType[] = ['child'], excludedKeys?: TreeItemKey[]) => TreeNode<TreeItemPayload<I, 'parent' \| 'group' \| 'child'> \| null> \| null`                                                   | Метод получения предыдущей ноды                                                                                | 
| `getNextParentNode`          | `(parentKey: TreeItemKey, key: TreeItemKey, types: TreeItemType[] = ['child'], excludedKeys?: TreeItemKey[]) => TreeNode<TreeItemPayload<I, 'parent' \| 'group' \| 'child'> \| null> \| null`                           | Метод получения следующего элемента с тем же родителем, что элемент с соответсвующим переданным ключом         | 
| `getPrevParentNode`          | `(parentKey: TreeItemKey, key: TreeItemKey, types: TreeItemType[] = ['child'], excludedKeys?: TreeItemKey[]) => TreeNode<TreeItemPayload<I, 'parent' \| 'group' \| 'child'> \| null> \| null`                           | Метод получения предыдущего элемента с тем же родителем, что элемент с соответсвующим переданным ключом        | 
| `getFirstNode`               | `(types: TreeItemType[] = ['child']) => TreeNode<TreeItemPayload<I, 'parent' \| 'group' \| 'child'> \| null> \| null`                                                                                                   | Метод получения первой ноды в дереве                                                                           | 
| `getLastNode`                | `(types: TreeItemType[] = ['child']) => TreeNode<TreeItemPayload<I, 'parent' \| 'group' \| 'child'> \| null> \| null`                                                                                                   | Метод получения последней ноды в дереве                                                                        | 
| `getFirstParentNode`         | `(parentKey: TreeItemKey, types: TreeItemType[] = ['child']) => TreeNode<TreeItemPayload<I, 'parent' \| 'group' \| 'child'> \| null> \| null`                                                                           | Метод получения первой ноды в родительском элементе                                                            | 
| `getLastParentNode`          | `(parentKey: TreeItemKey, types: TreeItemType[] = ['child']) => TreeNode<TreeItemPayload<I, 'parent' \| 'group' \| 'child'> \| null> \| null`                                                                           | Метод получения последней ноды в родительском элементе                                                         | 
| `getCloseParentByTypes`      | `(key: TreeItemKey, types: TreeItemType[] = ['parent']) => TreeNode<TreeItemPayload<I, 'parent' \| 'group' \| 'child'> \| null> \| null`                                                                                | Метод, позволяющий получить ближайшего к ноде родителя по указанному типу                                      | 
| `getDistantParentByTypes`    | `(key: TreeItemKey, types: TreeItemType[] = ['parent']) => TreeNode<TreeItemPayload<I, 'parent' \| 'group' \| 'child'> \| null> \| null`                                                                                | Метод, позволяющий получить дальнего к ноде родителя по указанному типу                                        | 
| `getNextExtendedNode`        | `(key: TreeItemKey, types: TreeItemType[] = ['child'], excludedKeys: TreeItemKey[] = [], includeTrigger: boolean = true) => TreeNode<TreeItemPayload<I, 'parent' \| 'group' \| 'child'> \| null> \| null`               | Метод, позволяющий получить следующий достижимый элемент дерева                                                | 
| `getNextParentExtendedNode`  | `(parentKey: string, key: string, types: TreeItemType[] = ['child'], excludedKeys: TreeItemKey[] = [], includeTrigger: boolean = true) => TreeNode<TreeItemPayload<I, 'parent' \| 'group' \| 'child'> \| null> \| null` | Метод, позволяющий получить следующий достижимый элемент в родительском элементе                               | 
| `getPrevExtendedNode`        | `(key: TreeItemKey, types: TreeItemType[] = ['child'], excludedKeys: TreeItemKey[] = [], includeTrigger: boolean = true) => TreeNode<TreeItemPayload<I, 'parent' \| 'group' \| 'child'> \| null> \| null`               | Метод, позволяющий получить предыдущий достижимый элемент дерева                                               | 
| `getPrevParentExtendedNode`  | `(parentKey: string, key: string, types: TreeItemType[] = ['child'], excludedKeys: TreeItemKey[] = [], includeTrigger: boolean = true) => TreeNode<TreeItemPayload<I, 'parent' \| 'group' \| 'child'> \| null> \| null` | Метод, позволяющий получить предыдущий достижимый элемент в родительском элементе                              | 
| `getFirstExtendedNode`       | `(types?: TreeItemType[], excludedKeys: TreeItemKey[] = [], includeTrigger: boolean = true) => TreeNode<TreeItemPayload<I, 'parent' \| 'group' \| 'child'> \| null> \| null`                                            | Метод, позволяющий получить предыдущий достижимый элемент в родительском элементе                              | 
| `getFirstParentExtendedNode` | `(key: string, types: TreeItemType[] = ['child'], excludedKeys: TreeItemKey[] = [], includeTrigger = true) => TreeNode<TreeItemPayload<I, 'parent' \| 'group' \| 'child'> \| null> \| null`                             | Метод получения первого элемента в составе родительского                                                       | 
| `getLastExtendedNode`        | `(types?: TreeItemType[], excludedKeys: TreeItemKey[] = [], includeTrigger: boolean = true) => TreeNode<TreeItemPayload<I, 'parent' \| 'group' \| 'child'> \| null> \| null`                                            | Метод получения последнего достижимого элемента дерева                                                         | 
| `getLastParentExtendedNode`  | `(key: string, types: TreeItemType[] = ['child'], excludedKeys: TreeItemKey[] = [], includeTrigger = true) => TreeNode<TreeItemPayload<I, 'parent' \| 'group' \| 'child'> \| null> \| null`                             | Метод получения последнего элемента в составе родительского                                                    | 
