import { useMemo } from 'react'
import { useMenubarControl } from '../useMenubarControl'
import { useMenubarProps } from '../useMenubarProps'
import {
	UseMenubar, UseMenubarOptions, UseMenubarUnionProps,
} from './types'
import { TreeItem } from '../../../../lib'

export const useMenubar = <T extends HTMLElement, I extends TreeItem = TreeItem>({
	withSemanticRole,
	label,
	labelledBy,
	orientation,
	onHide,
	onHideAll,
	onExpand,
	onActivate,
	expanded,
	active,
	changeActive,
	changeFocus,
	closeOnEsc,
	tree,
}: UseMenubarOptions<I>): UseMenubar => {
	const { menubarProps } = useMenubarProps({ withSemanticRole, label, labelledBy, orientation })
	const { onKeyDown, onFocus, onBlur } = useMenubarControl<T, I>({
		onExpand,
		onHideAll,
		onHide,
		expanded,
		tree,
		active,
		changeActive,
		changeFocus,
		onActivate,
		orientation,
		closeOnEsc,
	})

	const unionMenubarProps: UseMenubarUnionProps = useMemo(() => ({
		...menubarProps,
		onKeyDown,
		onFocus,
		onBlur,
	}), [onKeyDown, onFocus, menubarProps])

	return { menubarProps: unionMenubarProps }
}
