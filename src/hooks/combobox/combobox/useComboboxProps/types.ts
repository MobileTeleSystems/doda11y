import type { AutoComplete, Popup } from '../../../../types'
import type { PopupTriggerProps } from '../../../popup'

export interface UseComboboxPropsOptions {
	/** Признак, открыт ли список значений */
  isOpen: boolean
	/** Свойство, обозначающее текущий активный элемент */
  active: string | undefined
	/** Тип popup */
  popupType?: Popup
	/** id элемента */
  id?: string
	/** id popup элемента */
  popupId: string
	/** Свойство, обозначающее режим автодополнения */
  autoComplete?: AutoComplete
  /** Признак, использовать ли семантическую роль. В случае, если используется семантический тег (например `<button>` или `<article>`, лучше передать `false`) */
  withSemanticRole?: boolean
}

export interface ComboboxProps<T extends HTMLElement> extends PopupTriggerProps<T> {
	/** Роль combobox */
	role?: 'combobox'
	/** Свойство, означающее, должен ли элемент участвовать в последовательности с помощью клавиатуры и в каком порядке */
	tabIndex: 0 | -1,
	/** Свойство, обозначающее режим автодополнения */
	'aria-autocomplete'?: AutoComplete
	/** id элемента */
	id?: string
}

export interface UseComboboxProps<T extends HTMLElement> {
	/** Свойства, необходимые для доступности input элемента в составе combobox */
	comboboxProps: ComboboxProps<T>
}
