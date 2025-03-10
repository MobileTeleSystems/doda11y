---
outline: deep
---

# useComboboxListboxControl

**useComboboxListboxControl** - хук, предоставляющий свойства управления для Combobox (обработчики и список).

## API

|       |                                                                                   |
| ----: |:----------------------------------------------------------------------------------|
| Type: | `<T extends HTMLElement>(options: UseComboboxListboxControlOptions): UseComboboxListboxControl` |

### `UseComboboxListboxControlOptions<I extends ListItem = ListItem>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `list`  | `ItemList<I, ListItemPayload<I>>`   | Список элементов, отображаемых в компоненте  | 
| `comboboxElement`  | `HTMLElement`   | html-ref на combobox  | 
| `isOpen`  | `boolean`   | Признак, открыто ли всплывающий popup компонента  | 
| `loopList`  | `boolean`   | Признак, зацикливать ли список  | 
| `closeOnSelect`  | `boolean`   | Признак, закрывать ли popup, когда выбрали элемент  | 
| `active`  | `string`   | Свойство, обозначающее активный элемент в списке  | 
| `selection`  | `SelectionControl`   | Selection методы для управления выбором  | 
| `onOpen`  | `() => void`   | Обработчик на открытие компонента  | 
| `onClose`  | `() => void`   | Обработчик на закрытие компонента  | 
| `changeActive`  | `(id: string) => void`   | Обработчик на изменение активного элемента в списке  | 
| `changeFocus`  | `(id: string) => void`   | Метод, изменяющий текущий сфокусированный элемент  | 
| `onSelect`  | `(key: string) => void`   | Обработчик на выбор в списке  | 

### `UseComboboxListboxControl<I extends ListItem = ListItem>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `onKeyDown`  | `KeyboardEventHandler`   | Обработчик на нажатие клавиш  | 
| `onBlur`  | `FocusEventHandler`   | Обработчик на blur  | 
