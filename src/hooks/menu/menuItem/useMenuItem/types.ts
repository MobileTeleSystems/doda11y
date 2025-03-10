import { UseMenuItemControl, UseMenuItemControlOptions } from '../useMenuItemControl'
import { UseMenuItemProps, UseMenuItemPropsOptions } from '../useMenuItemProps'

export type UseMenuItemOptions = UseMenuItemControlOptions & UseMenuItemPropsOptions

export type UseMenuItemUnionProps<T extends HTMLElement> = UseMenuItemControl & UseMenuItemProps<T>['menuItemProps']

export interface UseMenuItem<T extends HTMLElement> {
	/** Свойства, необходимые для доступности menuItem */
	menuItemProps: UseMenuItemUnionProps<T>
}
