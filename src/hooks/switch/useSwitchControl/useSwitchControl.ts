import { KeyboardEvent, useCallback } from 'react'
import { UseSwitchControl, UseSwitchControlOptions } from './types'
import { SpecialKeys } from '../../../constants'

export const useSwitchControl = ({
	onToggle
}: UseSwitchControlOptions): UseSwitchControl => {
	const onKeyDown = useCallback((e: KeyboardEvent) => {
		if (e.key === SpecialKeys.SPACE || e.key === SpecialKeys.ENTER) {
			e.preventDefault()
			onToggle?.()
		}
	}, [onToggle])

	return { onKeyDown }
}
