import { useMemo } from 'react'
import {
	TreeProps, UseTreeProps,
	UseTreePropsOptions
} from './types'
import { useLabelsProps } from '../../../labels'

export const useTreeProps = <T extends HTMLElement>({ label, labelledBy, multiSelectable, withSemanticRole = true, orientation = 'vertical', active }: UseTreePropsOptions): UseTreeProps<T> => {
	const { labelProps } = useLabelsProps({ label, labelledBy })

	const treeProps: TreeProps<T> = useMemo(() => ({
		...labelProps,
		role: withSemanticRole ? 'tree' : undefined,
		tabIndex: !active ? 0 : -1,
		'aria-multiselectable': multiSelectable,
		'aria-orientation': orientation,
	}), [labelProps, withSemanticRole, multiSelectable, orientation, active])

	return { treeProps }
}
