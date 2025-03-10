import type { UseComboboxControl, UseComboboxControlOptions } from '../useComboboxControl'
import type { UseComboboxProps, UseComboboxPropsOptions } from '../useComboboxProps'
import { ListItem } from '../../../../lib'

export type UseComboboxOptions<I extends ListItem = ListItem> = UseComboboxControlOptions<I> & UseComboboxPropsOptions

export type UseComboboxUnionProps<T extends HTMLElement = HTMLElement> = UseComboboxProps<T>['comboboxProps'] & UseComboboxControl

export interface UseCombobox<T extends HTMLElement = HTMLElement> {
	/** Свойства, необходимые для доступности input элемента в составе combobox */
	comboboxProps: UseComboboxUnionProps<T>
}
