import type { KeyboardEventHandler } from 'react'
import { Orientation } from '../../../../types'

export interface UseItemListControlOptions {
	/** Свойство, обозначающее активный элемент в списке */
  active?: string
	/** Метод, изменяющий активный элемент списка */
  changeActive?(active: string): void
  /** Метод, изменяющий текущий сфокусированный элемент списка */
  changeFocus?(active: string): void
  /** Ориентация списка. По умолчанию - `vertical`  */
  orientation?: Orientation
  /** Признак, нужно ли повторять переход по списку по циклу */
  loop?: boolean
}

export interface UseItemListControl {
	/** Обработчик нажатия на клавиши */
	onKeyDown: KeyboardEventHandler
}
