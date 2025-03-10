import { useMemo } from 'react'
import {
	TreeItemProps,
	UseTreeItemProps, UseTreeItemPropsOptions
} from './types'
import { throwError } from '../../../../lib'

export const useTreeItemProps = <T extends HTMLElement>({ withSemanticRole = true, selected, checked, setSize, posInSet, focusable, level }: UseTreeItemPropsOptions): UseTreeItemProps<T> => {
	if (checked && selected) throwError('checked and selected cannot be passed at the same time')

	const treeItemProps: TreeItemProps<T> = useMemo(() => ({
		role: withSemanticRole ? 'treeitem' : undefined,
		tabIndex: focusable ? 0 : -1,
		'aria-checked': checked,
		'aria-selected': selected,
		'aria-level': level,
		'aria-setsize': setSize,
		'aria-posinset': posInSet
	}), [withSemanticRole, checked, selected, level, focusable, setSize, posInSet])

	return { treeItemProps }
}
