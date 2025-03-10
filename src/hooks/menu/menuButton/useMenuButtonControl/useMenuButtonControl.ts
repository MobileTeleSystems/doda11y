import { usePopupTriggerControl } from '../../../popup'
import { UseMenuButtonControl, UseMenuButtonControlOptions } from './types'

export const useMenuButtonControl = ({
	onOpen,
	onFocusLast,
	onFocusFirst,
	isOpen,
}: UseMenuButtonControlOptions): UseMenuButtonControl => {
	const { onKeyDown } = usePopupTriggerControl({ onOpen, isOpen, onFocusFirst, onFocusLast, closeOnEsc: false })

	return { onKeyDown }
}
