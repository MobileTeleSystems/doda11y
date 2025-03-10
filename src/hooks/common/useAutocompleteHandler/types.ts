import { FormEventHandler } from 'react'

export interface UseAutocompleteOptions {
  /** Функция, вызываемая для нахождения дополняющего значения */
  findCallback: (value: string) => string
}

export interface UseAutocomplete<T extends HTMLInputElement | HTMLTextAreaElement> {
  /** Обработчик на input */
  onInput?: FormEventHandler<T>
}
