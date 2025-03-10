import { useMemo } from 'react'
import { useMenuItemControl } from '../useMenuItemControl'
import { useMenuItemProps } from '../useMenuItemProps'
import { UseMenuItem, UseMenuItemOptions, UseMenuItemUnionProps } from './types'

export const useMenuItem = <T extends HTMLElement>({
	withSemanticRole,
	label,
	labelledBy,
	onActivate,
	expanded,
	setSize,
	posInSet,
	popup,
	level,
	focusable
}: UseMenuItemOptions): UseMenuItem<T> => {
	const { menuItemProps } = useMenuItemProps({
		withSemanticRole,
		label,
		labelledBy,
		expanded,
		setSize,
		posInSet,
		popup,
		level,
		focusable
	})
	const { onKeyDown } = useMenuItemControl({ onActivate })

	const unionMenuItemProps: UseMenuItemUnionProps<T> = useMemo(() => ({
		...menuItemProps,
		onKeyDown,
	}), [onKeyDown, menuItemProps])

	return { menuItemProps: unionMenuItemProps }
}
