---
outline: deep
---

# usePopupTriggerControl

**usePopupTriggerControl** - хук, предоставляющий обработчик `onKeyDown` для Popup триггера.

## API

|       |                                                                             |
| ----: |:----------------------------------------------------------------------------|
| Type: | `<T extends HTMLElement>(options: UsePopupTriggerControlOptions): UsePopupTriggerControl` |

### `UsePopupTriggerControlOptions`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `isOpen`  | `boolean`   | Признак, определяющий, открыт ли popup  | 
| `isOpenOnEnterOrSpace`  | `boolean`   | Признак, определяющий, нужно ли открывать popup на нажатие `Enter` или `Space`  | 
| `isFocusFirstOnEnterOrSpace`  | `boolean`   | Признак, определяющий, нужно ли фокусироваться на первом элементе при нажатии `Enter` или `Space`  | 
| `closeOnEsc`  | `boolean`   | Признак, определяющий, нужно ли закрывать popup на нажатие `Esc`  | 
| `preventDefault`  | `boolean`   | Признак, определяющий, нужно предотвращать поведение по умолчанию  | 
| `onOpen`  | `() => void`   | Обработчик на открытие  | 
| `onClose`  | `() => void`   | Обработчик на закрытие  | 
| `onFocusFirst`  | `() => void`   | Обработчик на фокус первого элемента popup  | 
| `onFocusLast`  | `() => void`   | Обработчик на фокус последнего элемента popup  | 

### `UsePopupTriggerControl`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `onKeyDown`  | `KeyboardEventHandler`   | Обработчик на нажатие клавиш  | 
