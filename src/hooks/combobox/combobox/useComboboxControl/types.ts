import type { FocusEventHandler, FormEventHandler, KeyboardEventHandler, RefObject } from 'react'
import { ItemList, ListItem } from '../../../../lib'
import { AutoComplete } from '../../../../types'

export interface UseComboboxControlOptions<I extends ListItem = ListItem> {
	/** Список элементов, отображаемых в компоненте */
  list: ItemList<I>
  /** Признак, открыт ли список значений */
  isOpen: boolean
  /** Свойство, обозначающее ссылку на HTMLElement listbox */
  listboxRef: RefObject<HTMLElement>
  /** Свойство, обозначающее режим автодополнения */
  autoComplete?: AutoComplete
  /** Метод очистки всех выбранных значений */
  clearSelect(): void
	/** Обработчик на открытие компонента */
  onOpen(): void
	/** Обработчик на закрытие компонента */
  onClose(): void
	/** Обработчик на изменение активного элемента в списке */
  changeActive(id: string | undefined): void
  /** Метод, изменяющий текущий сфокусированный элемент */
  changeFocus(id: string | undefined): void
}

export interface UseComboboxControl {
	/** Обработчик на нажатие клавиш */
	onKeyDown: KeyboardEventHandler
	/** Обработчик на input */
	onInput: FormEventHandler
  /** Обработчик на blur */
  onBlur: FocusEventHandler
}
