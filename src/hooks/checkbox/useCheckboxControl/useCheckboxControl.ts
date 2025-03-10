import { KeyboardEvent, useCallback } from 'react'
import { UseCheckboxControl, UseCheckboxControlOptions } from './types'
import { SpecialKeys } from '../../../constants'

export const useCheckboxControl = ({
	onToggle
}: UseCheckboxControlOptions): UseCheckboxControl => {
	const onKeyDown = useCallback((e: KeyboardEvent) => {
		if (e.key === SpecialKeys.SPACE) {
			e.preventDefault()
			onToggle?.()
		}
	}, [onToggle])

	return { onKeyDown }
}
