import { useCallback, KeyboardEvent } from 'react'
import { UseMenuControl, UseMenuControlOptions } from './types'
import { TreeItem, TreeItemPayload, TreeNode } from '../../../../lib'
import { SpecialKeys } from '../../../../constants'
import { useItemTreeSearchControl } from '../../../structures'
import { useUnfocusHandler } from '../../../common'

export const useMenuControl = <T extends HTMLElement, I extends TreeItem = TreeItem>({ tree, active, changeActive, changeFocus, onExpand, expanded, triggerElement, onHide, onClose, onActivate, orientation, closeOnEsc = true }: UseMenuControlOptions<I>): UseMenuControl => {
	const changeItem = useCallback((key: string | undefined) => {
		changeActive(key)
		changeFocus(key)
	}, [changeActive, changeFocus])

	const goNext = useCallback(() => {
		if (!active) return

		const node = tree.tree.findNode(active)
		if (!node) return

		const parent = node.payload?.isTrigger && node.payload.triggerFor ? tree.getCloseParentByTypes(node.payload.triggerFor) : tree.getCloseParentByTypes(node.key)
		const nextNode = parent ? tree.getNextParentExtendedNode(parent.key, node.key) : tree.getNextExtendedNode(node.key)

		if (!nextNode) return

		changeItem?.(nextNode.key)
	}, [active, tree, changeItem])

	const goPrev = useCallback(() => {
		if (!active) return

		const node = tree.tree.findNode(active)
		if (!node) return

		const parent = node.payload?.isTrigger && node.payload.triggerFor ? tree.getCloseParentByTypes(node.payload.triggerFor) : tree.getCloseParentByTypes(node.key)
		const trigger = parent ?  tree.getTrigger(parent.key) : undefined
		const prevNode = parent ? tree.getPrevParentExtendedNode(parent.key, node.key) : tree.getPrevExtendedNode(node.key)

		if (!prevNode || prevNode === trigger) return

		changeItem?.(prevNode.key)
	}, [active, tree, changeItem])

	const openSubtree = useCallback(() => {
		if (!active) return

		const node = tree.tree.findNode(active)
		if (!node) return

		if (node.payload && node.payload?.isTrigger && node.payload.triggerFor) {
			const subtreeKey = node.payload.triggerFor

			onExpand?.(subtreeKey)

			const nextChildNode = tree.getNextParentNode(subtreeKey, node.key)

			if (!nextChildNode) return

			changeItem?.(nextChildNode.key)
		}
	}, [active, onExpand, tree, changeItem])

	const hideSubtree = useCallback(() => {
		if (!active) return

		const node = tree.tree.findNode(active)
		if (!node) return

		let key = node.key

		if (!key) return

		if (node.payload?.isTrigger && node.payload.triggerFor) {
			if (expanded?.has(node.payload.triggerFor)) {
				onHide?.(node.payload.triggerFor)
				return
			}

			const k = tree.tree.findNode(node.payload.triggerFor)?.key

			if (k) key = k
		}

		const nearestSubtreeKey = tree.getCloseParentByTypes(key)?.key

		if (!nearestSubtreeKey) return

		const nearestSubtreeTriggerKey = tree.getTrigger(nearestSubtreeKey)?.key

		if (nearestSubtreeKey && nearestSubtreeKey !== 'root') {
			onHide?.(nearestSubtreeKey)
			changeItem?.(nearestSubtreeTriggerKey)
		}
	}, [active, tree, onHide, onExpand, changeItem])

	const focusFirst = useCallback(() => {
		if (!active) return

		const node = tree.tree.findNode(active)
		if (!node) return

		let firstNode: TreeNode<TreeItemPayload<I, 'parent' | 'child' | 'group'> | null> | null = null
		const parent = node.payload?.isTrigger && node.payload.triggerFor ? tree.getCloseParentByTypes(node.payload.triggerFor) : tree.getCloseParentByTypes(node.key)
		const triggerKey = parent?.key ? tree.getTrigger(parent?.key)?.key : undefined

		if (!parent || parent.key === 'root') firstNode = tree.getFirstExtendedNode()
		else firstNode = tree.getFirstParentExtendedNode(parent.key, ['child'], triggerKey ? [triggerKey] : [])
		if (firstNode && firstNode.key) changeItem?.(firstNode.key)
	}, [active, tree, changeItem])

	const focusLast = useCallback(() => {
		if (!active) return

		const node = tree.tree.findNode(active)
		if (!node) return

		let lastNode: TreeNode<TreeItemPayload<I, 'parent' | 'child' | 'group'> | null> | null = null
		const parent = node.payload?.isTrigger && node.payload.triggerFor ? tree.getCloseParentByTypes(node.payload.triggerFor) : tree.getCloseParentByTypes(node.key)

		if (!parent || parent.key === 'root') lastNode = tree.getLastExtendedNode()
		else lastNode = tree.getLastParentExtendedNode(parent.key, ['child'], [node.key])

		if (lastNode && lastNode.key) changeItem?.(lastNode.key)
	}, [tree, active, changeItem])

	const activateNode = useCallback(() => {
		if (!active) return

		const node = tree.tree.findNode(active)

		if (node?.key && node.payload?.isTrigger && node.payload.triggerFor) {
			onExpand?.(node.payload.triggerFor)

			const nextChildNode = tree.getNextParentNode(node.payload.triggerFor, node.key)

			if (!nextChildNode) return

			changeItem?.(nextChildNode.key)
      
			return
		}

		onActivate?.(node)
	}, [active, onExpand, changeItem, tree])

	const closeSubtree = useCallback(() => {
		if (!active) return

		const node = tree.tree.findNode(active)
		if (!node) return

		const parent = node.payload?.isTrigger && node.payload.triggerFor ? tree.getCloseParentByTypes(node.payload.triggerFor) : tree.getCloseParentByTypes(node.key)

		if (parent?.key && parent.key !== 'root') {
			onHide?.(parent.key)

			const trigger = tree.getTrigger(parent.key)?.key
			if (trigger) changeItem?.(trigger)
		}
	}, [active, tree, changeItem, onHide])

	const onKeyDownControl = useCallback((e: KeyboardEvent) => {
		if (!active) return

		const node = tree.tree.findNode(active)
		if (!node) return

		switch (e.key) {
		case SpecialKeys.ARROW_RIGHT:
		case SpecialKeys.ARROW_DOWN: {
			e.preventDefault()

			if (orientation === 'horizontal') {
				e.key === SpecialKeys.ARROW_DOWN ? openSubtree() : goNext()
				return
			}
      
			e.key === SpecialKeys.ARROW_DOWN ? goNext() : openSubtree()

			break
		}
		case SpecialKeys.ARROW_LEFT:
		case SpecialKeys.ARROW_UP: {
			e.preventDefault()

			if (orientation === 'horizontal') {
				e.key === SpecialKeys.ARROW_UP ? hideSubtree() : goPrev()
				return
			}

			e.key === SpecialKeys.ARROW_UP ? goPrev() : hideSubtree()

			break
		}
		case SpecialKeys.HOME: {
			e.preventDefault()

			focusFirst()

			break
		}
		case SpecialKeys.END: {
			e.preventDefault()

			focusLast()

			break
		}
		case SpecialKeys.ENTER:
		case SpecialKeys.SPACE: {
			e.preventDefault()

			activateNode()

			break
		}
		case SpecialKeys.ESCAPE: {
			e.preventDefault()
      
			if (closeOnEsc) {
				const parent = node.payload?.isTrigger && node.payload.triggerFor ? tree.getCloseParentByTypes(node.payload.triggerFor) : tree.getCloseParentByTypes(node.key)

				if (parent?.key === 'root' || !parent) {
					onClose?.()
					triggerElement?.focus()
          
					return
				}

				closeSubtree()
			}

			break
		}
		default:
			break
		}
	}, [active, goNext, goPrev, openSubtree, hideSubtree, focusLast, focusFirst, activateNode, closeSubtree, onClose, triggerElement])

	const { onKeyDown: onKeyDownSearch } = useItemTreeSearchControl(tree, {
		onFound: (node) => {
			if (node.key !== 'root') {
				changeItem?.(node.key)
			}
		}
	})

	const onKeyDown = useCallback((e: KeyboardEvent<T>) => {
		onKeyDownControl(e)
		onKeyDownSearch(e)
	}, [onKeyDownControl, onKeyDownSearch])

	const { onBlur } = useUnfocusHandler(onClose)

	return { onKeyDown, onBlur }
}
