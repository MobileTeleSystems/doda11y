import { UseCheckboxProps, UseCheckboxPropsOptions } from '../useCheckboxProps'
import { UseCheckboxControl, UseCheckboxControlOptions } from '../useCheckboxControl'

export type UseCheckboxOptions = UseCheckboxPropsOptions & UseCheckboxControlOptions

export type UseCheckboxUnionOptionProps<T extends HTMLElement> = UseCheckboxProps<T>['checkboxProps'] & UseCheckboxControl

export interface UseCheckbox<T extends HTMLElement> {
	/** Свойства, необходимые для доступности */
	checkboxProps: UseCheckboxUnionOptionProps<T>
}
