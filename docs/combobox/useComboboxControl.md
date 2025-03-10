---
outline: deep
---

# useComboboxControl

**useComboboxControl** - хук, предоставляющий свойства управления для Combobox (обработчики и список).

## API

|       |                                                                                   |
| ----: |:----------------------------------------------------------------------------------|
| Type: | `<T extends HTMLElement>(options: UseComboboxControlOptions): UseComboboxControl` |

### `UseComboboxControlOptions<I extends ListItem = ListItem>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `list`  | `ItemList<I, ListItemPayload<I>>`   | Список элементов, отображаемых в компоненте  | 
| `isOpen`  | `boolean`   | Признак, открыто ли всплывающий popup компонента  | 
| `listboxRef`  | `RefObject<HTMLElement>`   | Свойство, обозначающее ссылку на HTMLElement listbox  | 
| `autoComplete`  | `AutoComplete`   | Свойство, обозначающее режим автодополнения  | 
| `clearSelect`  | `() => void`   | Метод очистки всех выбранных значений  | 
| `onOpen`  | `() => void`   | Обработчик на открытие компонента  | 
| `onClose`  | `() => void`   | Обработчик на закрытие компонента  | 
| `changeActive`  | `(id: string) => void`   | Обработчик на изменение активного элемента в списке  | 
| `changeFocus`  | `(id: string) => void`   | Метод, изменяющий текущий сфокусированный элемент  | 

### `UseComboboxControl`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `onKeyDown`  | `KeyboardEventHandler`   | Обработчик на нажатие клавиш  | 
| `onInput`  | `FormEventHandler`   | Обработчик на input  | 
| `onBlur`  | `FocusEventHandler`   | Обработчик на blur  | 
