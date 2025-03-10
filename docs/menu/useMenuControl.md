---
outline: deep
---

# useMenuControl

**useMenuControl** - хук, предоставляющий свойства управления для меню.

## API

|       |                                                                |
| ----: |:---------------------------------------------------------------|
| Type: | `(options: UseMenuControlOptions): UseMenuControl` |

### `UseMenuControlOptions<I extends TreeItem = TreeItem>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `tree`  | `ItemTree<I, TreeItemPayload<I, "child" \| "group" \| "parent">>`   | Экземпляр класса SelectableNodeTree  | 
| `active`  | `string`   | Свойство, обозначающее активный элемент в списке  | 
| `triggerElement`  | `HTMLElement`   | Функция, возвращающая ссылка на триггер меню Node в DOM дереве  | 
| `changeActive`  | `(active: string) => void`   | Метод на изменение активного элемента в списке  | 
| `onExpand`  | `(key: string) => void`   | Метод на раскрытие родительского элемента (подменю)  | 
| `onHide`  | `(key: string) => void`   | Метод на закрытие родительского элемента (подменю)  | 
| `onActivate`  | `(node: TreeNode<TreeItemPayload<I>>) => void`   | Метод, вызываемый на активацию элемента меню  | 
| `onClose`  | `() => void`   | Метод, вызываемый на закрытие меню  | 
| `expanded`  | `Set<string>`   | Свойство, определяющее "раскрытые" ключи  | 
| `orientation`  | `Orientation`   | Свойство, определяющее направление меню. По умолчанию - 'vertical'  | 
| `closeOnEsc`  | `boolean`   | Признак, определяющий, надо ли закрывать поддерево на нажатие `Esc`. По умолчанию - `true`  | 

### `UseMenuControl`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `onKeyDown`  | `KeyboardEventHandler`   | Обработчик на нажатие клавиш  | 
| `onBlur`  | `FocusEventHandler`   | Обработчик на blur  | 
