---
outline: deep
---

# useTreeControl

**useTreeControl** - хук, предоставляющий свойства управления для дерева.

## API

|       |                                                                |
| ----: |:---------------------------------------------------------------|
| Type: | `(options: UseTreeControlOptions): UseTreeControl` |

### `UseTreeControlOptions<I extends TreeItem>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `tree`  | `SelectableItemTree<I>`   | Экземпляр класса SelectableNodeTree  | 
| `selection`  | `SelectionControl`   | Selection методы для управления выбором  | 
| `active`  | `string`   | Свойство, обозначающее активный элемент в списке  | 
| `expanded`  | `Set<string>`   | Свойство, определяющее "раскрытые" ключи  | 
| `changeFocus`  | `(id: string) => void`   | Метод, изменяющий текущий сфокусированный элемент  | 
| `changeActive`  | `(active: string) => void`   | Метод на изменение активного элемента в дереве  | 
| `onExpand`  | `(key: string) => void`   | Метод на раскрытие родительского элемента (поддерева)  | 
| `onHide`  | `(key: string) => void`   | Метод на закрытие родительского элемента (поддерева)  | 
| `onHideAll`  | `() => void`   | Метод на закрытие всех родительских элементов  | 
| `onToggleExpanded`  | `(key: string) => void`   | Метод на изменение состояние раскрытия родительского элемента (поддерева)  | 

### `UseTreeControl`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `onKeyDown`  | `KeyboardEventHandler`   | Обработчик на нажатие клавиш  | 
| `onFocus`  | `FocusEventHandler`   | Обработчик на focus  | 
| `onBlur`  | `FocusEventHandler`   | Обработчик на blur  | 
