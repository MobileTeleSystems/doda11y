import type { UseOptionProps, UseOptionPropsOptions } from '../useOptionProps'

export type UseOptionOptions = UseOptionPropsOptions

export type UseOptionUnionOptionProps<T extends HTMLElement> = UseOptionProps<T>['optionProps']

export interface UseOption<T extends HTMLElement> {
	/** Свойства, необходимые для доступности option */
	optionProps: UseOptionUnionOptionProps<T>
}
