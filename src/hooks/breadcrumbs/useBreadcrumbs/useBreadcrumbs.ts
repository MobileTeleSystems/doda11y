import { useBreadcrumbsProps } from '../useBreadcrumbsProps'
import { type UseBreadcrumbs, type UseBreadcrumbsOptions } from './types'

export const useBreadcrumbs = <T extends HTMLElement>({ label, labelledBy }: UseBreadcrumbsOptions): UseBreadcrumbs<T> => {
	const { navProps } = useBreadcrumbsProps({ label, labelledBy })

	return { navProps }
}
