import type { UseAlertProps, UseAlertPropsOptions } from '../useAlertProps'

export type UseAlertOptions = UseAlertPropsOptions

export type UseAlertUnionProps<T extends HTMLElement> = UseAlertProps<T>['alertProps']

export interface UseAlert<T extends HTMLElement> {
	/** Свойства, необходимые для доступности alert */
	alertProps: UseAlertUnionProps<T>
}
