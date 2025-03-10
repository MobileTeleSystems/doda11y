import type { KeyboardEventHandler } from 'react'

export interface UseMenuItemControlOptions {
  /** Метод, вызываемый на активацию элемента меню */
  onActivate?(): void
}

export interface UseMenuItemControl {
	/** Обработчик на нажатие клавиш */
	onKeyDown: KeyboardEventHandler
}
