import { useMemo } from 'react'
import { useMenuButtonControl } from '../useMenuButtonControl'
import { useMenuButtonProps } from '../useMenuButtonProps'
import { type UseMenuButton, type UseMenuButtonOptions, type UseMenuButtonUnionButtonProps } from './types'

export const useMenuButton = <T extends HTMLElement>({
	onOpen,
	onFocusLast,
	onFocusFirst,
	isOpen,
	popupType = 'menu',
	menuId,
	withSemanticRole,
	label,
	labelledBy
}: UseMenuButtonOptions): UseMenuButton<T> => {
	const { buttonProps } = useMenuButtonProps({ isOpen, popupType, menuId, withSemanticRole, label, labelledBy })
	const { onKeyDown } = useMenuButtonControl({
		onOpen,
		isOpen,
		onFocusFirst() {
			requestAnimationFrame(() => onFocusFirst())
		},
		onFocusLast() {
			requestAnimationFrame(() => onFocusLast())
		}
	})

	const unionMenuButtonProps: UseMenuButtonUnionButtonProps<T> = useMemo(() => ({
		...buttonProps,
		onKeyDown,
	}), [buttonProps, onKeyDown])

	return { buttonProps: unionMenuButtonProps }
}
