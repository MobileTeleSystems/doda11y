import type { KeyboardEventHandler } from 'react'
import { LinkedListNode } from '../../../../lib'
import { ListItemPayload } from '../../../../lib/packages/itemList/types'

export interface UseItemListSearchControlOptions<I> {
	/** Обработчик на случай, когда найден элемент коллекции */
  onFound?: (key: LinkedListNode<ListItemPayload<I>>) => void
}

export interface UseItemListSearchControl {
	/** Обработчик на нажатие клавиш */
	onKeyDown: KeyboardEventHandler
}
