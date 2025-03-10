import { useMemo } from 'react'
import {
	SubTreeProps,
	UseSubTreeProps, UseSubTreePropsOptions,
} from './types'
import { throwError } from '../../../../lib'

export const useSubTreeProps = <T extends HTMLElement>({ withSemanticRole = true, selected, checked, setSize, posInSet, level, expanded }: UseSubTreePropsOptions): UseSubTreeProps<T> => {
	if (checked && selected) throwError('isChecked and isSelected cannot be passed at the same time')

	const subTreeProps: SubTreeProps<T> = useMemo(() => ({
		role: withSemanticRole ? 'treeitem' : undefined,
		tabIndex: -1,
		'aria-checked': checked,
		'aria-selected': selected,
		'aria-level': level,
		'aria-setsize': setSize,
		'aria-posinset': posInSet,
		'aria-expanded': expanded
	}), [withSemanticRole, checked, selected, level, setSize, posInSet, expanded])

	return { subTreeProps }
}
