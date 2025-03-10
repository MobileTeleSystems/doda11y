import {
	UseSelectComboboxControl,
	UseSelectComboboxControlOptions,
} from './types'
import { ListItem } from '../../../../lib'
import { usePopupTriggerControl } from '../../../popup'

export const useSelectComboboxControl = <I extends ListItem = ListItem>({ list, changeActive, changeFocus, isOpen, onOpen, onClose }: UseSelectComboboxControlOptions<I>): UseSelectComboboxControl => {
	const { onKeyDown } = usePopupTriggerControl({
		isOpen,
		onOpen,
		onClose,
		isFocusFirstOnEnterOrSpace: false,
		isOpenOnEnterOrSpace: false,
		onFocusFirst(){
			const key = list.getFirstNode()?.key
			if (!key) return

			changeActive(key)

			requestAnimationFrame(() => {
				changeFocus(key)
			})
		},
		onFocusLast() {
			const key = list.getLastNode()?.key
			if (!key) return

			changeActive(key)

			requestAnimationFrame(() => {
				changeFocus(key)
			})
		},
	})

	return { onKeyDown }
}
