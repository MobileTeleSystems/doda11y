import { useMemo } from 'react'
import type { PopupTriggerProps, UsePopupTriggerProps, UsePopupTriggerPropsOptions } from './types'

export const usePopupTriggerProps = <T extends HTMLElement>({ type, isOpen, popupId }: UsePopupTriggerPropsOptions<T>): UsePopupTriggerProps<T> => {
	const triggerProps: PopupTriggerProps<T> = useMemo(() => ({
		'aria-haspopup': type,
		'aria-expanded': isOpen,
		'aria-controls': popupId,
	}), [isOpen, popupId, type]) 

	return { triggerProps }
}
