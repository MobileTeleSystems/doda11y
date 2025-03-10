import type { KeyboardEventHandler } from 'react'

export interface UseTabControlOptions {
	/** Метод, вызываемый на активацию */
	onActivate?(): void
  /** Метод, вызываемый на открытие всплывающего меню */
  onOpenPopup?(): void
}

export interface UseTabControl {
	/** Обработчик на нажатие клавиш */
	onKeyDown: KeyboardEventHandler
}
