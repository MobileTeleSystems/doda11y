import {
	UseMenuItemCheckboxProps,
	UseMenuItemCheckboxPropsOptions,
} from '../useMenuItemCheckboxProps'
import { UseMenuItemCheckboxControl, UseMenuItemCheckboxControlOptions } from '../useMenuItemCheckboxControl'

export type UseMenuItemCheckboxOptions = UseMenuItemCheckboxPropsOptions & UseMenuItemCheckboxControlOptions

export type UseMenuItemCheckboxUnionProps<T extends HTMLElement> = UseMenuItemCheckboxProps<T>['menuItemCheckboxProps'] & UseMenuItemCheckboxControl

export interface UseMenuItemCheckbox<T extends HTMLElement> {
	/** Свойства, необходимые для доступности menuItemRadio */
	menuItemCheckboxProps: UseMenuItemCheckboxUnionProps<T>
}
