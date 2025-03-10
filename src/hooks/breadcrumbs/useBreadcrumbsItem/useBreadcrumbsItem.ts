import { useBreadcrumbsItemProps } from '../useBreadcrumbsItemProps'
import { type UseBreadcrumbsItem, type UseBreadcrumbsItemOptions } from './types'

export const useBreadcrumbsItem = <T extends HTMLElement>({ isCurrent }: UseBreadcrumbsItemOptions): UseBreadcrumbsItem<T> => {
	const { itemProps } = useBreadcrumbsItemProps({ isCurrent })

	return { itemProps }
}
