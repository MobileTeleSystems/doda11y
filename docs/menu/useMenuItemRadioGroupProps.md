---
outline: deep
---

# useMenuItemCheckboxProps

**useMenuItemCheckboxProps** - хук, предоставляющий свойство доступности для меню.

## API

|       |                                                                                  |
| ----: |:---------------------------------------------------------------------------------|
| Type: | `<T extends HTMLElement>(options: UseMenuItemRadioGroupPropsOptions): UseMenuItemRadioGroupProps<T>` |

### `UseMenuItemRadioGroupPropsOptions`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `withSemanticRole`  | `boolean`   | Признак, использовать ли семантическую роль. В случае, если используется семантический тег (например `<menu>` или `<article>`, лучше передать `false`)  | 
| `label`  | `string`   | Свойство, позволяющее добавить текстовое имя/назначение элементу, которое может быть прочитан программами чтения с экрана, чтобы обеспечить доступ к информации, которая может быть утрачена из-за ограничений восприятия.  | 
| `labelledBy`  | `string`   | Аналогично `aria-label`, позволяет добавить имя/назначение к элементу, однако ссылается на описание с помощью id  | 

### `MenuItemRadioGroupProps<T extends HTMLElement>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `aria-label`  | `string`   | Свойство, добавляющее текстовое имя/назначение элементу, которое может быть прочитан программами чтения с экрана, чтобы обеспечить доступ к информации, которая может быть утрачена из-за ограничений восприятия.  | 
| `aria-labelledby`  | `string`   | Аналогично `aria-label`, позволяет добавить текстовое имя/назначение элементу, однако ссылается на описание с помощью id  | 
| `role`  | `"group"`   | Роль group  | 

### `UseMenuItemRadioGroupProps<T extends HTMLElement>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `menuItemRadioGroupProps`  | `MenuItemRadioGroupProps<T>`   | Свойства, необходимые для доступности menu  | 
