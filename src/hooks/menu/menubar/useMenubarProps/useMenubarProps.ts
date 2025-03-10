import { useMemo } from 'react'
import {
	MenubarProps,
	UseMenubarProps,
	UseMenubarPropsOptions,
} from './types'
import { useLabelsProps } from '../../../labels'

export const useMenubarProps = ({
	withSemanticRole = true,
	label,
	labelledBy,
	orientation,
	active,
}: UseMenubarPropsOptions): UseMenubarProps => {
	const { labelProps } = useLabelsProps({ labelledBy, label })

	const menubarProps: MenubarProps = useMemo(() => ({
		role: withSemanticRole ? 'menubar' : undefined,
		orientation,
		tabIndex: active ? 0 : -1,
		...labelProps
	}), [withSemanticRole, labelProps, orientation, active])

	return { menubarProps }
}
