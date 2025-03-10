import type { FocusEventHandler, KeyboardEventHandler } from 'react'
import { ItemList, ListItem } from '../../../../lib'
import type { CollectionKey } from '../../../../types'
import type { SelectionControl } from '../../../selection'

export interface UseComboboxListboxControlOptions<I extends ListItem = ListItem> {
	/** Список элементов, отображаемых в компоненте */
  list: ItemList<I>
  /** html-ref на combobox */
  comboboxElement: HTMLElement | null
	/** Признак, открыто ли всплывающий popup компонента */
  isOpen: boolean
  /** Признак, зацикливать ли список */
  loopList: boolean
  /**
   * Признак, закрывать ли popup, когда выбрали элемент
   *
   * @default true
   * */
  closeOnSelect?: boolean
	/** Свойство, обозначающее активный элемент в списке */
  active: string | undefined
	/** Selection методы для управления выбором */
  selection: SelectionControl
	/** Обработчик на открытие компонента */
  onOpen(): void
	/** Обработчик на закрытие компонента */
  onClose(): void
	/** Обработчик на изменение активного элемента в списке */
  changeActive(id: string | undefined): void
  /** Метод, изменяющий текущий сфокусированный элемент */
  changeFocus(id: string | undefined): void
	/** Обработчик на выбор в списке */
  onSelect?(key: CollectionKey): void
}

export interface UseComboboxListboxControl<I extends ListItem = ListItem> {
	/** Обработчик на нажатие клавиш */
	onKeyDown: KeyboardEventHandler
	/** Обработчик на blur */
	onBlur: FocusEventHandler
}
