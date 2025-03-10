import { type KeyboardEventHandler } from 'react'

export interface UsePopupTriggerControlOptions {
	/** Признак, определяющий, открыт ли popup */
  isOpen: boolean
	/** Признак, определяющий, нужно ли открывать popup на нажатие `Enter` или `Space` */
  isOpenOnEnterOrSpace?: boolean
	/** Признак, определяющий, нужно ли фокусироваться на первом элементе при нажатии `Enter` или `Space` */
  isFocusFirstOnEnterOrSpace?: boolean
	/** Признак, определяющий, нужно ли закрывать popup на нажатие `Esc` */
  closeOnEsc?: boolean
  /**
   * Признак, определяющий, нужно предотвращать поведение по умолчанию
   *
   * @default true
   * */
  preventDefault?: boolean
	/** Обработчик на открытие */
  onOpen(): void
	/** Обработчик на закрытие */
  onClose?(): void
	/** Обработчик на фокус первого элемента popup */
  onFocusFirst?(): void
	/** Обработчик на фокус последнего элемента popup */
  onFocusLast?(): void
}

export interface UsePopupTriggerControl {
	/** Обработчик на нажатие клавиш */
	onKeyDown: KeyboardEventHandler
}
