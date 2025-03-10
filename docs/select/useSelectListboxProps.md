---
outline: deep
---

# useSelectListboxProps

**useSelectListboxProps** - хук, предоставляющий свойства доступности для Select.

## API

|       |                                                                              |
| ----: |:-----------------------------------------------------------------------------|
| Type: | `<T extends HTMLElement>(options: UseSelectListboxPropsOptions): UseSelectListboxProps<T>` |

### `UseSelectListboxPropsOptions`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `multiSelectable`  | `boolean`   | Признак, определяющий, доступен ли множественный выбор для списка. По умолчанию - `false`  | 
| `withSemanticRole`  | `boolean`   | Признак, использовать ли семантическую роль. В случае, если используется семантический тег (например `<button>` или `<article>`, лучше передать `false`)  | 
| `id`  | `string`   | id элемента  | 

### `SelectListboxProps<T extends HTMLElement>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `role`  | `"listbox"`   | Роль listbox  | 
| `tabIndex`  | `-1`   | Свойство, означающее, должен ли элемент участвовать в последовательности с помощью клавиатуры и в каком порядке  | 
| `aria-multiselectable`  | `Booleanish`   | Признак, определяющий, доступен ли множественный выбор для списка. По умолчанию - `false`  | 
| `id`  | `string`   | Свойство, обозначающее id элемента  | 

### `UseSelectListboxProps<T extends HTMLElement>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `listboxProps`  | `SelectListboxProps<T>`   | Свойства, необходимые для доступности listbox элемента в составе select  | 
