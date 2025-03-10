---
outline: deep
---

# useLinkControl

**useLinkControl** - хук, предоставляющий свойства управления для элементов ссылки. 

## API

|       |                                                    |
| ----: |:---------------------------------------------------|
| Type: | `(options: UseLinkControlOptions): UseLinkControl` |

### `UseLinkControlOptions`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `onRedirect`  | `() => void`   | Обработчик на редирект (нажатие `enter`)  | 
| `onOpenContextMenu`  | `() => void`   | Обработчик на открытие контекстного меню (`shift + f10`)  | 

### `UseLinkControl`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `onKeyDown`  | `KeyboardEventHandler`   | Обработчик на нажатие клавиш  |
