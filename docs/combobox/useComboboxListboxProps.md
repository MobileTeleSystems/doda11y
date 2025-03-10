---
outline: deep
---

# useComboboxListboxProps

**useComboboxListboxProps** - хук, предоставляющий свойства доступности для Listbox в составе Combobox.

## API

|       |                                                                                  |
| ----: |:---------------------------------------------------------------------------------|
| Type: | `<T extends HTMLElement>(options: UseComboboxListboxPropsOptions): UseComboboxListboxProps<T>` |

### `UseComboboxListboxPropsOptions`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `id`  | `string`   | id элемента  | 
| `withSemanticRole`  | `boolean`   | Признак, использовать ли семантическую роль. В случае, если используется семантический тег (например `<button>` или `<article>`, лучше передать `false`)  | 

### `ComboboxListboxProps<T extends HTMLElement>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `role`  | `"listbox"`   | Роль listbox  | 
| `aria-multiselectable`  | `Booleanish`   | Признак, определяющий, доступен ли множественный выбор для списка. По умолчанию - `false`  | 
| `tabIndex`  | `-1`   | Свойство, означающее, должен ли элемент участвовать в последовательности с помощью клавиатуры и в каком порядке  | 

### `UseComboboxListboxProps<T extends HTMLElement>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `listboxProps`  | `ComboboxListboxProps<T>`   | Свойства, необходимые для доступности listbox элемента в составе combobox  | 
