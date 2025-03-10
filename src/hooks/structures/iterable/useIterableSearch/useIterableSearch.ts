import { useState } from 'react'

import { UseIterableSearchOptions, type UseIterableSearch } from './types'
import { useDebounce } from '../../../common'

export const useIterableSearch = (options?: UseIterableSearchOptions): UseIterableSearch => {
	const { clearAfterDelay = true, delay = 1000 } = options ?? {}

	const [searched, setSearched] = useState('')

	useDebounce(
		() => {
			if (clearAfterDelay) setSearched('')
		},
		delay
	)

	return { setSearched, searched }
}
