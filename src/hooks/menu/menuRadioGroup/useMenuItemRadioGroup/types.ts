import {
	UseMenuItemRadioGroupControl,
	UseMenuItemRadioGroupControlOptions
} from '../useMenuItemRadioGroupControl'
import { UseMenuItemRadioGroupProps, UseMenuItemRadioGroupPropsOptions } from '../useMenuItemRadioGroupProps'

export type UseMenuItemRadioGroupOptions = UseMenuItemRadioGroupPropsOptions & UseMenuItemRadioGroupControlOptions

export type UseMenuItemRadioGroupUnionProps<T extends HTMLElement> = UseMenuItemRadioGroupProps<T>['menuItemRadioGroupProps'] & UseMenuItemRadioGroupControl

export interface UseMenuItemRadioGroup<T extends HTMLElement> {
	/** Свойства, необходимые для доступности menuItemRadio */
	menuItemRadioGroupProps: UseMenuItemRadioGroupUnionProps<T>
}
