import { KeyboardEvent, useCallback, useState } from 'react'
import type { CollectionKey } from '../../../types'
import { SpecialKeys } from '../../../constants'
import {
	UseMatrixSelectionControl,
	UseMatrixSelectionControlOptions
} from './types'

export const useMatrixSelectionControl = ({ multiple = false, active, allowSelectAll = false, allowOnlyRange = false, select, selectRange, selectedKeys, getRightKey, getUpKey, getDownKey, getLeftKey, getLastKey, getFirstKey }: UseMatrixSelectionControlOptions): UseMatrixSelectionControl => {
	const [startRangeKey, setStartRangeKey] = useState<CollectionKey>('')

	const onKeyDown = useCallback(
		(e: KeyboardEvent) => {
			switch (e.key) {
			case SpecialKeys.ARROW_RIGHT: {
				if (!active) return

				const key = getRightKey(active)

				if (multiple && e.shiftKey && key) {
					e.preventDefault()
					selectRange?.(startRangeKey, key)
				}

				break
			}
			case SpecialKeys.ARROW_LEFT: {
				if (!active) return

				const key = getLeftKey(active)

				if (multiple && e.shiftKey && key) {
					e.preventDefault()
					selectRange?.(startRangeKey, key)
				}

				break
			}
			case SpecialKeys.ARROW_DOWN: {
				if (!active) return

				const key = getDownKey(active)

				if (multiple && e.shiftKey && key) {
					e.preventDefault()
					selectRange?.(startRangeKey, key)
				}

				break
			}
			case SpecialKeys.ARROW_UP: {
				if (!active) return

				const key = getUpKey(active)

				if (multiple && e.shiftKey && key) {
					e.preventDefault()
					selectRange?.(startRangeKey, key)
				}

				break
			}
			case SpecialKeys.ENTER:
			case SpecialKeys.SPACE: {
				if (active && select && !allowOnlyRange) {
					e.preventDefault()
					select(active)
				}

				break
			}
			case SpecialKeys.SHIFT: {
				if (active) setStartRangeKey(active)

				break
			}
			case 'a': {
				if (allowSelectAll && !allowOnlyRange && multiple && (e.ctrlKey || e.metaKey)) {
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
			allowSelectAll,
			allowOnlyRange,
			getRightKey,
			getLeftKey,
			getDownKey,
			getUpKey,
			multiple,
			select,
			selectRange,
			selectedKeys,
			startRangeKey,
		]
	)

	return { onKeyDown }
}
