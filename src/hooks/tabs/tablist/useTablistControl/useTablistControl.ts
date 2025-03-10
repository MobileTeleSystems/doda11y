import type { UseTablistControl, UseTablistControlOptions } from './types'
import { ListItem } from '../../../../lib'
import { useItemListControl } from '../../../structures'
import { useCallback, KeyboardEvent } from 'react'
import { SpecialKeys } from '../../../../constants'

export const useTablistControl = <I extends ListItem = ListItem>({ orientation = 'horizontal', list, changeActive, changeFocus, onActivate, active, activateOnChange = true }: UseTablistControlOptions<I>): UseTablistControl => {
	const { onKeyDown: onKeyDownList } = useItemListControl(list, {
		active,
		changeActive: (key) => {
			changeActive(key)
			if (activateOnChange) onActivate?.(key)
			changeFocus(key)
		},
		orientation,
		loop: true,
	})

	const onKeyDown = useCallback((e: KeyboardEvent) => {
		onKeyDownList?.(e)

		if (e.key === SpecialKeys.ENTER || e.key === SpecialKeys.SPACE) {
			e.preventDefault()

			if (active) onActivate?.(active)
		}
	}, [onKeyDownList, active])

	const onFocus = useCallback(() => {
		if (!active) {
			const key = list.getFirstNode()?.key
			changeActive(key)
			changeFocus(key)
		}
	}, [active, list])

	return { onKeyDown, onFocus }
}
