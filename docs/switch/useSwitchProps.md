---
outline: deep
---

# useSwitchProps

**useSwitchProps** - хук, предоставляющий свойства доступности для checkbox.

## API

|       |                                                                              |
| ----: |:-----------------------------------------------------------------------------|
| Type: | `<T extends HTMLElement>(options: UseSwitchPropsOptions): UseSwitchProps<T>` |

### `UseSwitchPropsOptions`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `checked`  | `boolean`   | Признак, определяющий, выбран switch. В случае реализации через input передавать признак в данное свойство не рекомендуется, так как в input уже есть свойство checked  | 
| `disabled`  | `boolean`   | Признак, определяющий, заблокирована ли в данный момент кнопка для выбора. В случае реализации через input передавать признак в данное свойство не рекомендуется, так как в input уже есть свойство disabled  | 
| `withSemanticRole`  | `boolean`   | Признак, использовать ли семантическую роль. В случае, если используется семантический тег (например `<button>` или `<article>`, лучше передать `false`)  | 
| `label`  | `string`   | Свойство, позволяющее добавить текстовое имя/назначение элементу, которое может быть прочитан программами чтения с экрана, чтобы обеспечить доступ к информации, которая может быть утрачена из-за ограничений восприятия.  | 
| `labelledBy`  | `string`   | Аналогично `aria-label`, позволяет добавить имя/назначение к элементу, однако ссылается на описание с помощью id  | 
| `description`  | `string`   | Свойство, позволяющее добавить текстовое описание (например, его предназначение) к элементу, которое может быть прочитан программами чтения с экрана, чтобы обеспечить доступ к информации, которая может быть утрачена из-за ограничений восприятия.  | 
| `describedBy`  | `string`   | Аналогично `aria-description`, позволяет добавить описание (например, его предназначение) к элементу, однако ссылается на описание с помощью id  | 

### `SwitchProps<T extends HTMLElement>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `role`  | `"switch"`   | Роль checkbox  | 
| `tabIndex`  | `0`   | Свойство, означающее, должен ли элемент участвовать в последовательности с помощью клавиатуры и в каком порядке  | 
| `aria-checked`  | `boolean \| "false" \| "true" \| "mixed"`   | Свойство aria, обозначающее, выбран ли элемент  | 
| `aria-disabled`  | `Booleanish`   | Свойство aria, обозначающее, заблокирована ли в данный момент кнопка для выбора  | 
| `aria-label`  | `string`   | Свойство, добавляющее текстовое имя/назначение элементу, которое может быть прочитан программами чтения с экрана, чтобы обеспечить доступ к информации, которая может быть утрачена из-за ограничений восприятия.  | 
| `aria-labelledby`  | `string`   | Аналогично `aria-label`, позволяет добавить текстовое имя/назначение элементу, однако ссылается на описание с помощью id  | 
| `aria-description`  | `string`   | Свойство, добавляющее текстовое имя/назначение элементу, которое может быть прочитан программами чтения с экрана, чтобы обеспечить доступ к информации, которая может быть утрачена из-за ограничений восприятия.  | 
| `aria-describedby`  | `string`   | Аналогично `aria-label`, позволяет добавить текстовое имя/назначение элементу, однако ссылается на описание с помощью id  | 

### `UseSwitchProps<T extends HTMLElement>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `switchProps`  | `SwitchProps<T>`   | Свойства, необходимые для доступности  | 
