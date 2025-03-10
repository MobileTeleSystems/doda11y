import { useMemo } from 'react'
import {
	SubmenuProps,
	UseSubmenuProps,
	UseSubmenuPropsOptions
} from './types'
import { throwError } from '../../../../lib'

export const useSubmenuProps = <T extends HTMLElement>({ withSemanticRole = true, selected, checked, setSize, posInSet, level, expanded }: UseSubmenuPropsOptions): UseSubmenuProps<T> => {
	if (checked && selected) throwError('isChecked and isSelected cannot be passed at the same time')

	const submenuProps: SubmenuProps<T> = useMemo(() => ({
		role: withSemanticRole ? 'menu' : undefined,
		tabIndex: -1,
		'aria-checked': checked,
		'aria-selected': selected,
		'aria-level': level,
		'aria-setsize': setSize,
		'aria-posinset': posInSet,
		'aria-expanded': expanded
	}), [withSemanticRole, checked, selected, level, setSize, posInSet, expanded])

	return { submenuProps }
}
