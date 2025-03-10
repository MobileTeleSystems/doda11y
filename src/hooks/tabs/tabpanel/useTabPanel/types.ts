import { UseTabPanelProps, UseTabPanelPropsOptions } from '../useTabPanelProps'

export type UseTabPanelOptions = UseTabPanelPropsOptions

export type UseTabPanelUnionProps<T extends HTMLElement> = UseTabPanelProps<T>['tabPanelProps']

export interface UseTabPanel<T extends HTMLElement> {
	/** Свойства, необходимые для доступности Tab */
	tabPanelProps: UseTabPanelUnionProps<T>
}
