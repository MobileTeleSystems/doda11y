---
outline: deep
---

# ItemList

**Item List** - структура данных, представляющая паттерн [связанного списка](/structures/linkedList), но расширяющая его возможности.

## API

### `ItemList`

`class ItemList<I extends ListItem = ListItem, P extends ListItemPayload<I> = ListItemPayload<I>>`

`Generic <I>` - тип item для элемента

`constructor(items: I[], options: ListItemOptions<I>, callback?: ListItemCallback<I, P>)`

**Параметры конструктора**

| Имя	        | Type	                    | Описание	                                                  |
|:------------|:-------------------------|:-----------------------------------------------------------|
| `items`	    | `I[]`                    | 	  Элементы коллекции                                      |
| `options`	  | `ItemTreeOptions<I>`     | 	  Опции коллекции                                         |
| `callback`	 | `ItemTreeCallback<I, P>` | 	  Функция, вызываемая при добавлении элемента в коллекцию |

**Свойства класса**

| Имя    | Тип                         | Описание         |
|:-------|:----------------------------|:-----------------|
| `list` | `LinkedListNode<P> \| null` | Связанный список | 

**Методы класса**

| Имя               | Тип                                                                                                  | Описание                                                      |
|:------------------|:-----------------------------------------------------------------------------------------------------|:--------------------------------------------------------------|
| `getNextNode`     | `(key: ListItemKey, types: ListItemType[] = ['item']) => LinkedListNode<ListItemPayload<I>> \| null` | Метод получения следующего элемента коллекции                 | 
| `getPrevNode`     | `(key: ListItemKey, types: ListItemType[] = ['item']) => LinkedListNode<ListItemPayload<I>> \| null` | Метод получения предыдущего элемента коллекции                | 
| `filterNodes`     | `(predicate: (node: LinkedListNode<ListItemPayload<I>>) => boolean) => ItemList<I, P>`               | Метод, возвращающий новую отфильтрованную коллекцию элементов | 
| `getFirstNode`    | `(types: ListItemType[] = ['item']) => LinkedListNode<ListItemPayload<I>> \| null`                   | Метод, возвращающий первый элемент коллекции                  | 
| `getLastNode`     | `(types: ListItemType[] = ['item']) => LinkedListNode<ListItemPayload<I>> \| null`                   | Метод, возвращающий последний элемент коллекции               | 
| `getNode`         | `(key: ListItemKey) => LinkedListNode<ListItemPayload<I>> \| null`                                   | Метод, возвращающий элемент коллекции по ключу                | 
| `getNodes`        | `() => LinkedListNode<ListItemPayload<I>> \| null`                                                   | Метод, возвращающий все элементы коллекции в виде массива     | 
| `getChildrenKeys` | `(key: ListItemKey) => ListItemKey[] \| undefined`                                                   | Метод, возвращающий все ключи дочерних элементов              | 
| `getChildren`     | `(key: ListItemKey) => LinkedListNode<ListItemPayload<I>>[]                                        ` | Метод, возвращающий все дочерние элементы                     | 
