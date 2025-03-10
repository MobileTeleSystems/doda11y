---
outline: deep
---

# useCheckboxControl

**useCheckboxControl** - хук, предоставляющий свойства управления для checkbox.

## API

|       |                                                                    |
| ----: |:-------------------------------------------------------------------|
| Type: | `<T extends HTMLElement>(options: UseCheckboxControlOptions): UseCheckboxControl<T>` |

### `UseCheckboxControlOptions`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `onToggle`  | `() => void`   | Обработчик на активацию checkbox  | 

### `UseCheckboxControl`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `onKeyDown`  | `KeyboardEventHandler`   | Обработчик на нажатие клавиш  | 
