import { useMemo } from 'react'
import {
	MenuItemRadioProps,
	UseMenuItemRadioProps,
	UseMenuItemRadioPropsOptions
} from './types'
import { useRadioProps } from '../../../radio'

export const useMenuItemRadioProps = <T extends HTMLElement>({
	withSemanticRole = true,
	label,
	labelledBy,
	disabled,
	checked,
	posInSet,
	setSize,
	focusable,
	level
}: UseMenuItemRadioPropsOptions): UseMenuItemRadioProps<T> => {
	const { radioProps } = useRadioProps({ checked, posInSet, setSize, disabled, label, labelledBy, withSemanticRole: false })

	const menuItemRadioProps: MenuItemRadioProps<T> = useMemo(() => ({
		...radioProps,
		role: withSemanticRole ? 'menuitemradio' : undefined,
		tabIndex: focusable ? 0 : -1,
		'aria-level': level,
	}), [withSemanticRole, radioProps, focusable, level])

	return { menuItemRadioProps }
}
