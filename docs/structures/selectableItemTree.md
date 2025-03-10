---
outline: deep
---

# Selectable Item Tree

**Selectable Item Tree** - структура данных, представляющая паттерн [Item Tree](/structures/itemTree), но расширяющая его возможности, в частности, позволяющая работать с элемента выбора в дереве.

## API

### `SelectableItemTree`

`class SelectableItemTree<I extends TreeItem = TreeItem> extends ItemTree<I, SelectableTreeItemPayload<I>>`

`Generic <I>` - тип item для элемента

`constructor(items: I[], options: ItemTreeOptions<I>, callback?: ItemTreeCallback<I, P>)`

**Параметры конструктора**

| Имя	        | Type	                    | Описание	                                                |
|:------------|:-------------------------|:---------------------------------------------------------|
| `items`	    | `I[]`                    | 	  Коллекция item элементов                              |
| `options`	  | `SelectableItemTreeOptions<I>`     | 	  Параметры инициализации дерева                        |
| `callback`	 | `SelectableItemTreeCallback<I, SelectableTreeItemPayload<I>>` | 	  Функция, вызываемая при инициализации элемента дерева |

**Свойства класса**

Класс реализует все свойства класса [ItemTree](/structures/itemTree), а также

| Имя    | Тип                   | Описание                               |
|:-------|:----------------------|:---------------------------------------|
| `selectableKeys` | `Set<TreeItemKey>`     | Доступные для выбора ключи             | 
| `reachableSelectableKeys` | `Set<TreeItemKey>` | Достижимые, доступные для выбора ключи | 

**Методы класса**

Класс реализует все методы класса [ItemTree](/structures/itemTree), а также

| Имя                             | Тип                                                                                                                                                                                                                             | Описание                                                                                                |
|:--------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------|
| `getNextSelectableExtendedNode` | `(key: TreeItemKey, types?: TreeItemType[], excludedKeys: TreeItemKey[] = [], includeTrigger = true) => TreeNode<SelectableTreeItemPayload<I> \| null> \| null`                                                                 | Метод получения следующего выбираемого (доступного для выбора) элемента дерева                          | 
| `getPrevSelectableExtendedNode` | `(key: TreeItemKey, types?: TreeItemType[], excludedKeys: TreeItemKey[] = [], includeTrigger = true) => TreeNode<SelectableTreeItemPayload<I> \| null> \| null`                                                                 | Метод получения предыдущего выбираемого (доступного для выбора) элемента дерева                        | 
| `getFirstSelectableExtendedNode` | `(key: TreeItemKey, types?: TreeItemType[], excludedKeys: TreeItemKey[] = [], includeTrigger = true) => TreeNode<SelectableTreeItemPayload<I> \| null> \| null`                                                                 | Метод получения первого выбираемого (доступного для выбора) элемента дерева                        | 
| `getLastSelectableExtendedNode` | `(key: TreeItemKey, types?: TreeItemType[], excludedKeys: TreeItemKey[] = [], includeTrigger = true) => TreeNode<SelectableTreeItemPayload<I> \| null> \| null`                                                                 | Метод получения последнего выбираемого (доступного для выбора) элемента дерева                        | 
