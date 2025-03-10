import type { KeyboardEventHandler } from 'react'

export interface UseMenuButtonControlOptions {
  /** Признак, открыто ли меню */
  isOpen: boolean
	/** Обработчик на открытие меню */
  onOpen(): void
	/** Обработчик на фокусирование первого элемента меню */
  onFocusFirst(): void
	/** Обработчик на фокусирование последнего элемента */
  onFocusLast(): void
}

export interface UseMenuButtonControl {
	/** Обработчик на нажатие клавиш */
	onKeyDown: KeyboardEventHandler
}
