import { HTMLAttributes } from 'react'

export interface UseComboboxListboxPropsOptions {
	/** id элемента */
  id?: string
  /** Признак, использовать ли семантическую роль. В случае, если используется семантический тег (например `<button>` или `<article>`, лучше передать `false`) */
  withSemanticRole?: boolean
}

export interface ComboboxListboxProps<T extends HTMLElement> {
	/** Роль listbox */
	role?: 'listbox'
  /** Признак, определяющий, доступен ли множественный выбор для списка. По умолчанию - `false` */
  'aria-multiselectable'?: HTMLAttributes<T>['aria-multiselectable']
	/** Свойство, означающее, должен ли элемент участвовать в последовательности с помощью клавиатуры и в каком порядке */
	tabIndex: -1,
}

export interface UseComboboxListboxProps<T extends HTMLElement> {
	/** Свойства, необходимые для доступности listbox элемента в составе combobox */
	listboxProps: ComboboxListboxProps<T>
}
