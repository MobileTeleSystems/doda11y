import { KeyboardEvent, useCallback, useState } from 'react'
import type { CollectionKey } from '../../../types'
import { SpecialKeys } from '../../../constants'
import { UseDataSelectionControl, UseDataSelectionControlOptions } from './types'

export const useDataSelectionControl = ({ multiSelectable = false, orientation = 'horizontal', active, allowSelectAll, allowClearSelection, select, selectRange, selectedKeys, clearSelect, getNextKey, getPrevKey, getFirstKey, getLastKey }: UseDataSelectionControlOptions): UseDataSelectionControl => {
	const [startRangeKey, setStartRangeKey] = useState<CollectionKey>('')

	const onKeyDown = useCallback(
		(e: KeyboardEvent) => {
			switch (e.key) {
			case SpecialKeys.ARROW_DOWN:
			case SpecialKeys.ARROW_RIGHT: {
				// We prevent switching with the right arrow if the horizontal orientation is
				if (e.key === SpecialKeys.ARROW_RIGHT && orientation !== 'horizontal') return

				if (!active) return

				const key = getNextKey(active)

				if (multiSelectable && e.shiftKey && key) {
					e.preventDefault()
					selectRange?.(startRangeKey, key)
				}

				break
			}
			case SpecialKeys.ARROW_UP:
			case SpecialKeys.ARROW_LEFT: {
				// We prevent switching with the left arrow if the horizontal orientation is
				if (e.key === SpecialKeys.ARROW_LEFT && orientation !== 'horizontal') return

				if (!active) return

				const key = getPrevKey(active)

				if (multiSelectable && e.shiftKey && key) {
					e.preventDefault()
					selectRange?.(startRangeKey, key)
				}
        
				break
			}
			case SpecialKeys.HOME: {
				const firstKey = getFirstKey()

				if (multiSelectable && e.shiftKey && e.ctrlKey && firstKey) {
					e.preventDefault()
					selectRange?.(startRangeKey, firstKey)
				}

				break
			}
			case SpecialKeys.END: {
				const lastKey = getLastKey()

				if (multiSelectable && e.shiftKey && e.ctrlKey && lastKey) {
					e.preventDefault()
					selectRange?.(startRangeKey, lastKey)
				}

				break
			}
			case SpecialKeys.ENTER:
			case SpecialKeys.SPACE: {
				if (e.shiftKey && selectedKeys && e.key === SpecialKeys.SPACE) {
					const lastSelectedKey = [...selectedKeys].at(-1)

					if (lastSelectedKey && active) {
						e.preventDefault()
						selectRange?.(lastSelectedKey, active)
					}

					break
				}

				if (active && select) {
					e.preventDefault()
					select(active)
				}

				break
			}
			case SpecialKeys.SHIFT: {
				if (active) setStartRangeKey(active)

				break
			}
			case SpecialKeys.ESCAPE: {
				if (allowClearSelection) {
					e.preventDefault()
					clearSelect?.()
				}

				break
			}
			case 'a': {
				if (multiSelectable && (e.ctrlKey || e.metaKey) && allowSelectAll) {
					const firstKey = getFirstKey()
					const lastKey = getLastKey()

					if (firstKey && lastKey) {
						e.preventDefault()
						selectRange?.(firstKey, lastKey)
					}

					break
				}
			}
			}
		},
		[
			active,
			allowClearSelection,
			allowSelectAll,
			clearSelect,
			multiSelectable,
			orientation,
			select,
			selectRange,
			selectedKeys,
			startRangeKey,
		]
	)

	return { onKeyDown }
}
