import { useMemo } from 'react'
import {
	MenuItemCheckboxProps,
	UseMenuItemCheckboxProps, UseMenuItemCheckboxPropsOptions,
} from './types'
import { useCheckboxProps } from '../../../checkbox'

export const useMenuItemCheckboxProps = <T extends HTMLElement>({
	withSemanticRole = true,
	label,
	labelledBy,
	disabled,
	checked,
	posInSet,
	setSize,
	focusable,
	level
}: UseMenuItemCheckboxPropsOptions): UseMenuItemCheckboxProps<T> => {
	const { checkboxProps } = useCheckboxProps({ checked, posInSet, setSize, disabled, label, labelledBy, withSemanticRole: false })

	const menuItemCheckboxProps: MenuItemCheckboxProps<T> = useMemo(() => ({
		...checkboxProps,
		role: withSemanticRole ? 'menuitemcheckbox' : undefined,
		tabIndex: focusable ? 0 : -1,
		'aria-level': level,
	}), [withSemanticRole, checkboxProps, focusable, level])

	return { menuItemCheckboxProps }
}
