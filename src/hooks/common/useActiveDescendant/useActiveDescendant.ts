import { useEffect, useState } from 'react'
import { type UseActiveDescendant, type UseActiveDescendantOptions } from './types'

export const useActiveDescendant = (options?: UseActiveDescendantOptions): UseActiveDescendant => {
	const { isFocusOnActive = false, defaultActive = undefined } = options ?? {}

	const [activeDescendant, setActiveDescendant] = useState<string | undefined>(defaultActive)

	useEffect(() => {
		if (activeDescendant && isFocusOnActive)
			document.getElementById(String(activeDescendant))?.scrollIntoView({ block: 'end', inline: 'nearest', behavior: 'smooth' })
	}, [activeDescendant, isFocusOnActive])

	return { setActiveDescendantId: setActiveDescendant, activeDescendant }
}
