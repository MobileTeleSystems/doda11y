import { KeyboardEvent, useCallback } from 'react'
import { SpecialKeys } from '../../../constants'
import { UseButtonControl, UseButtonControlOptions } from './types'

export const useButtonControl = <T extends HTMLElement>({ onPress }: UseButtonControlOptions<T>): UseButtonControl => {
	const onKeyDown = useCallback((e: KeyboardEvent<T>) => {
		if (e.key === SpecialKeys.ENTER) {
			onPress?.(e)
		}
	}, [onPress])

	const onKeyUp = useCallback((e: KeyboardEvent<T>) => {
		if (e.key === SpecialKeys.SPACE) {
			onPress?.(e)
		}
	}, [onPress])

	return { onKeyUp, onKeyDown }
}
