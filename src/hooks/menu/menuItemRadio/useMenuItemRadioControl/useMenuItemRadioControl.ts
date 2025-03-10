import { useCallback, KeyboardEvent } from 'react'
import { UseMenuItemRadioControl, UseMenuItemRadioControlOptions } from './types'
import { SpecialKeys } from '../../../../constants'

export const useMenuItemRadioControl = ({ onActivate }: UseMenuItemRadioControlOptions): UseMenuItemRadioControl => {
	const onKeyDown = useCallback((e: KeyboardEvent) => {
		if (e.key === SpecialKeys.SPACE) {
			e.preventDefault()
			onActivate?.()
		}
	}, [onActivate])

	return { onKeyDown }
}
