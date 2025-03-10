import { useMemo } from 'react'
import { usePopupTriggerProps } from '../../../popup'
import { type MenuButtonProps, UseMenuButtonProps, UseMenuButtonPropsOptions } from './types'
import { useLabelsProps } from '../../../labels'

export const useMenuButtonProps = <T extends HTMLElement>({
	isOpen,
	popupType = 'menu',
	menuId,
	withSemanticRole = true,
	label,
	labelledBy,
}: UseMenuButtonPropsOptions): UseMenuButtonProps<T> => {
	const { triggerProps } = usePopupTriggerProps({ isOpen, type: popupType === 'menu' ? true : popupType, popupId: menuId })
	const { labelProps } = useLabelsProps({ labelledBy, label })

	const buttonProps: MenuButtonProps<T> = useMemo(() => ({
		...triggerProps,
		...labelProps,
		role: withSemanticRole ? 'button' : undefined,
	}), [triggerProps, withSemanticRole, labelProps])

	return { buttonProps }
}
