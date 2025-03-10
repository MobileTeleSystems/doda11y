---
outline: deep
---

# useMenuButtonControl

**useMenuButtonControl** - хук, предоставляющий свойства управления для кнопки меню.

## API

|       |                                                                |
| ----: |:---------------------------------------------------------------|
| Type: | `(options: UseMenuButtonControlOptions): UseMenuButtonControl` |

### `UseMenuButtonControlOptions`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `isOpen`  | `boolean`   | Признак, открыто ли меню  | 
| `onOpen`  | `() => void`   | Обработчик на открытие меню  | 
| `onFocusFirst`  | `() => void`   | Обработчик на фокусирование первого элемента меню  | 
| `onFocusLast`  | `() => void`   | Обработчик на фокусирование последнего элемента  | 

### `UseMenuButtonControl`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `onKeyDown`  | `KeyboardEventHandler`   | Обработчик на нажатие клавиш  | 
