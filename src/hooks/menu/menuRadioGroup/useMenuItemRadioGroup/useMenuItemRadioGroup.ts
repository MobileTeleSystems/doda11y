import { useMemo } from 'react'
import {
	UseMenuItemRadioGroup,
	UseMenuItemRadioGroupOptions, UseMenuItemRadioGroupUnionProps
} from './types'
import { useMenuItemRadioGroupControl } from '../useMenuItemRadioGroupControl'
import { useMenuItemRadioGroupProps } from '../useMenuItemRadioGroupProps'

export const useMenuItemRadioGroup = <T extends HTMLElement>({
	onActivate,
	withSemanticRole,
	label,
	labelledBy
}: UseMenuItemRadioGroupOptions): UseMenuItemRadioGroup<T> => {
	const { onKeyDown } = useMenuItemRadioGroupControl({ onActivate })
	const { menuItemRadioGroupProps } = useMenuItemRadioGroupProps({
		withSemanticRole,
		label,
		labelledBy
	})

	const unionMenuItemRadioGroupProps: UseMenuItemRadioGroupUnionProps<T> = useMemo(() => ({ ...menuItemRadioGroupProps, onKeyDown }), [menuItemRadioGroupProps, onKeyDown])

	return { menuItemRadioGroupProps: unionMenuItemRadioGroupProps }
}
