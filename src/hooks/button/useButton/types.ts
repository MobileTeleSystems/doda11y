import type { UseButtonControl, UseButtonControlOptions } from '../useButtonControl'
import type { UseButtonProps, UseButtonPropsOptions } from '../useButtonProps'

export type UseButtonOptions<T extends HTMLElement> = UseButtonPropsOptions & UseButtonControlOptions<T>

export type UseButtonUnionButtonProps<T extends HTMLElement> = UseButtonProps<T>['buttonProps'] & UseButtonControl

export interface UseButton<T extends HTMLElement> {
	/** Свойства, необходимые для доступности button */
	buttonProps: UseButtonUnionButtonProps<T>
}
