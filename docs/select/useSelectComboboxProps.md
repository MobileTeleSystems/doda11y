---
outline: deep
---

# useSelectComboboxProps

**useSelectComboboxProps** - хук, предоставляющий свойства доступности для Select.

## API

|       |                                                                              |
| ----: |:-----------------------------------------------------------------------------|
| Type: | `<T extends HTMLElement>(options: UseSelectComboboxPropsOptions): UseSelectComboboxProps<T>` |

### `UseSelectComboboxPropsOptions`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `isOpen`  | `boolean`   | Признак, открыто ли всплывающий popup компонента  | 
| `active`  | `string`   | Свойство, обозначающее активный элемент в списке  | 
| `popupId`  | `string`   | id popup  | 
| `withSemanticRole`  | `boolean`   | Признак, использовать ли семантическую роль. В случае, если используется семантический тег (например `<button>` или `<article>`, лучше передать `false`)  | 

### `SelectComboboxProps<T extends HTMLElement>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `role`  | `"combobox"`   | Роль combobox  | 
| `tabIndex`  | `0 \| -1`   | Свойство, означающее, должен ли элемент участвовать в последовательности с помощью клавиатуры и в каком порядке  | 
| `aria-haspopup`  | `boolean \| "dialog" \| "menu" \| "listbox" \| "tree" \| "grid" \| "false" \| "true"`   | Тип popup  | 
| `aria-expanded`  | `Booleanish`   | Свойство, определяющее, открыт ли popup  | 
| `aria-controls`  | `string`   | Свойство, указывающее на элемент с помощью id, который управляет видимостью popup trigger  | 

### `UseSelectComboboxProps<T extends HTMLElement>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `comboboxProps`  | `SelectComboboxProps<T>`   | Свойства, необходимые для доступности combobox элемента в составе select  | 
