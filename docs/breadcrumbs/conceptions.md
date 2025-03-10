---
outline: deep
---

# Breadcrumbs

![An image](/breadcrumbs.png)

**Breadcrumbs (хлебные крошки)** - элемент, содержащий в себе список ссылок на родительские страницы текущей страницы в иерархическом порядке.

[W3C ARIA Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/breadcrumb/)

## A11Y

Для реализации контейнера хлебных крошек рекомендуется использовать семантический тег `<nav>`, а также теги `<ul>` (или `<ol>`, в зависимости от реализации) и `<li>`. Так мы сможем обозначить, что блок с хлебными крошками предоставляет навигацию по сайту, а также содержит список ссылок.

Для создания самих элементов хлебных крошек рекомендуется использовать ссылки, если же ссылка в списке хлебных крошек является ссылкой на текущую страницу, то она должна иметь аттрибут `aria-current` со значением `page`.

## Пример

Для реализации Breadcrumbs, соответствующих условиям веб-доступности, необходимо использовать `useBreadcrumb()` для контейнера и `useBreadcrumbsItem()` для элемента хлебных крошек.

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

## Особенности

- Поддержка необходимых `role` для элементов
- Поддержка необходимых `aria` аттрибутов для доступности
