import { KeyboardEvent, useCallback } from 'react'
import { SpecialKeys } from '../../../../constants'
import {
	UseComboboxListboxControl,
	UseComboboxListboxControlOptions
} from './types'
import { useDataSelectionControl } from '../../../selection'
import { ListItem } from '../../../../lib'
import { useItemListControl, useItemListSearchControl } from '../../../structures'
import { useUnfocusHandler } from '../../../common/useUnfocusHandler/useUnfocusHandler'

export const useComboboxListboxControl = <I extends ListItem = ListItem>({
	list,
	isOpen,
	onOpen,
	onClose, 
	changeActive,
	changeFocus,
	active,
	selection,
	comboboxElement,
	onSelect,
	closeOnSelect = true,
	loopList = false,
}: UseComboboxListboxControlOptions<I>): UseComboboxListboxControl<I> => {
	const { select, selectedKeys, clearSelect, selectRange } = selection

	const { onKeyDown: onKeyDownListbox } = useItemListControl(list, {
		active,
		changeActive,
		changeFocus,
		loop: loopList,
	})

	const { onKeyDown: onKeyDownSearch } = useItemListSearchControl(list, {
		onFound(node) {
			changeActive(node.key)
			changeFocus(node.key)
		},
	})

	const { onKeyDown: onKeyDownSelection } = useDataSelectionControl({
		multiSelectable: false,
		select(key) {
			select(key)

			if (closeOnSelect) {
				onClose()
				comboboxElement?.focus()
			}

			onSelect?.(key)
		},
		selectedKeys,
		clearSelect,
		getFirstKey: () => list.getFirstNode()?.key,
		getLastKey: () => list.getLastNode()?.key,
		getNextKey: (key) => list.getNextNode(key)?.key,
		getPrevKey: (key) => list.getPrevNode(key)?.key,
		active,
		selectRange,
	})

	const onKeyDown = useCallback(
		(e: KeyboardEvent) => {
			// Open on END and HOME buttons
			if ([SpecialKeys.END, SpecialKeys.HOME].includes(e.key as SpecialKeys) && !isOpen) onOpen()
			if (!isOpen && [SpecialKeys.ARROW_DOWN, SpecialKeys.ARROW_UP, SpecialKeys.ARROW_LEFT, SpecialKeys.ARROW_RIGHT].includes(e.key as SpecialKeys)) return
			if (e.key === SpecialKeys.ESCAPE) {
				if (active) select(active)
				comboboxElement?.focus()
				onClose()
				return
			}

			if ([SpecialKeys.BACKSPACE, SpecialKeys.DELETE].includes(e.key as SpecialKeys)) {
				comboboxElement?.focus()
			}

			onKeyDownSearch(e)
			onKeyDownSelection(e)
			onKeyDownListbox(e)
		},
		[onKeyDownSearch, onKeyDownSelection, onKeyDownListbox, isOpen, select, active]
	)

	const onUnfocus = useCallback(() => {
		if (active) select(active)

		onClose()
		return
	}, [active, select, onClose])

	const { onBlur } = useUnfocusHandler(onUnfocus)

	return { onKeyDown, onBlur }
}
