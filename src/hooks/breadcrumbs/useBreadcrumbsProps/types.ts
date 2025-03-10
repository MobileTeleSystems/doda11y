import type { LabelsProps, UseLabelsPropsOptions } from '../../labels'

export type UseBreadcrumbsPropsOptions = UseLabelsPropsOptions

export type NavProps<T extends HTMLElement> = LabelsProps<T>

export interface UseBreadcrumbsProps<T extends HTMLElement> {
	/** Свойства, необходимые для доступности nav в составе компонента breadcrumbs */
	navProps: NavProps<T>
}
