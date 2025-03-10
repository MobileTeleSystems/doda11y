---
outline: deep
---

# useDataSelectionControl

**useDataSelectionControl** - хук для удобного управления выбором в элементах.

## API

|       |                                                    |
| ----: |:---------------------------------------------------|
| Type: | `(options: UseDataSelectionControlOptions): UseDataSelectionControl` |

### `UseDataSelectionControlOptions`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `multiSelectable`  | `boolean`   | Признак, определяющий, доступен ли множественный выбор для списка. По умолчанию - `false`  | 
| `allowSelectAll`  | `boolean`   | Признак, определяющий, доступно ли выделение всех элементов списка с помощью сочетания `ctrl+a`. По умолчанию - `true`. Может быть использован только тогда, когда multiSelectable - `true`  | 
| `allowClearSelection`  | `boolean`   | Признак, определяющий, доступно ли снятие всех выделенных значений на `escape`  | 
| `orientation`  | `Orientation`   | Ориентация списка. По умолчанию - `vertical`  | 
| `active`  | `string`   | Свойство, обозначающее активный (сфокусированный) элемент в списке  | 
| `selectedKeys`  | `Set<string>`   | Коллекция выделенных ключей коллекции  | 
| `clearSelect`  | `() => void`   | Метод, очищающий все выделенные значения  | 
| `select`  | `(key: string) => void`   | Метод, выделяющий элемент коллекции по ключу  | 
| `selectRange`  | `(startKey: string, endKey: string) => void`   | Метод, выделяющий интервал элементов от одного до другого ключа  | 
| `getNextKey`  | `(key: string) => string`   | Метод, позволяющий получить следующий элементы из коллекции  | 
| `getPrevKey`  | `(key: string) => string`   | Метод, позволяющий получить предыдущий элементы из коллекции  | 
| `getFirstKey`  | `() => string`   | Метод, позволяющий получить первый элементы из коллекции  | 
| `getLastKey`  | `() => string`   | Метод, позволяющий получить последний элементы из коллекции  | 

### `UseDataSelectionControl`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `onKeyDown`  | `KeyboardEventHandler`   | Обработчик на нажатие клавиш  | 
