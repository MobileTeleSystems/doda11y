import type { KeyboardEventHandler } from 'react'

export interface UseLinkControlOptions {
	/** Обработчик на редирект (нажатие `enter`) */
  onRedirect?(): void
	/** Обработчик на открытие контекстного меню (`shift + f10`) */
  onOpenContextMenu?(): void
}

export interface UseLinkControl {
	/** Обработчик на нажатие клавиш */
	onKeyDown: KeyboardEventHandler
}
