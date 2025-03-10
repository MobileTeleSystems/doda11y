import { useIterableSearch } from '../useIterableSearch'
import { KeyboardEvent, useCallback, useEffect, useMemo } from 'react'
import { UseIterableSearchControl } from './types'
import { getLetterFromKey } from '../../../../lib'

export const useIterableSearchControl = <T>(iterable: Iterable<T>, find: (value: T, searched: string) => boolean, onFound?: (value: T) => void): UseIterableSearchControl => {
	const { searched, setSearched } = useIterableSearch()

	const foundValue = useMemo(() => {
		if (!searched) return

		for (const value of iterable) {
			if (find(value, searched)) {
				return value
			}
		}
	}, [find, iterable, searched])

	const onKeyDown = useCallback(
		(e: KeyboardEvent) => {
			const letter = getLetterFromKey(e.key)

			setSearched((prev) => (prev += letter))
		},
		[]
	)

	useEffect(() => {
		if (foundValue) onFound?.(foundValue)
	}, [foundValue])

	return {
		onKeyDown
	}
}
