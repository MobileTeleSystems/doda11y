import {
	UseMenuItemRadioGroupControl,
	UseMenuItemRadioGroupControlOptions
} from './types'
import { KeyboardEvent, useCallback } from 'react'
import { SpecialKeys } from '../../../../constants'

export const useMenuItemRadioGroupControl = ({
	onActivate
}: UseMenuItemRadioGroupControlOptions): UseMenuItemRadioGroupControl => {
	const onKeyDown = useCallback((e: KeyboardEvent) => {
		if (e.key === SpecialKeys.SPACE) {
			e.preventDefault()
			onActivate?.()
		}
	}, [onActivate])

	return { onKeyDown }
}
