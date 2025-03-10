---
outline: deep
---

# useSelection

**useSelection** - хук для удобного управления выбором в элементах.

Предоставляет обширный набор методов для управления состоянием выбора.

## API

|       |                                                    |
| ----: |:---------------------------------------------------|
| Type: | `(options: UseSelectionOptions): SelectionControl` |

### `UseSelectionOptions`

| Имя               | Тип      | Описание                                                                                                |
|:-------------------|:-----------|:--------------------------------------------------------------------------------------------------------|
| `keys`  | `string[]`   | Коллекция ключей из списков, деревьев, или грид-сетки, которые могут быть выбраны. Необязательное поле. | 
| `selectionMode`  | `SelectionMode`   | Свойства, определяющее режим выбора: одиночный или множественный                                        | 
| `defaultKeys`  | `string[]`   | Массив предвыбранных ключей. Необязательное поле                                                        | 

### `SelectionControl`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `selectedKeys`  | `Set<string>`   | Свойство, обозначающее выбранные ключи  | 
| `multiple`  | `boolean`   | Свойство, обозначающее доступен ли множественный выбор  | 
| `toggleSelect`  | `(key: string) => void`   | Метод-тогл выбора по ключу  | 
| `select`  | `(key: string) => void`   | Метод выбора по ключу  | 
| `unselect`  | `(key: string) => void`   | Метод снятия выбора по ключу  | 
| `selectRange`  | `(startKey: string, endKey: string) => void`   | Метод выбора по интервалу ключе  | 
| `clearSelect`  | `() => void`   | Метод очистки всех выбранных значений  | 
| `isSelected`  | `(key: string) => boolean`   | Метод, возвращающий `true` в случае, если ключ выбран, иначе - `false`  | 

## Пример

Хук useSelection используется для реализации модели выбора во многих паттернов, например, таких, как:

[Пример Select](/select/conceptions.html#пример)

[Пример Listbox](/listbox/conceptions.html#пример)

[Пример Combobox](/combobox/conceptions.html#пример)

[Пример Combobox](/tree/conceptions.html#пример)

[Пример Combobox](/menu/conceptions.html#пример)
