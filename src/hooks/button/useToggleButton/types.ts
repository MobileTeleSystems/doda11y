import type { UseButtonOptions } from '../useButton'
import type { UseToggleButtonControl } from '../useToggleButtonControl'
import type { UseToggleButtonProps, UseToggleButtonPropsOptions } from '../useToggleButtonProps'

export type UseToggleButtonOptions<T extends HTMLElement> = UseButtonOptions<T> & UseToggleButtonPropsOptions

export type UseToggleButtonUnionButtonProps<T extends HTMLElement> = UseToggleButtonProps<T>['toggleButtonProps'] & UseToggleButtonControl

export interface UseToggleButton<T extends HTMLElement> {
	/** Свойства, необходимые для доступности toggleButton */
	toggleButtonProps: UseToggleButtonUnionButtonProps<T>
}
