import { useMemo } from 'react'
import { useMenuItemCheckboxProps } from '../useMenuItemCheckboxProps'
import { UseMenuItemCheckbox, UseMenuItemCheckboxOptions, UseMenuItemCheckboxUnionProps } from './types'
import { useMenuItemCheckboxControl } from '../useMenuItemCheckboxControl'


export const useMenuItemCheckbox = <T extends HTMLElement>({
	withSemanticRole,
	label,
	labelledBy,
	checked,
	focusable,
	setSize,
	disabled,
	posInSet,
	onToggle
}: UseMenuItemCheckboxOptions): UseMenuItemCheckbox<T> => {
	const { menuItemCheckboxProps } = useMenuItemCheckboxProps({ withSemanticRole, label, labelledBy, checked, focusable, setSize, disabled, posInSet })
	const { onKeyDown } = useMenuItemCheckboxControl({ onToggle })

	const unionMenuItemCheckboxProps: UseMenuItemCheckboxUnionProps<T> = useMemo(() => ({ ...menuItemCheckboxProps, onKeyDown }), [menuItemCheckboxProps, onKeyDown])

	return { menuItemCheckboxProps: unionMenuItemCheckboxProps }
}
