import { useMemo } from 'react'
import { useProgressBarProps } from '../useProgressBarProps'
import type { UseProgressBar, UseProgressBarOptions, UseProgressBarUnionOptions } from './types'

export const useProgressBar = <T extends HTMLElement>({ valueMax, valueNow, valueText, valueMin, labelledBy, label }: UseProgressBarOptions): UseProgressBar<T> => {
	const { progressBarProps } = useProgressBarProps({ label, labelledBy, valueMax, valueMin, valueNow, valueText })
 
	const unionProgressBarProps: UseProgressBarUnionOptions<T> = useMemo(
		() =>
			({
				...progressBarProps,
			}),
		[progressBarProps]
	)

	return { progressBarProps: unionProgressBarProps }
}
