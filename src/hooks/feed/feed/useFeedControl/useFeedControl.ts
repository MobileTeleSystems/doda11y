import { KeyboardEvent, useCallback } from 'react'
import { type UseFeedControl, type UseFeedControlOptions } from './types'
import { SpecialKeys } from '../../../../constants'
import { ListItem } from '../../../../lib'

export const useFeedControl = <I extends ListItem = ListItem>({
	list,
	changeFocus,
	changeActive,
	active
}: UseFeedControlOptions<I>): UseFeedControl => {
	const onKeyDown = useCallback((e: KeyboardEvent) => {
		if (!active) return

		if ([SpecialKeys.PAGE_DOWN, SpecialKeys.PAGE_UP].includes(e.key as SpecialKeys)) {
			e.preventDefault()
			const node = e.key === SpecialKeys.PAGE_UP
				? list.getPrevNode(active)
				: list.getNextNode(active)

			if (!node) return

			changeActive(node.key)
			requestAnimationFrame(() => {
				changeFocus(node.key)
			})
		}
	}, [active, changeFocus, changeActive, list])

	return { onKeyDown }
}
