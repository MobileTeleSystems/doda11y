import type { UseMeterProps, UseMeterPropsOptions } from '../useMeterProps'

export type UseMeterOptions = UseMeterPropsOptions

export type UseMeterUnionMeterProps<T extends HTMLElement> = UseMeterProps<T>['meterProps']

export interface UseMeter<T extends HTMLElement> {
	/** Свойства, необходимые для доступности meter */
	meterProps: UseMeterUnionMeterProps<T>
}
