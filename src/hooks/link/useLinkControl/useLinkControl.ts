import { KeyboardEvent, useCallback } from 'react'
import { SpecialKeys } from '../../../constants'
import { UseLinkControl, UseLinkControlOptions } from './types'

export const useLinkControl = ({ onOpenContextMenu, onRedirect }: UseLinkControlOptions): UseLinkControl => {
	const onKeyDown = useCallback((e: KeyboardEvent) => {
		if (e.key === SpecialKeys.ENTER) {
			e.preventDefault()

			onRedirect?.()
			return
		}

		if (e.shiftKey && e.key === SpecialKeys.F10) {
			e.preventDefault()

			onOpenContextMenu?.()
			return
		}
	}, [onRedirect, onOpenContextMenu])

	return { onKeyDown }
}
