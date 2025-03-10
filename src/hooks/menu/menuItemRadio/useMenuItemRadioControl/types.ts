import type { KeyboardEventHandler } from 'react'

export interface UseMenuItemRadioControlOptions {
  /** Метод, вызываемый на активацию элемента radio меню */
  onActivate?(): void
}

export interface UseMenuItemRadioControl {
	/** Обработчик на нажатие клавиш */
	onKeyDown: KeyboardEventHandler
}
