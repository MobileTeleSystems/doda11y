---
outline: deep
---

# useMenuProps

**useMenuProps** - хук, предоставляющий свойство доступности для меню.

## API

|       |                                                            |
| ----: |:-----------------------------------------------------------|
| Type: | `(options: UseMenuPropsOptions): UseMenuProps` |

### `UseMenuPropsOptions`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `withSemanticRole`  | `boolean`   | Признак, использовать ли семантическую роль.  | 
| `isOpen`  | `boolean`   | Признак, открыто ли меню.  | 
| `orientation`  | `Orientation`   | Свойство, определяющее направление меню. По умолчанию - 'vertical'  | 
| `active`  | `string`   | Свойство, обозначающее активный элемент  | 
| `label`  | `string`   | Свойство, позволяющее добавить текстовое имя/назначение элементу, которое может быть прочитан программами чтения с экрана, чтобы обеспечить доступ к информации, которая может быть утрачена из-за ограничений восприятия.  | 
| `labelledBy`  | `string`   | Аналогично `aria-label`, позволяет добавить имя/назначение к элементу, однако ссылается на описание с помощью id  | 

### `MenuProps`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `role`  | `"menu"`   | Роль menu  | 
| `tabIndex`  | `0 \| -1`   | Свойство, означающее, должен ли элемент участвовать в последовательности с помощью клавиатуры и в каком порядке  | 

### `UseMenuProps`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `menuProps`  | `MenuProps`   | Свойства, необходимые для доступности menu  | 
