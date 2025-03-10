---
outline: deep
---

# useToggleButtonControl

**useToggleButtonControl** хук, предоставляющий свойства управления для кнопки (обработчики).

## API

|       |                                                                                              |
| ----: |:---------------------------------------------------------------------------------------------|
| Type: | `<T extends HTMLElement>(options: UseToggleButtonControlOptions<T>): UseToggleButtonControl` |

### `UseToggleButtonControlOptions<T extends HTMLElement>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `onPress`  | `(e: KeyboardEvent<T>) => void`   | Обработчик нажатия на кнопку  | 

### `UseToggleButtonControl`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `onKeyDown`  | `KeyboardEventHandler`   | Обработчик нажатия (keyDown) на кнопку  | 
| `onKeyUp`  | `KeyboardEventHandler`   | Обработчик нажатия (keyUp) на кнопку  | 
