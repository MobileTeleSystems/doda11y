---
outline: deep
---

# useIterableSearchControl

**useIterableSearchControl** - хук, предоставляющий методы управления для поиска и реализующие возможности [useIterableSearch](/structures/useIterableSearch).

## API

|       |                                                                                   |
| ----: |:----------------------------------------------------------------------------------|
| Type: | `<T>(iterable: Iterable<T>, find: (value: T, searched: string) => boolean, onFound?: (value: T) => void): UseIterableSearchControl` |

### `UseIterableSearchControl`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `onKeyDown`  | `KeyboardEventHandler`   | Обработчик на ввод клавиш  |
