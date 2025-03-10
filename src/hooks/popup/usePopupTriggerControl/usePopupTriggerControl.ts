import { KeyboardEvent, useCallback } from 'react'
import { SpecialKeys } from '../../../constants'
import type { UsePopupTriggerControl, UsePopupTriggerControlOptions } from './types'

export const usePopupTriggerControl = <T extends HTMLElement>({
	onOpen,
	onClose,
	isOpen,
	onFocusFirst,
	onFocusLast,
	isOpenOnEnterOrSpace = true,
	isFocusFirstOnEnterOrSpace = true,
	closeOnEsc = true,
	preventDefault = true
}: UsePopupTriggerControlOptions): UsePopupTriggerControl => {
	const onKeyDown = useCallback(
		(e: KeyboardEvent<T>) => {
			switch (e.key) { 
			case SpecialKeys.ENTER:
			case SpecialKeys.SPACE: {
				if (!isOpen && isOpenOnEnterOrSpace) {
					if (preventDefault) e.preventDefault()
					onOpen()
				}
				if (isFocusFirstOnEnterOrSpace) {
					if (preventDefault) e.preventDefault()
					onFocusFirst?.()
				}

				break
			}
			case SpecialKeys.ARROW_DOWN: {
				if (preventDefault) e.preventDefault()
				onOpen()
				onFocusFirst?.()

				break
			}
			case SpecialKeys.ARROW_UP: {
				if (preventDefault) e.preventDefault()
				onOpen()
				onFocusLast?.()

				break
			}
			case SpecialKeys.ESCAPE: {
				if (isOpen && closeOnEsc) {
					if (preventDefault) e.preventDefault()
					onClose?.()
				}
			}
			}
		},
		[closeOnEsc, isFocusFirstOnEnterOrSpace, isOpen, isOpenOnEnterOrSpace, onClose, onFocusFirst, onFocusLast, onOpen, preventDefault]
	)

	return {
		onKeyDown,
	}
}
