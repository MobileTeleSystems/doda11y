import { useCallback, KeyboardEvent } from 'react'
import { UseMenuItemControl, UseMenuItemControlOptions } from './types'
import { SpecialKeys } from '../../../../constants'

export const useMenuItemControl = ({ onActivate }: UseMenuItemControlOptions): UseMenuItemControl => {
	const onKeyDown = useCallback((e: KeyboardEvent) => {
		if ((e.key === SpecialKeys.SPACE || e.key === SpecialKeys.ENTER) && onActivate) {
			e.preventDefault()
			onActivate()
		}
	}, [onActivate])

	return { onKeyDown }
}
