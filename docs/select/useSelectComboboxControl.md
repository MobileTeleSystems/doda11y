---
outline: deep
---

# useSelectComboboxControl

**useSelectComboboxControl** - хук, предоставляющий свойства управления для Select (обработчики).

## API

|       |                                                                                                  |
| ----: |:-------------------------------------------------------------------------------------------------|
| Type: | `<I extends ListItem = ListItem>(options: UseSelectComboboxControlOptions<I>): UseSelectComboboxControl` |

### `UseSelectComboboxControlOptions<I extends ListItem = ListItem>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `list`  | `ItemList<I, ListItemPayload<I>>`   | Список элементов, отображаемых в компоненте  | 
| `isOpen`  | `boolean`   | Признак, открыто ли всплывающий popup компонента  | 
| `popupId`  | `string`   | id popup  | 
| `onClose`  | `() => void`   | Обработчик на закрытие компонента  | 
| `onOpen`  | `() => void`   | Обработчик на открытие компонента  | 
| `changeActive`  | `(active: string) => void`   | Метод на изменение активного элемента в списке  | 
| `changeFocus`  | `(active: string) => void`   | Метод, изменяющий текущий сфокусированный элемент  | 

### `UseSelectComboboxControl`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `onKeyDown`  | `KeyboardEventHandler`   | Обработчик на нажатие клавиш  | 
