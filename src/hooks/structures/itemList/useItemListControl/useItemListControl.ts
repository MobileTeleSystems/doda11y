import { KeyboardEvent, useCallback } from 'react'
import { UseItemListControl, UseItemListControlOptions } from './types'
import { ItemList, ListItem } from '../../../../lib'
import { SpecialKeys } from '../../../../constants'

export const useItemListControl = <I extends ListItem = ListItem>(list: ItemList<I>, options?: UseItemListControlOptions): UseItemListControl => {
	const {
		active,
		changeActive,
		changeFocus,
		orientation = 'vertical',
		loop = false
	} = options ?? {}

	const changeItem = useCallback((key: string) => {
		changeActive?.(key)
		changeFocus?.(key)
	},[changeActive, changeFocus])

	const onKeyDown = useCallback(
		(e: KeyboardEvent) => {
			switch (e.key) {
			case SpecialKeys.ARROW_DOWN:
			case SpecialKeys.ARROW_RIGHT: {
				// We prevent switching with the right arrow if the horizontal orientation is
				if (e.key === SpecialKeys.ARROW_RIGHT && orientation !== 'horizontal') return
				if (e.key === SpecialKeys.ARROW_DOWN && orientation !== 'vertical') return

				e.preventDefault()

				if (!active) return

				const keyToFocus = list.getNextNode(active)?.key

				if (keyToFocus) {
					changeItem?.(keyToFocus)
					return
				}
				if (loop && !keyToFocus) {
					const first = list.getFirstNode()?.key
					const last = list.getLastNode()?.key

					if (last === active && first) {
						changeItem?.(first)
					}
				}

				break
			}
			case SpecialKeys.ARROW_UP:
			case SpecialKeys.ARROW_LEFT: {
				// We prevent switching with the left arrow if the horizontal orientation is
				if (e.key === SpecialKeys.ARROW_LEFT && orientation !== 'horizontal') return
				if (e.key === SpecialKeys.ARROW_UP && orientation !== 'vertical') return

				e.preventDefault()

				if (!active) return

				const keyToFocus = list.getPrevNode(active)?.key

				if (keyToFocus) {
					changeItem?.(keyToFocus)
					return
				}
				if (loop && !keyToFocus) {
					const first = list.getFirstNode()?.key
					const last = list.getLastNode()?.key

					if (first === active && last) {
						changeItem?.(last)
					}
				}
        
				break
			}
			case SpecialKeys.HOME: {
				const keyToFocus = list.getFirstNode()?.key

				if (keyToFocus) {
					e.preventDefault()
					changeItem?.(keyToFocus)
				}

				break
			}
			case SpecialKeys.END: {
				const keyToFocus = list.getLastNode()?.key

				if (keyToFocus) {
					e.preventDefault()
					changeItem?.(keyToFocus)
				}

				break
			}
			}
		},
		[
			active,
			changeItem,
			list,
			orientation,
			loop
		]
	)

	return { onKeyDown }
}
