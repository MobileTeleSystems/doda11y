---
outline: deep
---

# Tree

**Tree** - структура данных, представляющая дерево.

## API

### `Tree`

`class Tree<P>`

`Generic <P>` - тип payload для элемента

**Свойства класса**

| Имя     | Тип                              | Описание                 |
|:--------|:---------------------------------|:-------------------------|
| `nodes` | `Map<string, TreeNode<P>>` | Все элементы дерева      | 
| `root`  | `TreeNode<P> \| null`            | Root элемент дерева      | 
| `head`  | `TreeNode<P> \| null`      | Первый элемент дерева    | 
| `tail`  | `TreeNode<P> \| null`      | Последний элемент дерева |


**Методы класса**

| Имя             | Тип                                                                             | Описание                                                     |
|:----------------|:--------------------------------------------------------------------------------|:-------------------------------------------------------------|
| `traverseDFS`        | `(callback: (node: TreeNode<P>) => void) => void`                               | Обход дерева в глубину                                       | 
| `findNode`        | `(key: string) => TreeNode<P> \| null`                                          | Метод, возвращающий элемент дерева по ключу                                                             | 
| `addNode`          | `(key: string, parentKey: string, payload: P) => TreeNode<P>`                   | Метод, добавляющий элемент в дерево                   | 
| `getNeighborNodes`    | `(key: string) => { previous: TreeNode<P> \| null, next: TreeNode<P> \| null }` | Метод, возвращающий соседний ноды элемента                       | 
| `getParentKey` | `(key: string) => string \| null`                                               | Метод, возвращающий ключ родительского элемента                     | 
