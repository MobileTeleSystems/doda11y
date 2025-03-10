---
outline: deep
---

# useListboxProps

**useListboxProps** - хук, предоставляющий свойства доступности для Listbox.

## API

|       |                                                      |
| ----: |:-----------------------------------------------------|
| Type: | `(options: UseListboxPropsOptions): UseListboxProps` |

### `UseListboxPropsOptions`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `multiSelectable`  | `boolean`   | Признак, определяющий, доступен ли множественный выбор для списка. По умолчанию - `false`  | 
| `orientation`  | `Orientation`   | Ориентация списка. По умолчанию - `vertical`  | 
| `id`  | `string`   | id элемента  | 
| `withSemanticRole`  | `boolean`   | Признак, использовать ли семантическую роль. В случае, если используется семантический тег (например `<button>` или `<article>`, лучше передать `false`)  | 
| `active`  | `string`   | Свойство, обозначающее активный элемент  | 

### `ListboxProps`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `role`  | `"listbox"`   | Роль listbox  | 
| `tabIndex`  | `0 \| -1`   | Свойство, означающее, должен ли элемент участвовать в последовательности с помощью клавиатуры и в каком порядке  | 
| `aria-multiselectable`  | `Booleanish`   | Свойство aria, определяющее, доступен ли множественный выбор для списка. По умолчанию - `false`  | 
| `aria-orientation`  | `"vertical" \| "horizontal"`   | Ориентация элемента. По умолчанию - `vertical`  | 
| `id`  | `string`   | id элемента  | 

### `UseListboxProps`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `listboxProps`  | `ListboxProps`   | Свойства, необходимые для доступности listbox  | 
