---
outline: deep
---

# useTabControl

**useTabControl** - хук, предоставляющий свойства управления Tab.

## API

|       |                                                                |
| ----: |:---------------------------------------------------------------|
| Type: | `(options: UseTabControlOptions): UseTabControl` |

### `UseTabControlOptions`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `onActivate`  | `() => void`   | Метод, вызываемый на активацию  | 
| `onOpenPopup`  | `() => void`   | Метод, вызываемый на открытие всплывающего меню  | 

### `UseTabControl`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `onKeyDown`  | `KeyboardEventHandler`   | Обработчик на нажатие клавиш  | 
