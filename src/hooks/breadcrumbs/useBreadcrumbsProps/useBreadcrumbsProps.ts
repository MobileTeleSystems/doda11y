import { useMemo } from 'react'
import { useLabelsProps } from '../../labels'
import { NavProps, UseBreadcrumbsProps, UseBreadcrumbsPropsOptions } from './types'

export const useBreadcrumbsProps = <T extends HTMLElement>({ label, labelledBy }: UseBreadcrumbsPropsOptions): UseBreadcrumbsProps<T> => {
	const { labelProps } = useLabelsProps({ labelledBy, label })

	const navProps: NavProps<T> = useMemo(() => labelProps, [labelProps])

	return { navProps }
}
