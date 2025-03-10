---
outline: deep
---

# usePopupTriggerProps

**usePopupTriggerProps** - хук, предоставляющий свойства доступности для триггера Popup.

## API

|       |                                                                                             |
| ----: |:--------------------------------------------------------------------------------------------|
| Type: | `<T extends HTMLElement>(options: UsePopupTriggerPropsOptions<T>): UsePopupTriggerProps<T>` |

### `UsePopupTriggerPropsOptions<T extends HTMLElement>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `type`  | `boolean \| "dialog" \| "menu" \| "listbox" \| "tree" \| "grid" \| "false" \| "true"`   | Тип popup  | 
| `isOpen`  | `boolean`   | Признак, определяющий, открыт ли popup  | 
| `popupId`  | `string`   | id popup  | 

### `PopupTriggerProps<T extends HTMLElement>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `aria-haspopup`  | `boolean \| "dialog" \| "menu" \| "listbox" \| "tree" \| "grid" \| "false" \| "true"`   | Тип popup  | 
| `aria-expanded`  | `Booleanish`   | Свойство, определяющее, открыт ли popup  | 
| `aria-controls`  | `string`   | Свойство, указывающее на элемент с помощью id, который управляет видимостью popup trigger  | 

### `UsePopupTriggerProps<T extends HTMLElement>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `triggerProps`  | `PopupTriggerProps<T>`   | Свойства, необходимые для доступности trigger popup  | 
