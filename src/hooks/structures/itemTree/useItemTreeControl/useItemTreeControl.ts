import { KeyboardEvent, useCallback } from 'react'
import { UseItemTreeControl, UseItemTreeControlOptions } from './types'
import { SpecialKeys } from '../../../../constants'
import { ItemTree, TreeItem } from '../../../../lib'

export const useItemTreeControl = <I extends TreeItem = TreeItem>(tree: ItemTree<I>, { active, changeActive, changeFocus, expanded, expand, hide, onActivate, orientation }: UseItemTreeControlOptions): UseItemTreeControl => {
	const changeItem = useCallback((key: string | undefined) => {
		changeActive?.(key)

		if (!key) return

		changeFocus?.(key)
	}, [changeActive, changeFocus])

	const goNext = useCallback(() => {
		if (!active) return

		const node = tree.tree.findNode(active)
		if (!node) return

		const nextNode = tree.getNextExtendedNode(node.key)

		if (nextNode) changeItem?.(nextNode.key)
	}, [active, tree, changeItem])

	const goPrev = useCallback(() => {
		if (!active) return

		const node = tree.tree.findNode(active)
		if (!node) return

		const prevNode = tree.getPrevExtendedNode(node.key)

		if (prevNode) changeItem?.(prevNode.key)
	}, [active, tree, changeItem])

	const openSubtree = useCallback(() => {
		if (!active) return

		const node = tree.tree.findNode(active)
		if (!node) return

		if (node.payload && node.payload?.isTrigger && node.payload.triggerFor) {
			const subtreeKey = node.payload.triggerFor

			if (expanded.has(subtreeKey)) {
				const nextChildNode = tree.getNextExtendedNode(subtreeKey, ['child'], [node.key])

				if (!nextChildNode) return

				changeItem?.(nextChildNode.key)
				return
			}

			expand(subtreeKey)
		}
	}, [active, tree, expanded, changeItem])

	const hideSubtree = useCallback(() => {
		if (!active) return

		const node = tree.tree.findNode(active)
		if (!node) return

		let key = node.key

		if (!key) return

		if (node.payload?.isTrigger && node.payload.triggerFor) {
			if (expanded.has(node.payload.triggerFor)) {
				hide(node.payload.triggerFor)
				return
			}

			const k = tree.tree.findNode(node.payload.triggerFor)?.key

			if (k) key = k
		}

		const nearestSubtreeKey = tree.getCloseParentByTypes(key)?.key

		if (!nearestSubtreeKey) return

		const nearestSubtreeTriggerKey = tree.getTrigger(nearestSubtreeKey)?.key

		if (nearestSubtreeKey && nearestSubtreeKey !== 'root') changeItem?.(nearestSubtreeTriggerKey)
	}, [active, tree, hide, changeItem])

	const focusFirst = useCallback(() => {
		const firstNode = tree.getFirstExtendedNode()

		if (firstNode && firstNode.key) changeItem?.(firstNode.key)
	}, [tree, changeItem])

	const focusLast = useCallback(() => {
		const lastNode = tree.getLastExtendedNode()

		if (lastNode && lastNode.key) changeItem?.(lastNode.key)
	}, [tree, changeItem])

	const activateNode = useCallback(() => {
		if (!active) return

		const node = tree.tree.findNode(active)

		if (node?.key && node.payload?.isTrigger && node.payload.triggerFor) {
			expand(node.payload.triggerFor)
			return
		}

		onActivate?.(node)
	}, [active, expand])

	const onKeyDown = useCallback((e: KeyboardEvent) => {
		if (!active) return

		switch (e.key) {
		case SpecialKeys.ARROW_RIGHT:
		case SpecialKeys.ARROW_DOWN: {
			if (orientation === 'horizontal') {
				e.key === SpecialKeys.ARROW_DOWN ? openSubtree() : goNext()
				return
			}

			e.key === SpecialKeys.ARROW_DOWN ? goNext() : openSubtree()

			break
		}
		case SpecialKeys.ARROW_LEFT:
		case SpecialKeys.ARROW_UP: {
			if (orientation === 'horizontal') {
				e.key === SpecialKeys.ARROW_UP ? hideSubtree() : goPrev()
				return
			}

			e.key === SpecialKeys.ARROW_UP ? goPrev() : hideSubtree()

			break
		}
		case SpecialKeys.HOME: {
			focusFirst()

			break
		}
		case SpecialKeys.END: {
			focusLast()

			break
		}
		case SpecialKeys.ENTER: {
			activateNode()

			break
		}
		default:
			break
		}
	}, [orientation, goNext, goPrev, openSubtree, hideSubtree, focusLast, focusFirst, activateNode, active, tree])

	return { onKeyDown }
}
