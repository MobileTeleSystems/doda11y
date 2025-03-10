import type { UseTextPropsOptions, UseTextFieldProps } from '../useTextFieldProps/types'

export type UseTextFieldOptions = UseTextPropsOptions

export type UseTextFieldUnionInputProps<T extends HTMLElement> = UseTextFieldProps<T>['inputProps']

export type UseTextFieldUnionLabelProps<T extends HTMLElement> = UseTextFieldProps<T>['labelProps']

export interface UseTextField<T extends HTMLElement> {
	/** Свойства, необходимые для доступности input */
	inputProps: UseTextFieldUnionInputProps<T>
  /** Свойства, необходимые для доступности label */
  labelProps: UseTextFieldUnionLabelProps<T>
}
