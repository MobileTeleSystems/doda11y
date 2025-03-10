import { KeyboardEventHandler } from 'react'

export interface UseMenuItemRadioGroupControlOptions {
  /** Обработчик на активацию radio кнопку */
  onActivate?(): void
}

export interface UseMenuItemRadioGroupControl {
  /** Обработчик на нажатие клавиш */
  onKeyDown: KeyboardEventHandler
}
