import type { FocusEventHandler, KeyboardEventHandler } from 'react'
import { ItemList, ListItem } from '../../../../lib'
import { SelectionControl } from '../../../selection'
import { CollectionKey } from '../../../../types'

export interface UseSelectListboxControlOptions<I extends ListItem = ListItem> {
	/** Список элементов, отображаемых в компоненте */
  list: ItemList<I>
	/** Признак, открыто ли всплывающий popup компонента */
  isOpen: boolean
  /** Признак, стоит ли зацикливать переход по списку */
  loopList?: boolean
  /** Признак, закрывать ли popup, когда выбрали элемент */
  closeOnSelect?: boolean
	/** Selection методы для управления выбором */
  selection: SelectionControl
	/** Свойство, обозначающее активный элемент в списке */
  active?: string
  /** html-ref на combobox */
  comboboxElement: HTMLElement | null
	/** Обработчик на закрытие компонента */
  onClose(): void
	/** Обработчик на открытие компонента */
  onOpen(): void
	/** Метод на изменение активного элемента в списке */
  changeActive(active: string | undefined): void
  /** Метод, изменяющий текущий сфокусированный элемент */
  changeFocus(active: string | undefined): void
  /** Обработчик на выбор в списке */
  onSelect?(key: CollectionKey): void
}

export interface UseSelectListboxControl {
	/** Обработчик на нажатие клавиш */
	onKeyDown: KeyboardEventHandler
	/** Обработчик на blur */
	onBlur: FocusEventHandler
}
