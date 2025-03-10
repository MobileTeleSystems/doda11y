import type { KeyboardEventHandler } from 'react'
import { TreeNode } from '../../../../lib/packages/tree/treeNode'
import { TreeItemPayload } from '../../../../lib'

export interface UseItemTreeSearchControlOptions<I> {
	/** Обработчик на случай, когда найден элемент коллекции */
  onFound?: (node: TreeNode<TreeItemPayload<I, 'child' | 'parent' | 'group'> | null>) => void
	/** Игнорировать ли кейс написания при поиске */
  ignoreCase?: boolean
}

export interface UseItemTreeSearchControl {
	/** Обработчик на нажатие клавиш */
	onKeyDown: KeyboardEventHandler
}
