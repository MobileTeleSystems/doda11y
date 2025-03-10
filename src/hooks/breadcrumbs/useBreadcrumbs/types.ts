import type { UseBreadcrumbsProps, UseBreadcrumbsPropsOptions } from '../useBreadcrumbsProps'

export type UseBreadcrumbsOptions = UseBreadcrumbsPropsOptions

export type UseBreadcrumbsUnionNavProps<T extends HTMLElement> = UseBreadcrumbsProps<T>['navProps']

export interface UseBreadcrumbs<T extends HTMLElement> {
	/** Свойства, необходимые для адаптивности nav элемента в breadcrumbs */
	navProps: UseBreadcrumbsUnionNavProps<T>
}
