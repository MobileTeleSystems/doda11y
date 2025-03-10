import { useMemo } from 'react'
import { useMenuControl } from '../useMenuControl'
import { useMenuProps } from '../useMenuProps'
import {
	UseMenu,
	UseMenuOptions,
	UseMenuUnionProps
} from './types'
import { TreeItem } from '../../../../lib'

export const useMenu = <T extends HTMLElement, I extends TreeItem = TreeItem>({
	withSemanticRole,
	label,
	labelledBy,
	orientation,
	isOpen,
	onHide,
	onExpand,
	onActivate,
	onClose,
	expanded,
	closeOnEsc,
	active,
	triggerElement,
	changeActive,
	changeFocus,
	tree,
}: UseMenuOptions<I>): UseMenu => {
	const { menuProps } = useMenuProps({ withSemanticRole, label, labelledBy, orientation, isOpen, active })
	const { onKeyDown, onBlur } = useMenuControl<T, I>({
		onExpand,
		onHide,
		onClose,
		expanded,
		tree,
		triggerElement,
		active,
		changeActive,
		changeFocus,
		onActivate,
		orientation,
		closeOnEsc
	})

	const unionMenuProps: UseMenuUnionProps = useMemo(() => ({
		...menuProps,
		onKeyDown,
		onBlur,
	}), [onKeyDown, onBlur, menuProps])

	return { menuProps: unionMenuProps }
}
