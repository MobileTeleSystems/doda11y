import { useMemo } from 'react'
import { useMenuItemRadioProps } from '../useMenuItemRadioProps'
import {
	UseMenuItemRadio,
	UseMenuItemRadioOptions, UseMenuItemRadioUnionProps
} from './types'
import { useMenuItemRadioControl } from '../useMenuItemRadioControl'

export const useMenuItemRadio = <T extends HTMLElement>({
	withSemanticRole,
	label,
	labelledBy,
	checked,
	focusable,
	setSize,
	disabled,
	posInSet,
	onActivate
}: UseMenuItemRadioOptions): UseMenuItemRadio<T> => {
	const { menuItemRadioProps } = useMenuItemRadioProps({ withSemanticRole, label, labelledBy, checked, focusable, setSize, disabled, posInSet })
	const { onKeyDown } = useMenuItemRadioControl({ onActivate })

	const unionMenuItemRadioProps: UseMenuItemRadioUnionProps<T> = useMemo(() => ({ onKeyDown, ...menuItemRadioProps }), [menuItemRadioProps, onKeyDown])

	return { menuItemRadioProps: unionMenuItemRadioProps }
}
