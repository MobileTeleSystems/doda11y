import { UseSwitchProps, UseSwitchPropsOptions } from '../useSwitchProps'
import { UseSwitchControl, UseSwitchControlOptions } from '../useSwitchControl'

export type UseSwitchOptions = UseSwitchPropsOptions & UseSwitchControlOptions

export type UseSwitchUnionOptionProps<T extends HTMLElement> = UseSwitchProps<T>['switchProps'] & UseSwitchControl

export interface UseSwitch<T extends HTMLElement> {
	/** Свойства, необходимые для доступности */
	switchProps: UseSwitchUnionOptionProps<T>
}
