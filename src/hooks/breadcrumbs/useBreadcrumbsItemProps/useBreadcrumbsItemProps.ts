import { useMemo } from 'react'
import { BreadcrumbsItemProps, UseBreadcrumbsItemProps, UseBreadcrumbsItemPropsOptions } from './types'

export const useBreadcrumbsItemProps = <T extends HTMLElement>({ isCurrent }: UseBreadcrumbsItemPropsOptions): UseBreadcrumbsItemProps<T> => {
	const itemProps: BreadcrumbsItemProps<T> = useMemo(() => ({
		'aria-current': isCurrent ? 'page' as const : undefined,
	}), [isCurrent])

	return { itemProps }
}
