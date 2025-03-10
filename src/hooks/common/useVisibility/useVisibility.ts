import { useCallback, useState } from 'react'
import { UseVisibility } from './types'

export const useVisibility = (state = false): UseVisibility => {
	const [isOpen, setIsOpen] = useState(state)

	const open = useCallback(() => setIsOpen(true), [])

	const close = useCallback(() => setIsOpen(false), [])

	const toggle = useCallback(() => setIsOpen((prev) => !prev), [])

	return { 
		isOpen,
		open,
		close,
		toggle,
	}
}
