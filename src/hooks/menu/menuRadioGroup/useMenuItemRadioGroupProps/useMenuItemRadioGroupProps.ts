import { useMemo } from 'react'
import {
	MenuItemRadioGroupProps,
	UseMenuItemRadioGroupProps,
	UseMenuItemRadioGroupPropsOptions,
} from './types'
import { useLabelsProps } from '../../../labels'
import { useGroupProps } from '../../../group'

export const useMenuItemRadioGroupProps = <T extends HTMLElement>({
	withSemanticRole = true,
	label,
	labelledBy,
}: UseMenuItemRadioGroupPropsOptions): UseMenuItemRadioGroupProps<T> => {
	const { labelProps } = useLabelsProps({ labelledBy, label })
	const { groupProps } = useGroupProps({ withSemanticRole })

	const menuItemRadioGroupProps: MenuItemRadioGroupProps<T> = useMemo(() => ({
		...labelProps,
		...groupProps
	}), [withSemanticRole])

	return { menuItemRadioGroupProps }
}
