import { UseSubmenuProps, UseSubmenuPropsOptions } from '../useSubmenuProps'

export type UseSubmenuOptions = UseSubmenuPropsOptions

export type UseSubmenuUnionProps<T extends HTMLElement> = UseSubmenuProps<T>['submenuProps']

export interface UseSubmenu<T extends HTMLElement> {
	/** Свойства, необходимые для доступности tree элемента */
	submenuProps: UseSubmenuUnionProps<T>
}
