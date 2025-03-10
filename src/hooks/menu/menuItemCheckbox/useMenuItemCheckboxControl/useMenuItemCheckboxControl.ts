import { UseMenuItemCheckboxControl, UseMenuItemCheckboxControlOptions } from './types'
import { useCheckboxControl } from '../../../checkbox/useCheckboxControl'

export const useMenuItemCheckboxControl = ({
	onToggle
}: UseMenuItemCheckboxControlOptions): UseMenuItemCheckboxControl => {
	const { onKeyDown } = useCheckboxControl({ onToggle })

	return { onKeyDown }
}
