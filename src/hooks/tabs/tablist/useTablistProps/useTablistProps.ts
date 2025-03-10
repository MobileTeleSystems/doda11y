import { useMemo } from 'react'
import {
	TablistProps,
	UseTablistProps,
	UseTablistPropsOptions,
} from './types'
import { useLabelsProps } from '../../../labels'

export const useTablistProps = <T extends HTMLElement>({ labelledBy, label, withSemanticRole = true, orientation = 'horizontal', active }: UseTablistPropsOptions): UseTablistProps<T> => {
	const { labelProps } = useLabelsProps({ labelledBy, label })
 
	const tablistProps: TablistProps<T> = useMemo(
		() =>
			({
				'aria-orientation': orientation,
				role: withSemanticRole ? 'tablist' : undefined,
				tabIndex: !active ? 0 : -1,
				...labelProps
			}),
		[withSemanticRole, orientation, active, labelProps]
	)

	return { tablistProps }
}
