---
outline: deep
---

# useBreadcrumbs

**useBreadcrumbs** - хук, предоставляющий доступность для контейнера хлебных крошек.

## API

### `UseBreadcrumbsOptions`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `label`  | `string`   | Свойство, позволяющее добавить текстовое имя/назначение элементу, которое может быть прочитан программами чтения с экрана, чтобы обеспечить доступ к информации, которая может быть утрачена из-за ограничений восприятия.  | 
| `labelledBy`  | `string`   | Аналогично `aria-label`, позволяет добавить имя/назначение к элементу, однако ссылается на описание с помощью id  | 

### `UseBreadcrumbsUnionNavProps<T extends HTMLElement>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `aria-label`  | `string`   | Свойство, добавляющее текстовое имя/назначение элементу, которое может быть прочитан программами чтения с экрана, чтобы обеспечить доступ к информации, которая может быть утрачена из-за ограничений восприятия.  | 
| `aria-labelledby`  | `string`   | Аналогично `aria-label`, позволяет добавить текстовое имя/назначение элементу, однако ссылается на описание с помощью id  | 

### `UseBreadcrumbs<T extends HTMLElement>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `navProps`  | `UseBreadcrumbsUnionNavProps<T>`   | Свойства, необходимые для адаптивности nav элемента в breadcrumbs  | 

## Пример

Использование `label` рекомендуется для четкого определения назначения элемента.

**Breadcrumbs.tsx**

```tsx
export const Breadcrumbs: FC<PropsWithChildren> = ({ children }) => {
	const { navProps } = useBreadcrumbs({ label: 'Хлебные крошки' })

	return (
        <nav {...navProps}>
            <ol>{children}</ol>
        </nav>
	)
}
```

Использование `labbelledBy` необходимо, когда описание для элемента находится в другом элементе.

**Breadcrumbs.tsx**

```tsx
export const Breadcrumbs: FC<PropsWithChildren> = ({children}) => {
    const id = useId()
    const {navProps} = useBreadcrumbs({labelledBy: id})

    return (
        <div>
            <p id={id}>Хлебные крошки</p>
            <nav {...navProps}>
                <ol>{children}</ol>
            </nav>
        </div>
    )
}
```
