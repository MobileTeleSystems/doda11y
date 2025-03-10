import type { UseMenuButtonControl, UseMenuButtonControlOptions } from '../useMenuButtonControl'
import type { UseMenuButtonProps, UseMenuButtonPropsOptions } from '../useMenuButtonProps'

export type UseMenuButtonOptions = UseMenuButtonControlOptions & UseMenuButtonPropsOptions

export type UseMenuButtonUnionButtonProps<T extends HTMLElement> = UseMenuButtonControl & UseMenuButtonProps<T>['buttonProps']

export interface UseMenuButton<T extends HTMLElement> {
	/** Свойства, необходимые для доступности button */
	buttonProps: UseMenuButtonUnionButtonProps<T>
}
