import type { KeyboardEvent, KeyboardEventHandler } from 'react'

export interface UseButtonControlOptions<T extends HTMLElement> {
	/** Обработчик нажатия на кнопку */
  onPress?: (e: KeyboardEvent<T>) => void
}

export interface UseButtonControl {
	/** Обработчик нажатия (keyDown) на кнопку */
	onKeyDown: KeyboardEventHandler
	/** Обработчик нажатия (keyUp) на кнопку */
	onKeyUp: KeyboardEventHandler
}
