import { useMemo } from 'react'
import { type MenuProps, UseMenuProps, UseMenuPropsOptions } from './types'
import { useLabelsProps } from '../../../labels'

export const useMenuProps = ({
	withSemanticRole = true,
	label,
	labelledBy,
	orientation,
	isOpen,
	active,
}: UseMenuPropsOptions): UseMenuProps => {
	const { labelProps } = useLabelsProps({ labelledBy, label })

	const menuProps: MenuProps = useMemo(() => ({
		role: withSemanticRole ? 'menu' : undefined,
		orientation,
		...labelProps
	}), [withSemanticRole, labelProps, orientation, isOpen, active])

	return { menuProps }
}
