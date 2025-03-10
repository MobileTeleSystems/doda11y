import { usePopupTriggerProps } from '../usePopupTriggerProps'
import { UsePopupTrigger, UsePopupTriggerOptions, UsePopupTriggerUnionTriggerProps } from './types'
import { usePopupTriggerControl } from '../usePopupTriggerControl'
import { useMemo } from 'react'

export const usePopupTrigger = <T extends HTMLElement>({ type, isOpen, popupId, onOpen, onClose, isOpenOnEnterOrSpace, closeOnEsc, isFocusFirstOnEnterOrSpace, onFocusFirst, onFocusLast }: UsePopupTriggerOptions<T>): UsePopupTrigger<T> => {
	const { triggerProps } = usePopupTriggerProps({ type, isOpen, popupId })
	const { onKeyDown } = usePopupTriggerControl({ onOpen, onClose, isOpenOnEnterOrSpace, closeOnEsc, isFocusFirstOnEnterOrSpace, onFocusFirst, onFocusLast, isOpen })

	const unionPopupTriggerProps: UsePopupTriggerUnionTriggerProps<T> = useMemo(() => ({
		...triggerProps,
		onKeyDown
	}), [triggerProps, onKeyDown])

	return { triggerProps: unionPopupTriggerProps }
}
