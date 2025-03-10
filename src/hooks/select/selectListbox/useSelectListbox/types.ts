import { UseSelectListboxProps, UseSelectListboxPropsOptions } from '../useSelectListboxProps'
import { UseSelectListboxControl, UseSelectListboxControlOptions } from '../useSelectListboxControl'

export type UseSelectListboxOptions<G extends Record<string, any>> = UseSelectListboxPropsOptions & UseSelectListboxControlOptions<G>

export type UseSelectUnionListboxProps<T extends HTMLElement> = UseSelectListboxProps<T>['listboxProps'] & UseSelectListboxControl

export interface UseSelectListbox<T extends HTMLElement> {
	/** Свойства, необходимые для доступности listbox элемента в составе select */
	listboxProps: UseSelectUnionListboxProps<T>
}
