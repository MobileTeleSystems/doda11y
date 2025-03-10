import type { KeyboardEventHandler } from 'react'

export interface UseCheckboxControlOptions {
  /** Обработчик на активацию checkbox */
  onToggle?(): void
}

export interface UseCheckboxControl {
	/** Обработчик на нажатие клавиш */
	onKeyDown: KeyboardEventHandler
}
