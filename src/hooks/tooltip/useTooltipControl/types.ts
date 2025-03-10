import type { KeyboardEventHandler } from 'react'

export interface UseTooltipControlOptions {
	/** Метод, вызываемый на close */
	onClose?(): void
}

export interface UseTooltipControl {
	/** Обработчик на нажатие клавиш */
	onKeyDown: KeyboardEventHandler
}
