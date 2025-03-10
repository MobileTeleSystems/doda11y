import { HTMLAttributes } from 'react'

export interface UseSelectListboxPropsOptions {
	/** Признак, определяющий, доступен ли множественный выбор для списка. По умолчанию - `false` */
  multiSelectable?: boolean
  /** Признак, использовать ли семантическую роль. В случае, если используется семантический тег (например `<button>` или `<article>`, лучше передать `false`) */
  withSemanticRole?: boolean
  /** id элемента  */
  id?: string
}

export interface SelectListboxProps<T extends HTMLElement> {
	/** Роль listbox */
	role?: 'listbox'
	/** Свойство, означающее, должен ли элемент участвовать в последовательности с помощью клавиатуры и в каком порядке */
	tabIndex: -1
  /** Признак, определяющий, доступен ли множественный выбор для списка. По умолчанию - `false` */
  'aria-multiselectable'?: HTMLAttributes<T>['aria-multiselectable']
  /** Свойство, обозначающее id элемента  */
  id?: string
}

export interface UseSelectListboxProps<T extends HTMLElement> {
	/** Свойства, необходимые для доступности listbox элемента в составе select */
	listboxProps: SelectListboxProps<T>
}
