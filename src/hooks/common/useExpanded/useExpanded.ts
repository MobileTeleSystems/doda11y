import { UseExpanded } from './types'
import { useCallback, useState } from 'react'

export const useExpanded = (defaultKeys?: string[]): UseExpanded => {
	const [expanded, setExpanded] = useState(new Set<string>(new Set(...(defaultKeys ?? []))))

	const expand = useCallback((key: string) => {
		setExpanded(prev => {
			const s = new Set(prev)
			s.add(key)

			return s
		})
	}, [])

	const hide = useCallback((key: string) => setExpanded(prev => {
		const s = new Set(prev)
		s.delete(key)

		return s
	}), [])

	const toggle = useCallback((key: string) => {
		if (expanded.has(key)) {
			hide(key)
			return
		}

		expand(key)
	}, [expanded, expand, hide])

	const hideAll = useCallback(() => setExpanded(new Set()), [])

	return {
		expand,
		hide,
		toggle,
		expanded,
		hideAll
	}
}
