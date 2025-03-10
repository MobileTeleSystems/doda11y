import { KeyboardEventHandler } from 'react'

export interface UseItemMatrixControlOptions {
  /** Свойство, обозначающее активный элемент в коллекции */
  active?: string
  /** Метод, изменяющий текущий сфокусированный элемент списка */
  changeFocus?(active: string): void
  /** Метод, изменяющий активный элемент списка */
  changeActive?(active: string | undefined): void
}

export interface UseItemMatrixControl {
  /** Обработчик на нажатие клавиш */
  onKeyDown: KeyboardEventHandler
}
