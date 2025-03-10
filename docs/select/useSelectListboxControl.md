---
outline: deep
---

# useSelectListboxControl

**useSelectListboxControl** - хук, предоставляющий свойства управления для Select (обработчики).

## API

|       |                                                                                                        |
| ----: |:-------------------------------------------------------------------------------------------------------|
| Type: | `<I extends ListItem = ListItem>(options: UseSelectListboxControlOptions<I>): UseSelectListboxControl` |

### `UseSelectListboxControlOptions<I extends ListItem = ListItem>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `list`  | `ItemList<I, ListItemPayload<I>>`   | Список элементов, отображаемых в компоненте  | 
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

### `UseSelectListboxControl`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `onKeyDown`  | `KeyboardEventHandler`   | Обработчик на нажатие клавиш  | 
| `onBlur`  | `FocusEventHandler`   | Обработчик на blur  | 
