import { useMemo } from 'react'
import { useLabelsProps } from '../../labels'
import { type MeterProps, UseMeterProps, UseMeterPropsOptions } from './types'

export const useMeterProps = <T extends HTMLElement>({ valueMax, valueNow, valueText, valueMin, labelledBy, label, withSemanticRole = true }: UseMeterPropsOptions): UseMeterProps<T> => {
	const { labelProps } = useLabelsProps({ label, labelledBy })
 
	const meterProps: MeterProps<T> = useMemo(
		() =>
			({
				role: withSemanticRole ? 'meter' : undefined,
				'aria-valuemax': valueMax,
				'aria-valuemin': valueMin,
				'aria-valuenow': valueNow,
				'aria-valuetext': valueText,
				...labelProps
			}),
		[labelProps, valueMax, valueMin, valueNow, valueText, withSemanticRole]
	)

	return { meterProps }
}
