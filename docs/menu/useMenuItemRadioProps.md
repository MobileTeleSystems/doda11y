---
outline: deep
---

# useMenuItemRadioProps

**useMenuItemRadioProps** - хук, предоставляющий доступность элементу меню, являющемуся радио-кнопкой.

## API

|       |                                                                                  |
| ----: |:---------------------------------------------------------------------------------|
| Type: | `<T extends HTMLElement>(options: UseMenuItemRadioPropsOptions): UseMenuItemRadioProps<T>` |

### `UseMenuItemRadioPropsOptions`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `checked`  | `boolean`   | Признак, определяющий, выбрана ли радио-кнопка  | 
| `disabled`  | `boolean`   | Признак, определяющий, заблокирована ли в данный момент кнопка для выбора  | 
| `posInSet`  | `number`   | Свойство aria, определяющее позицию элемента в коллекции  | 
| `setSize`  | `number`   | Свойство aria, определяющее количество элементов в коллекции  | 
| `withSemanticRole`  | `boolean`   | Признак, использовать ли семантическую роль. В случае, если используется семантический тег (например `<menu>` или `<article>`, лучше передать `false`)  | 
| `focusable`  | `boolean`   | Признак, находится ли активный фокус на данном элементе.  | 
| `level`  | `number`   | Свойство, обозначающее уровень вложенности элемента  | 

### `MenuItemRadioProps<T extends HTMLElement>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `role`  | `"menuitemradio"`   | Роль menuitemradio  | 
| `tabIndex`  | `0 \| -1`   | Свойство, означающее, должен ли элемент участвовать в последовательности с помощью клавиатуры и в каком порядке  | 
| `aria-level`  | `number`   | Свойство aria, определяющее вложенность элемента  | 
| `aria-haspopup`  | `boolean \| "dialog" \| "menu" \| "listbox" \| "tree" \| "grid" \| "false" \| "true"`   | Свойство aria, обозначающее тип popup  | 
| `aria-checked`  | `boolean \| "false" \| "true" \| "mixed"`   | Свойство aria, определяющее, выбрана ли радио-кнопка  | 
| `aria-disabled`  | `Booleanish`   | Свойство aria, определяющее, заблокирована ли в данный момент кнопка для выбора  | 
| `aria-posinset`  | `number`   | Свойство aria, определяющее позицию элемента в коллекции  | 
| `aria-setsize`  | `number`   | Свойство aria, определяющее количество элементов в коллекции  | 

### `UseMenuItemRadioProps<T extends HTMLElement>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `menuItemRadioProps`  | `MenuItemRadioProps<T>`   | Свойства, необходимые для доступности menu  | 
