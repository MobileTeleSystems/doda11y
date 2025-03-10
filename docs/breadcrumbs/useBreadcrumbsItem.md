---
outline: deep
---

# useBreadcrumbsItem

**useBreadcrumbsItem** - хук, предоставляющий доступность для элемента хлебных крошек.

## API

|       |                                                                                      |
| ----: |:-------------------------------------------------------------------------------------|
| Type: | `<T extends HTMLElement>(options: UseBreadcrumbsItemOptions): UseBreadcrumbsItem<T>` |

### `UseBreadcrumbsItemOptions`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `isCurrent`  | `boolean`   | Указывает ли элемент breadcrumbs на текущую страницу  | 

### `UseBreadcrumbsUnionItemProps<T extends HTMLElement>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `aria-current`  | `"page"`   | Свойство, означающее, что пользователь находится на определенной странице из группы  | 

### `UseBreadcrumbsItem<T extends HTMLElement>`

| Имя               | Тип      | Описание    |
|:-------------------|:-----------|:-----------|
| `itemProps`  | `UseBreadcrumbsUnionItemProps<T>`   | Свойства, необходимые для доступности item в составе компонента breadcrumbs  | 


## Пример

Здесь для определения является ли элемент хлебных крошек текущим можно использовать хук `useLocation`, если у вас на проекте `React Router`. Определение, является ли элемент текущим зависит от вашей реализации и используемых инструментов.

**BreadcrumbsItem.tsx**

```tsx

interface BreadcrumbsItemProps {
	href: string
}

export const BreadcrumbsItem: FC<PropsWithChildren<BreadcrumbsItemProps>> = ({ children, href }) => {
	const location = useLocation()
	const { itemProps } = useBreadcrumbsItem({ isCurrent: location.pathname === href })

	return (
        <li>
            <a {...itemProps} href={href}>
                {children}
            </a>
        </li>
	)
}
```
