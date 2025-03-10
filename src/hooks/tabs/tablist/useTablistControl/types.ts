import type { FocusEventHandler, KeyboardEventHandler } from 'react'
import { ItemList, ListItem } from '../../../../lib'
import { Orientation } from '../../../../types'

export interface UseTablistControlOptions<I extends ListItem = ListItem> {
  /** Список элементов, отображаемых в компоненте */
  list: ItemList<I>
  /** Свойство, определяющее направление. По умолчанию - 'horizontal' */
  orientation?: Orientation
  /** Свойство, обозначающее активный элемент */
  active: string | undefined
  /** Признак, обозначающий, необходимо ли активировать вкладку на смену */
  activateOnChange?: boolean
  /** Метод, изменяющий активный элемент */
  changeActive(id: string | undefined): void
  /** Метод, изменяющий текущий сфокусированный элемент списка */
  changeFocus(id: string | undefined): void
  /** Метод, вызываемый на активацию */
  onActivate?(key: string): void
}

export interface UseTablistControl {
	/** Обработчик на нажатие клавиш */
	onKeyDown: KeyboardEventHandler
  /** Обработчик на focus */
  onFocus: FocusEventHandler
}
