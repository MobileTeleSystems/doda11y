---
outline: deep
---

# useComboboxProps

**useComboboxProps** - хук, предоставляющий свойства доступности для Combobox.

## API

|       |                                                                                  |
| ----: |:---------------------------------------------------------------------------------|
| Type: | `<T extends HTMLElement>(options: UseComboboxPropsOptions): UseComboboxProps<T>` |

### `UseComboboxPropsOptions`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `isOpen`  | `boolean`   | Признак, открыт ли список значений  | 
| `active`  | `string`   | Свойство, обозначающее текущий активный элемент  | 
| `popupType`  | `Popup`   | Тип popup  | 
| `id`  | `string`   | id элемента  | 
| `popupId`  | `string`   | id popup элемента  | 
| `autoComplete`  | `AutoComplete`   | Свойство, обозначающее режим автодополнения  | 
| `withSemanticRole`  | `boolean`   | Признак, использовать ли семантическую роль. В случае, если используется семантический тег (например `<button>` или `<article>`, лучше передать `false`)  | 

### `ComboboxProps<T extends HTMLElement>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `role`  | `"combobox"`   | Роль combobox  | 
| `tabIndex`  | `0 \| -1`   | Свойство, означающее, должен ли элемент участвовать в последовательности с помощью клавиатуры и в каком порядке  | 
| `aria-autocomplete`  | `AutoComplete`   | Свойство, обозначающее режим автодополнения  | 
| `id`  | `string`   | id элемента  | 
| `aria-haspopup`  | `boolean \| "dialog" \| "menu" \| "listbox" \| "tree" \| "grid" \| "false" \| "true"`   | Тип popup  | 
| `aria-expanded`  | `Booleanish`   | Свойство, определяющее, открыт ли popup  | 
| `aria-controls`  | `string`   | Свойство, указывающее на элемент с помощью id, который управляет видимостью popup trigger  | 

### `UseComboboxProps<T extends HTMLElement>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `comboboxProps`  | `ComboboxProps<T>`   | Свойства, необходимые для доступности input элемента в составе combobox  | 
