---
outline: deep
---

# useItemList

**useItemList** - хук, предоставляющий методы взаимодействия с [Item List](/structures/itemList).

## API

|       |                                                                                   |
| ----: |:----------------------------------------------------------------------------------|
| Type: | `<I extends ListItem = ListItem>(options: UseItemListOptions<I>): UseItemList<I>` |

### `UseItemListOptions<I extends ListItem = ListItem>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `items`  | `I[]`   | Элементы коллекции  | 
| `prefix`  | `string`   |   | 
| `typeResolver`  | `(item: I) => ListItemType`   |   | 
| `labelResolver`  | `(item: I) => string`   |   | 

### `UseItemList<I extends ListItem = ListItem>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `list`  | `LinkedList<ListItemPayload<I>>`   |   | 
| `_typeResolver`  | `(item: I) => ListItemType`   |   | 
| `_callback`  | `ListItemCallback<I, ListItemPayload<I>>`   |   | 
| `_labelResolver`  | `(item: I) => string`   |   | 
| `_position`  | `number`   |   | 
| `_prefix`  | `string`   |   | 
| `_parentForKeys`  | `Map<string, string[]>`   |   | 
| `getNextNode`  | `(key: string, types?: ListItemType[]) => LinkedListNode<ListItemPayload<I>>`   | Метод получения следующего элемента коллекции  | 
| `getPrevNode`  | `(key: string, types?: ListItemType[]) => LinkedListNode<ListItemPayload<I>>`   | Метод получения предыдущего элемента коллекции  | 
| `filterNodes`  | `(predicate: (node: LinkedListNode<ListItemPayload<I>>) => boolean) => ItemList<I, ListItemPayload<I>>`   | Метод, возвращающий новую отфильтрованную коллекцию элементов  | 
| `getFirstNode`  | `(types?: ListItemType[]) => LinkedListNode<ListItemPayload<I>>`   | Метод, возвращающий первый элемент коллекции  | 
| `getLastNode`  | `(types?: ListItemType[]) => LinkedListNode<ListItemPayload<I>>`   | Метод, возвращающий второй элемент коллекции  | 
| `getNode`  | `(key: string) => LinkedListNode<ListItemPayload<I>>`   | Метод, возвращающий элемент коллекции по ключу  | 
| `getKey`  | `(type: ListItemType, index?: number, parentKey?: string, prefix?: string) => string`   | Метод, возвращающий ключ элемента  | 
| `getType`  | `(item: I) => ListItemType`   | Метод, возвращающий тип элемента  | 
| `getLabel`  | `(item: I) => string`   | Метод, возвращающий текстовую метку элемента коллекции  | 
| `getNodes`  | `() => LinkedListNode<ListItemPayload<I>>[]`   | Метод, возвращающий все элементы коллекции в виде массива  | 
| `getChildrenKeys`  | `(key: string) => string[]`   | Метод, возвращающий все ключи дочерних элементов  | 
| `getChildren`  | `(key: string) => LinkedListNode<ListItemPayload<I>>[]`   | Метод, возвращающий все дочерние элементы  | 
| `addNode`  | `(item: I, position: number, options: { parentKey?: string; index: number; prefix?: string; }) => void`   | Метод, добавляющий элемент в коллекцию  | 


## Пример

Паттерн Item List используется для реализации многих UI паттернов, таких как Listbox, Select, Combobox

[Пример Select](/select/conceptions.html#пример)

[Пример Listbox](/listbox/conceptions.html#пример)

[Пример Combobox](/combobox/conceptions.html#пример)
