---
outline: deep
---

# useTabControl

**useTabControl** - хук, предоставляющий свойства управления Tab.

## API

|       |                                                                                            |
| ----: |:-------------------------------------------------------------------------------------------|
| Type: | `<I extends ListItem = ListItem>(options: UseTablistControlOptions<I>): UseTablistControl` |

### `UseTablistControlOptions<I extends ListItem = ListItem>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `list`  | `ItemList<I, ListItemPayload<I>>`   | Список элементов, отображаемых в компоненте  | 
| `orientation`  | `Orientation`   | Свойство, определяющее направление. По умолчанию - 'horizontal'  | 
| `active`  | `string`   | Свойство, обозначающее активный элемент  | 
| `activateOnChange`  | `boolean`   | Признак, обозначающий, необходимо ли активировать вкладку на смену  | 
| `changeActive`  | `(id: string) => void`   | Метод, изменяющий активный элемент  | 
| `changeFocus`  | `(id: string) => void`   | Метод, изменяющий текущий сфокусированный элемент списка  | 
| `onActivate`  | `(key: string) => void`   | Метод, вызываемый на активацию  | 

### `UseTablistControl`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `onKeyDown`  | `KeyboardEventHandler`   | Обработчик на нажатие клавиш  | 
| `onFocus`  | `FocusEventHandler`   | Обработчик на focus  | 
