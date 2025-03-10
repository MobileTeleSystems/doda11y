import { ListItem } from '../../../../lib'
import { UseComboboxListboxProps, UseComboboxListboxPropsOptions } from '../useComboboxListboxProps'
import { UseComboboxListboxControl, UseComboboxListboxControlOptions } from '../useComboboxListboxControl'

export type UseComboboxListboxOptions<I extends ListItem = ListItem> = UseComboboxListboxControlOptions<I> & UseComboboxListboxPropsOptions

export type UseComboboxListboxUnionProps<T extends HTMLElement, I extends ListItem = ListItem> = UseComboboxListboxProps<T>['listboxProps'] & Omit<UseComboboxListboxControl<I>, 'filteredList'>

export interface UseComboboxListbox<T extends HTMLElement = HTMLElement, I extends ListItem = ListItem> {
	/** Свойства, необходимые для доступности listbox элемента в составе combobox */
	listboxProps: UseComboboxListboxUnionProps<T, I>
}
