---
outline: deep
---

# useMenubarControl

**useMenubarControl** - хук, предоставляющий свойства управления для меню-бара.

## API

|       |                                                                |
| ----: |:---------------------------------------------------------------|
| Type: | `(options: UseMenubarControlOptions): UseMenubarControl` |

### `UseMenubarControlOptions<I extends TreeItem = TreeItem>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `tree`  | `ItemTree<I, TreeItemPayload<I, "child" \| "group" \| "parent">>`   | Экземпляр класса SelectableNodeTree  | 
| `active`  | `string`   | Свойство, обозначающее активный элемент в списке  | 
| `expanded`  | `Set<string>`   | Свойство, определяющее "раскрытые" ключи  | 
| `orientation`  | `Orientation`   | Свойство, определяющее направление меню. По умолчанию - 'vertical'  | 
| `closeOnEsc`  | `boolean`   | Признак, определяющий, надо ли закрывать поддерево на нажатие `Esc`. По умолчанию - `true`  | 
| `changeActive`  | `(active: string) => void`   | Метод на изменение активного элемента в списке  | 
| `changeFocus`  | `(id: string) => void`   | Метод, изменяющий текущий сфокусированный элемент  | 
| `onExpand`  | `(key: string) => void`   | Метод на раскрытие родительского элемента (подменю)  | 
| `onHide`  | `(key: string) => void`   | Метод на закрытие родительского элемента (подменю)  | 
| `onHideAll`  | `() => void`   | Метод на закрытие всех родительских элементов (подменю)  | 
| `onActivate`  | `(node: TreeNode<TreeItemPayload<I>>) => void`   | Метод, вызываемый на активацию элемента меню  | 

### `UseMenubarControl`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `onKeyDown`  | `KeyboardEventHandler`   | Обработчик на нажатие клавиш  | 
| `onFocus`  | `FocusEventHandler`   | Обработчик на focus  | 
| `onBlur`  | `FocusEventHandler`   | Обработчик на blur  | 
