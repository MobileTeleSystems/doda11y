import { useCallback, useState } from 'react'
import type { CollectionKey } from '../../../types'
import { type SelectionControl, type UseSelectionOptions } from './types'

export const useSelection = (options?: UseSelectionOptions): SelectionControl => {
	const { keys, multiple = false, defaultKeys, disabledKeys, limit } = options ?? {}
	const [selectedKeys, setSelectedKeys] = useState(new Set(defaultKeys))

	const unselect = useCallback((key: CollectionKey) => {
		if (!selectedKeys.has(key) || disabledKeys?.has(key)) return

		setSelectedKeys((prev) => {
			const set = new Set(prev)
			set.delete(key)

			return set
		})
	}, [selectedKeys, disabledKeys])

	const isSelected = useCallback((key: CollectionKey) => selectedKeys.has(key), [selectedKeys])

	const select = useCallback(
		(key: CollectionKey) => {
			if (selectedKeys.has(key) || disabledKeys?.has(key) || selectedKeys.size === limit) return

			if (multiple) {
				setSelectedKeys((prev) => new Set(prev).add(key))
				return
			}

			setSelectedKeys(new Set([key]))
		},
		[multiple, selectedKeys, disabledKeys]
	)

	const toggleSelect = useCallback(
		(key: CollectionKey) => {
			selectedKeys.has(key) ? unselect(key) : select(key)
		},
		[select, selectedKeys, unselect]
	)

	const clearSelect = useCallback(() => {
		setSelectedKeys(new Set())
	}, [])

	const selectRange = useCallback(
		(startKey: CollectionKey, endKey: CollectionKey) => {
			if (!keys) throw new Error('You need to define the keys parameter')

			const startIndex = keys.indexOf(startKey)
			const endIndex = keys.indexOf(endKey)

			const rangeStart = startIndex < endIndex ? startIndex : endIndex
			const rangeEnd = startIndex < endIndex ? endIndex : startIndex

			let index = 0
			for (const key of keys) {
				if (startIndex !== -1 && endIndex !== -1) {
					const isInRange = index >= rangeStart && index <= rangeEnd

					isInRange ? select(key) : unselect(key)
				}

				index += 1
			}
		},
		[keys, select, unselect]
	)

	return { selectedKeys, toggleSelect, select, selectRange, isSelected, unselect, clearSelect, multiple }
}
