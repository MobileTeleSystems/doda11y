import { UseRadioProps, UseRadioPropsOptions } from '../useRadioProps'

export type UseRadioOptions<T extends HTMLElement> = UseRadioPropsOptions<T>

export type UseRadioUnionOptionProps<T extends HTMLElement> = UseRadioProps<T>['radioProps']

export interface UseRadio<T extends HTMLElement> {
	/** Свойства, необходимые для доступности radio */
	radioProps: UseRadioUnionOptionProps<T>
}
