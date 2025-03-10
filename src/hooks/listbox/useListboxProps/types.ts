import type { HTMLAttributes } from 'react'
import type { Orientation } from '../../../types'

export interface UseListboxPropsOptions {
	/** Признак, определяющий, доступен ли множественный выбор для списка. По умолчанию - `false` */
  multiSelectable?: boolean
	/** Ориентация списка. По умолчанию - `vertical`  */
  orientation?: Orientation
	/** id элемента  */
  id?: string
  /** Признак, использовать ли семантическую роль. В случае, если используется семантический тег (например `<button>` или `<article>`, лучше передать `false`) */
  withSemanticRole?: boolean
  /** Свойство, обозначающее активный элемент */
  active: string | undefined
}

export interface ListboxProps {
	/** Роль listbox */
	role?: 'listbox'
  /** Свойство, означающее, должен ли элемент участвовать в последовательности с помощью клавиатуры и в каком порядке */
  tabIndex?: -1 | 0
	/** Свойство aria, определяющее, доступен ли множественный выбор для списка. По умолчанию - `false` */
	'aria-multiselectable': HTMLAttributes<HTMLElement>['aria-multiselectable']
	/** Ориентация элемента. По умолчанию - `vertical`  */
	'aria-orientation': HTMLAttributes<HTMLElement>['aria-orientation']
	/** id элемента */
	id?: string
}

export interface UseListboxProps {
	/** Свойства, необходимые для доступности listbox */
	listboxProps: ListboxProps
}
