import { UseMenuItemRadioProps, UseMenuItemRadioPropsOptions } from '../useMenuItemRadioProps'
import { UseMenuItemRadioControl, UseMenuItemRadioControlOptions } from '../useMenuItemRadioControl'

export type UseMenuItemRadioOptions = UseMenuItemRadioControlOptions & UseMenuItemRadioPropsOptions

export type UseMenuItemRadioUnionProps<T extends HTMLElement> = UseMenuItemRadioControl & UseMenuItemRadioProps<T>['menuItemRadioProps']

export interface UseMenuItemRadio<T extends HTMLElement> {
	/** Свойства, необходимые для доступности menuItemRadio */
	menuItemRadioProps: UseMenuItemRadioUnionProps<T>
}
