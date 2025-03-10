import {
	UseSelectComboboxControlOptions,
	UseSelectComboboxControl
} from '../useSelectComboboxControl'
import { UseSelectComboboxProps, UseSelectComboboxPropsOptions } from '../useSelectComboboxProps'

export type UseSelectComboboxOptions<T extends Record<string, any>> = UseSelectComboboxControlOptions<T> & UseSelectComboboxPropsOptions

export type UseSelectUnionComboboxProps<T extends HTMLElement> = UseSelectComboboxProps<T>['comboboxProps'] & UseSelectComboboxControl

export interface UseSelectCombobox<T extends HTMLElement> {
	/** Свойства, необходимые для доступности combobox элемента в составе select */
	comboboxProps: UseSelectUnionComboboxProps<T>
}
