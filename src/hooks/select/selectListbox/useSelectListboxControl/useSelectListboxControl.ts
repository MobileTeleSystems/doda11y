import { FocusEvent, KeyboardEvent, useCallback } from 'react'
import {
	UseSelectListboxControl,
	UseSelectListboxControlOptions,
} from './types'
import { ListItem } from '../../../../lib'
import { useItemListControl, useItemListSearchControl } from '../../../structures'
import { useDataSelectionControl } from '../../../selection'
import { SpecialKeys } from '../../../../constants'
import { useUnfocusHandler } from '../../../common/useUnfocusHandler/useUnfocusHandler'

export const useSelectListboxControl = <I extends ListItem = ListItem>({ list, selection, active, changeActive, changeFocus, isOpen, onOpen, onClose, closeOnSelect = true, onSelect, comboboxElement, loopList = false }: UseSelectListboxControlOptions<I>): UseSelectListboxControl => {
	const { selectedKeys, clearSelect, selectRange, select, multiple } = selection

	const { onKeyDown: onKeyDownListbox } = useItemListControl(list, {
		active,
		changeActive,
		changeFocus,
		loop: loopList,
	})

	const { onKeyDown: onKeyDownSelection } = useDataSelectionControl({
		multiSelectable: multiple,
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


	const { onKeyDown: onKeyDownSearch } = useItemListSearchControl(list, {
		onFound(node) {
			changeActive(node.key)
			changeFocus(node.key)
		},
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

			onKeyDownSearch(e)
			onKeyDownSelection(e)
			onKeyDownListbox(e)
		},
		[onKeyDownSearch, onKeyDownListbox, isOpen, select, active]
	)
  
	const onUnfocus = useCallback(() => {
		if (active) select(active)

		onClose()
		return
	}, [active, select, onClose])

	const { onBlur } = useUnfocusHandler(onUnfocus)

	return { onKeyDown, onBlur }
}
