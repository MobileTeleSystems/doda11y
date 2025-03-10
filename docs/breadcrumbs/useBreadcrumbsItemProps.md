---
outline: deep
---

# useBreadcrumbsItemProps

**useBreadcrumbsItemProps** - хук, предоставляющий свойства доступности для элемента хлебных крошек.

## API

|       |                                                                                                |
| ----: |:-----------------------------------------------------------------------------------------------|
| Type: | `<T extends HTMLElement>(options: UseBreadcrumbsItemPropsOptions): UseBreadcrumbsItemProps<T>` |

### `UseBreadcrumbsItemPropsOptions`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `isCurrent`  | `boolean`   | Указывает ли элемент breadcrumbs на текущую страницу  | 

### `BreadcrumbsItemProps<T extends HTMLElement>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `aria-current`  | `"page"`   | Свойство, означающее, что пользователь находится на определенной странице из группы  | 

### `UseBreadcrumbsItemProps<T extends HTMLElement>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `itemProps`  | `BreadcrumbsItemProps<T>`   | Свойства, необходимые для доступности item в составе компонента breadcrumbs  |
