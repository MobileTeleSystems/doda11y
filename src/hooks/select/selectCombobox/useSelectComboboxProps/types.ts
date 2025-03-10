import { PopupTriggerProps } from '../../../popup'

export interface UseSelectComboboxPropsOptions {
	/** Признак, открыто ли всплывающий popup компонента */
  isOpen: boolean
	/** Свойство, обозначающее активный элемент в списке */
  active?: string
	/** id popup */
  popupId: string
  /** Признак, использовать ли семантическую роль. В случае, если используется семантический тег (например `<button>` или `<article>`, лучше передать `false`) */
  withSemanticRole?: boolean
}

export interface SelectComboboxProps<T extends HTMLElement> extends PopupTriggerProps<T> {
	/** Роль combobox */
	role?: 'combobox'
	/** Свойство, означающее, должен ли элемент участвовать в последовательности с помощью клавиатуры и в каком порядке */
  tabIndex: 0 | -1
}

export interface UseSelectComboboxProps<T extends HTMLElement> {
	/** Свойства, необходимые для доступности combobox элемента в составе select */
	comboboxProps: SelectComboboxProps<T>
}
