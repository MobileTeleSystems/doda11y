import { KeyboardEvent, useCallback } from 'react'
import type { UseTabControl, UseTabControlOptions } from './types'
import { SpecialKeys } from '../../../../constants'

export const useTabControl = ({ onActivate, onOpenPopup }: UseTabControlOptions): UseTabControl => {
	const onKeyDown = useCallback((e: KeyboardEvent) => {
		switch (e.key) {
		case SpecialKeys.ENTER:
		case SpecialKeys.SPACE: {
			e.preventDefault()
			onActivate?.()

			return
		}
		case SpecialKeys.F10: {
			if (e.shiftKey) {
				e.preventDefault()
				onOpenPopup?.()

				return
			}

			break
		}
		default:
			break
		}
	}, [onActivate, onOpenPopup])

	return { onKeyDown }
}
