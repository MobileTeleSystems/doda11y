import { useMemo } from 'react'
import { useTabPanelProps } from '../useTabPanelProps'
import {
	UseTabPanel,
	UseTabPanelOptions,
	UseTabPanelUnionProps
} from './types'

export const useTabPanel = <T extends HTMLElement>(options?: UseTabPanelOptions): UseTabPanel<T> => {
	const { label, labelledBy, withSemanticRole = true } = options ?? {}

	const { tabPanelProps } = useTabPanelProps({ label, withSemanticRole, labelledBy })

	const unionTabPanelProps: UseTabPanelUnionProps<T> = useMemo(
		() => tabPanelProps,
		[tabPanelProps]
	)

	return { tabPanelProps: unionTabPanelProps }
}
