import { useMemo } from 'react'
import {
	TabProps,
	UseTabProps,
	UseTabPropsOptions,
} from './types'
import { useLabelsProps } from '../../../labels'

export const useTabProps = <T extends HTMLElement>({ labelledBy, label, withSemanticRole = true, popupType, controls, selected, focusable }: UseTabPropsOptions): UseTabProps<T> => {
	const { labelProps } = useLabelsProps({ labelledBy, label })
 
	const tabProps: TabProps<T> = useMemo(
		() =>
			({
				role: withSemanticRole ? 'tab' : undefined,
				tabIndex: focusable ? 0 : -1,
				'aria-controls': controls,
				'aria-selected': selected,
				'aria-haspopup': popupType,
				...labelProps,
			}),
		[withSemanticRole, controls, selected, popupType, labelProps, focusable]
	)

	return { tabProps }
}
