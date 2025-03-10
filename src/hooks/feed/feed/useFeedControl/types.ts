import type { FocusEventHandler, KeyboardEventHandler } from 'react'
import { ItemList, ListItem } from '../../../../lib'

export interface UseFeedControlOptions<I extends ListItem = ListItem> {
	/** Список элементов, отображаемых в компоненте */
  list: ItemList<I>
  /** Текущий сфокусированный ключ из коллекции */
  active: string | undefined
  /** Обработчик на изменение активного элемента в списке */
  changeActive(key: string | undefined): void
  /** Метод, изменяющий текущий сфокусированный элемент */
  changeFocus(key: string | undefined): void
}

export interface UseFeedControl {
	/** Обработчик на нажатие клавиш */
	onKeyDown: KeyboardEventHandler
}
