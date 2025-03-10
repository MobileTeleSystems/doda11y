import { KeyboardEvent, useCallback } from 'react'
import { SpecialKeys } from '../../../constants'
import type { UseTooltipControl, UseTooltipControlOptions } from './types'

export const useTooltipControl = ({ onClose }: UseTooltipControlOptions): UseTooltipControl => {
	const onKeyDown = useCallback((e: KeyboardEvent) => {
		if (e.key === SpecialKeys.ESCAPE) {
			e.preventDefault()

			onClose?.()
		}
	}, [])

	return { onKeyDown }
}
