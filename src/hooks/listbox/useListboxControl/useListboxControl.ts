import { KeyboardEvent, useCallback } from 'react'
import { SpecialKeys } from '../../../constants'
import { UseListboxControl, UseListboxControlOptions } from './types'
import { useDataSelectionControl } from '../../selection'
import { ListItem } from '../../../lib'
import { useItemListControl, useItemListSearchControl } from '../../structures'

export const useListboxControl = <I extends ListItem = ListItem>({
	orientation = 'vertical',
	list,
	selection,
	active,
	changeActive,
	changeFocus,
}: UseListboxControlOptions<I>): UseListboxControl => {
	const { selectedKeys, clearSelect, toggleSelect, selectRange } = selection

	const { onKeyDown: onKeyDownList } = useItemListControl(list, {
		orientation,
		active,
		changeActive,
		changeFocus,
	})

	const { onKeyDown: onKeyDownSelection } = useDataSelectionControl({
		multiSelectable: selection.multiple,
		select: toggleSelect,
		selectedKeys,
		clearSelect,
		selectRange,
		getFirstKey: () => list.getFirstNode()?.key,
		getLastKey: () => list.getLastNode()?.key,
		getNextKey: (key) => list.getNextNode(key)?.key,
		getPrevKey: (key) => list.getPrevNode(key)?.key,
		active,
		orientation,
		allowSelectAll: true
	})

	const { onKeyDown: onKeyDownSearch } = useItemListSearchControl(list, {
		onFound: (node) => {
			changeActive(node.key)
			changeFocus(node.key)
		},
	})

	const onKeyDown = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === SpecialKeys.ARROW_DOWN || e.key === SpecialKeys.ARROW_UP) e.preventDefault()

			onKeyDownSelection(e)
			onKeyDownList(e)
			onKeyDownSearch(e)
		},
		[onKeyDownList, onKeyDownSearch, onKeyDownSelection]
	)

	const onFocus = useCallback(() => {
		if (!active) {
			const key = list.getFirstNode()?.key
			changeActive(key)
			changeFocus(key)
		}
	}, [active, list, changeActive, changeFocus])

	return { onKeyDown, onFocus }
}
