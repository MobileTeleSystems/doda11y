---
outline: deep
---

# useSelectListbox

**useSelectListbox** - хук, предоставляющий доступность для Select.

## API

|       |                                                                                                        |
| ----: |:-------------------------------------------------------------------------------------------------------|
| Type: | `<T extends HTMLElement, G extends Record<string, any>>(options: UseSelectOptions<G>): UseSelect<T>` |

### `UseSelectListboxOptions<G extends Record<string, any>>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `multiSelectable`  | `boolean`   | Признак, определяющий, доступен ли множественный выбор для списка. По умолчанию - `false`  | 
| `withSemanticRole`  | `boolean`   | Признак, использовать ли семантическую роль. В случае, если используется семантический тег (например `<button>` или `<article>`, лучше передать `false`)  | 
| `id`  | `string`   | id элемента  | 
| `list`  | `ItemList<G, ListItemPayload<G>>`   | Список элементов, отображаемых в компоненте  | 
| `isOpen`  | `boolean`   | Признак, открыто ли всплывающий popup компонента  | 
| `loopList`  | `boolean`   | Признак, стоит ли зацикливать переход по списку  | 
| `closeOnSelect`  | `boolean`   | Признак, закрывать ли popup, когда выбрали элемент  | 
| `selection`  | `SelectionControl`   | Selection методы для управления выбором  | 
| `active`  | `string`   | Свойство, обозначающее активный элемент в списке  | 
| `comboboxElement`  | `HTMLElement`   | html-ref на combobox  | 
| `onClose`  | `() => void`   | Обработчик на закрытие компонента  | 
| `onOpen`  | `() => void`   | Обработчик на открытие компонента  | 
| `changeActive`  | `(active: string) => void`   | Метод на изменение активного элемента в списке  | 
| `changeFocus`  | `(active: string) => void`   | Метод, изменяющий текущий сфокусированный элемент  | 
| `onSelect`  | `(key: string) => void`   | Обработчик на выбор в списке  | 

### `UseSelectUnionListboxProps<T extends HTMLElement>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `role`  | `"listbox"`   | Роль listbox  | 
| `tabIndex`  | `-1`   | Свойство, означающее, должен ли элемент участвовать в последовательности с помощью клавиатуры и в каком порядке  | 
| `aria-multiselectable`  | `Booleanish`   | Признак, определяющий, доступен ли множественный выбор для списка. По умолчанию - `false`  | 
| `id`  | `string`   | Свойство, обозначающее id элемента  | 
| `onKeyDown`  | `KeyboardEventHandler`   | Обработчик на нажатие клавиш  | 
| `onBlur`  | `FocusEventHandler`   | Обработчик на blur  | 

### `UseSelectListbox<T extends HTMLElement>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `listboxProps`  | `UseSelectUnionListboxProps<T>`   | Свойства, необходимые для доступности listbox элемента в составе select  | 

## Пример

`useSelectListbox` используется для обеспечения веб-доступности `Listbox` в составе `Select`, его необходимо сочетать с другими хуками, или же имплементировать собственную логику выбора элемента, хранения коллекции, фокусировки и т.д.

[Подробный пример](/select/conceptions#пример)
