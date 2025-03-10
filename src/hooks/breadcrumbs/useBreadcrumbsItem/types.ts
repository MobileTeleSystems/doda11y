import type { UseBreadcrumbsItemProps, UseBreadcrumbsItemPropsOptions } from '../useBreadcrumbsItemProps'

export type UseBreadcrumbsItemOptions = UseBreadcrumbsItemPropsOptions

export type UseBreadcrumbsUnionItemProps<T extends HTMLElement> = UseBreadcrumbsItemProps<T>['itemProps']

export interface UseBreadcrumbsItem<T extends HTMLElement> {
	/** Свойства, необходимые для доступности item в составе компонента breadcrumbs */
	itemProps: UseBreadcrumbsUnionItemProps<T>
}
