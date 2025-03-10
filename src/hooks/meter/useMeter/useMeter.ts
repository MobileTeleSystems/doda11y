import { useMemo } from 'react'
import { useMeterProps } from '../useMeterProps'
import { type UseMeter, type UseMeterOptions, UseMeterUnionMeterProps } from './types'

export const useMeter = <T extends HTMLElement>({ valueMax, valueNow, valueText, valueMin, labelledBy, label }: UseMeterOptions): UseMeter<T> => {
	const { meterProps } =  useMeterProps({ valueMax, valueNow, valueText, valueMin, labelledBy, label })

	const unionMeterProps: UseMeterUnionMeterProps<T> = useMemo(
		() =>
			({
				...meterProps
			}),
		[meterProps]
	)

	return { meterProps: unionMeterProps }
}
