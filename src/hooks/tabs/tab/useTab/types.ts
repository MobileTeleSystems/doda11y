import { UseTabProps, UseTabPropsOptions } from '../useTabProps'
import { UseTabControl, UseTabControlOptions } from '../useTabControl'

export type UseTabOptions = UseTabPropsOptions & UseTabControlOptions

export type UseTabUnionProps<T extends HTMLElement> = UseTabProps<T>['tabProps'] & UseTabControl

export interface UseTab<T extends HTMLElement> {
	/** Свойства, необходимые для доступности Tab */
	tabProps: UseTabUnionProps<T>
}
