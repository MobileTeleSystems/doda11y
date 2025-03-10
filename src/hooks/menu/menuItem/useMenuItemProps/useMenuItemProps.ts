import { useMemo } from 'react'
import { useLabelsProps } from '../../../labels'
import { MenuItemProps, UseMenuItemProps, UseMenuItemPropsOptions } from './types'

export const useMenuItemProps = <T extends HTMLElement>({
	withSemanticRole = true, setSize, level, posInSet, focusable, popup, expanded, label, labelledBy
}: UseMenuItemPropsOptions): UseMenuItemProps<T> => {
	const { labelProps } = useLabelsProps({ labelledBy, label })

	const menuItemProps: MenuItemProps<T> = useMemo(() => ({
		...labelProps,
		role: withSemanticRole ? 'menuitem' : undefined,
		tabIndex: focusable ? 0 : -1,
		'aria-level': level,
		'aria-setsize': setSize,
		'aria-posinset': posInSet,
		'aria-haspopup': popup,
		'aria-expanded': expanded,
	}), [withSemanticRole, labelProps, level, setSize, posInSet, focusable, popup, expanded])

	return { menuItemProps }
}
