---
outline: deep
---

# useVisibility

**useVisibility** - хук для управления состоянием видимости элементов.

## API

|       |                                    |
| ----: |:-----------------------------------|
| Type: | `(state = false) => UseVisibility` |

### `UseVisibility`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `isOpen`  | `boolean`   | Признак, определяющий, открыт ли popup  | 
| `close`  | `() => void`   | Метод, закрывающий popup  | 
| `open`  | `() => void`   | Метод, открывающий popup  | 
| `toggle`  | `() => void`   | Метод-тоггл для popup  | 
