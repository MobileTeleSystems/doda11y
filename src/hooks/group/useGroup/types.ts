import type { UseGroupProps, UseGroupPropsOptions } from '../useGroupProps/types'

export type UseGroupOptions = UseGroupPropsOptions

export type UseGroupUnionGroupProps<T extends HTMLElement> = UseGroupProps<T>['groupProps']

export interface UseGroup<T extends HTMLElement> {
	/** Свойства, необходимые для доступности group */
	groupProps: UseGroupUnionGroupProps<T>
}
