import type { FocusEventHandler, KeyboardEventHandler } from 'react'
import { ItemList } from '../../../lib'
import type { Orientation } from '../../../types'
import type { SelectionControl } from '../../selection'
import { ListItem } from '../../../lib'

export interface UseListboxControlOptions<I extends ListItem = ListItem> {
	/** Список элементов, отображаемых в компоненте */
  list: ItemList<I>
	/** Ориентация списка. По умолчанию - `vertical`  */
  orientation?: Orientation
	/** Selection методы для управления выбором */
  selection: SelectionControl
	/** Свойство, обозначающее активный элемент */
  active: string | undefined
	/** Метод, изменяющий активный элемент */
  changeActive(id: string | undefined): void
  /** Метод, изменяющий текущий сфокусированный элемент */
  changeFocus(id: string | undefined): void
}

export interface UseListboxControl {
	/** Обработчик на нажатие клавиш */
	onKeyDown: KeyboardEventHandler
  /** Обработчик на focus */
  onFocus: FocusEventHandler
}
