import type { KeyboardEventHandler } from 'react'
import { ItemList, ListItem } from '../../../../lib'

export interface UseSelectComboboxControlOptions<I extends ListItem = ListItem> {
	/** Список элементов, отображаемых в компоненте */
  list: ItemList<I>
	/** Признак, открыто ли всплывающий popup компонента */
  isOpen: boolean
	/** id popup */
  popupId: string
	/** Обработчик на закрытие компонента */
  onClose(): void
	/** Обработчик на открытие компонента */
  onOpen(): void
	/** Метод на изменение активного элемента в списке */
  changeActive(active: string | undefined): void
  /** Метод, изменяющий текущий сфокусированный элемент */
  changeFocus(active: string | undefined): void
}

export interface UseSelectComboboxControl {
	/** Обработчик на нажатие клавиш */
	onKeyDown: KeyboardEventHandler
}
