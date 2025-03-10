import { KeyboardEvent, FocusEvent, useCallback } from 'react'
import { UseTreeControl, UseTreeControlOptions, } from './types'
import { useDataSelectionControl } from '../../../selection'
import { TreeItem } from '../../../../lib'
import { useItemTreeControl, useItemTreeSearchControl } from '../../../structures'

export const useTreeControl = <I extends TreeItem>({ tree, selection, active, changeActive, changeFocus, onExpand, onHide, onHideAll, expanded }: UseTreeControlOptions<I>): UseTreeControl => {
	const { selectedKeys, toggleSelect, selectRange } = selection

	const { onKeyDown: onKeyDownTreeControl } = useItemTreeControl(tree, {
		active,
		changeActive,
		changeFocus,
		expand: onExpand,
		expanded,
		hide: onHide
	})

	const { onKeyDown: onKeyDownSelection } = useDataSelectionControl({
		allowSelectAll: true,
		getFirstKey: () => tree.getFirstSelectableExtendedNode()?.key,
		getLastKey: () => tree.getLastSelectableExtendedNode()?.key,
		getNextKey: (key) => tree.getNextSelectableExtendedNode(key)?.key,
		getPrevKey: (key) => tree.getPrevSelectableExtendedNode(key)?.key,
		select: (key) => tree.reachableSelectableKeys.has(key) ? toggleSelect(key) : undefined,
		active: tree.reachableSelectableKeys.has(active ?? '') ? active : undefined,
		selectedKeys,
		selectRange: (startKey, endKey) => {
			changeActive(endKey)
			changeFocus(endKey)
			selectRange(startKey, endKey)
		},
		allowClearSelection: false,
		multiSelectable: false
	})

	const { onKeyDown: onKeyDownSearch } = useItemTreeSearchControl(tree, {
		onFound: (node) => {
			if (node.key !== 'root') {
				changeActive?.(node.key)
				changeFocus?.(node.key)
			}
		}
	})

	const onKeyDown = useCallback(
		(e: KeyboardEvent) => {
			onKeyDownTreeControl(e)
			onKeyDownSearch(e)
			onKeyDownSelection(e)
		},
		[onKeyDownSearch, onKeyDownTreeControl, onKeyDownSelection]
	)

	const onFocus = useCallback(() => {
		if (!active) {
			const key = tree.getFirstNode()?.key
			changeActive(key)
			changeFocus(key)
		}
	}, [active, tree, changeActive, changeFocus])

	const onBlur = useCallback((e: FocusEvent) => {
		if (!e.currentTarget?.contains(e.relatedTarget)) onHideAll()
	}, [onHideAll])

	return { onKeyDown, onFocus, onBlur }
}
