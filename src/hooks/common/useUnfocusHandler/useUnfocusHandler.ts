import { FocusEvent, useCallback } from 'react'
import { UseUnfocusHandler } from './types'

export const useUnfocusHandler = <T extends HTMLElement>(callback?: (...args: any) => any): UseUnfocusHandler => {
	const onBlur = useCallback((e: FocusEvent<T>) => {
		if (!e.currentTarget?.contains(e.relatedTarget)) callback?.()
	}, [callback])

	return { onBlur }
}
