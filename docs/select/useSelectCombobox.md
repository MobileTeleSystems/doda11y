---
outline: deep
---

# useSelectCombobox

**useSelectCombobox** - хук, предоставляющий доступность для Select.

## API

|       |                                                                                                        |
| ----: |:-------------------------------------------------------------------------------------------------------|
| Type: | `<T extends HTMLElement, G extends Record<string, any>>(options: UseSelectComboboxOptions<G>): UseSelectCombobox<T>` |

### `UseSelectComboboxOptions<T extends Record<string, any>>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `list`  | `ItemList<T, ListItemPayload<T>>`   | Список элементов, отображаемых в компоненте  | 
| `isOpen`  | `any`   | Признак, открыто ли всплывающий popup компонента  | 
| `popupId`  | `any`   | id popup  | 
| `onClose`  | `() => void`   | Обработчик на закрытие компонента  | 
| `onOpen`  | `() => void`   | Обработчик на открытие компонента  | 
| `changeActive`  | `(active: string) => void`   | Метод на изменение активного элемента в списке  | 
| `changeFocus`  | `(active: string) => void`   | Метод, изменяющий текущий сфокусированный элемент  | 
| `active`  | `string`   | Свойство, обозначающее активный элемент в списке  | 
| `withSemanticRole`  | `boolean`   | Признак, использовать ли семантическую роль. В случае, если используется семантический тег (например `<button>` или `<article>`, лучше передать `false`)  | 

### `UseSelectUnionComboboxProps<T extends HTMLElement>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `role`  | `"combobox"`   | Роль combobox  | 
| `tabIndex`  | `0 \| -1`   | Свойство, означающее, должен ли элемент участвовать в последовательности с помощью клавиатуры и в каком порядке  | 
| `aria-haspopup`  | `boolean \| "dialog" \| "menu" \| "listbox" \| "tree" \| "grid" \| "false" \| "true"`   | Тип popup  | 
| `aria-expanded`  | `Booleanish`   | Свойство, определяющее, открыт ли popup  | 
| `aria-controls`  | `string`   | Свойство, указывающее на элемент с помощью id, который управляет видимостью popup trigger  | 
| `onKeyDown`  | `KeyboardEventHandler`   | Обработчик на нажатие клавиш  | 

### `UseSelectCombobox<T extends HTMLElement>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `comboboxProps`  | `UseSelectUnionComboboxProps<T>`   | Свойства, необходимые для доступности combobox элемента в составе select  | 

## Пример

`useSelectCombobox` используется для обеспечения веб-доступности `Combobox` в составе `Select`, его необходимо сочетать с другими хуками, или же имплементировать собственную логику выбора элемента, хранения коллекции, фокусировки и т.д.

[Подробный пример](/select/conceptions#пример)
