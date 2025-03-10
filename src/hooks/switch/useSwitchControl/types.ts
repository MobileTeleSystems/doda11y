import type { KeyboardEventHandler } from 'react'

export interface UseSwitchControlOptions {
  /** Обработчик на изменение состояния switch */
  onToggle?(): void
}

export interface UseSwitchControl {
	/** Обработчик на нажатие клавиш */
	onKeyDown: KeyboardEventHandler
}
