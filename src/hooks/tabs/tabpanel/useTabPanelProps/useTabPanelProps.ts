import { useMemo } from 'react'
import {
	TabPanelProps,
	UseTabPanelProps,
	UseTabPanelPropsOptions,
} from './types'
import { useLabelsProps } from '../../../labels'

export const useTabPanelProps = <T extends HTMLElement>({ labelledBy, label, withSemanticRole = true }: UseTabPanelPropsOptions): UseTabPanelProps<T> => {
	const { labelProps } = useLabelsProps({ labelledBy, label })
 
	const tabPanelProps: TabPanelProps<T> = useMemo(
		() =>
			({
				role: withSemanticRole ? 'tabpanel' : undefined,
				...labelProps,
			}),
		[withSemanticRole, labelProps]
	)

	return { tabPanelProps }
}
