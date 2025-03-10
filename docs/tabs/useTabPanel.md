---
outline: deep
---

# useTabPanel

**useTabPanel** - хук, предоставляющий доступность Tab Panel.

## API

|       |                                                              |
| ----: |:-------------------------------------------------------------|
| Type: | `<T extends HTMLElement>(options: UseTabPanelOptions): UseTabPanel<T>` |

### `UseTabPanelOptions`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `withSemanticRole`  | `boolean`   | Признак, использовать ли семантическую роль. В случае, если используется семантический тег (например `<button>` или `<article>`, лучше передать `false`)  | 
| `label`  | `string`   | Свойство, позволяющее добавить текстовое имя/назначение элементу, которое может быть прочитан программами чтения с экрана, чтобы обеспечить доступ к информации, которая может быть утрачена из-за ограничений восприятия.  | 
| `labelledBy`  | `string`   | Аналогично `aria-label`, позволяет добавить имя/назначение к элементу, однако ссылается на описание с помощью id  | 

### `UseTabPanelUnionProps<T extends HTMLElement>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `role`  | `"tabpanel"`   | Роль Tab Panel  | 
| `aria-label`  | `string`   | Свойство, добавляющее текстовое имя/назначение элементу, которое может быть прочитан программами чтения с экрана, чтобы обеспечить доступ к информации, которая может быть утрачена из-за ограничений восприятия.  | 
| `aria-labelledby`  | `string`   | Аналогично `aria-label`, позволяет добавить текстовое имя/назначение элементу, однако ссылается на описание с помощью id  | 

### `UseTabPanel<T extends HTMLElement>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `tabPanelProps`  | `TabPanelProps<T>`   | Свойства, необходимые для доступности Tab  | 

## Пример

`useTabPanel` используется для обеспечения веб-доступности Tab Panel. 

**TabPanel.tsx**

```tsx
const TabPanel: FC<PropsWithChildren<{ open?: boolean, id?: string, labelledBy?: string }>> = ({ children, open, id, labelledBy }) => {
  const { tabPanelProps } = useTabPanel({ labelledBy })

  return <div {...tabPanelProps} id={id} hidden={!open}>{children}</div>
}
```
