import { useMemo } from 'react'
import { useLabelsProps } from '../../labels'
import type { ProgressBarProps, UseProgressBarProps, UseProgressBarPropsOptions } from './types'

export const useProgressBarProps = <T extends HTMLElement>({ valueMax, valueNow, valueText, valueMin, labelledBy, label, withSemanticRole = true }: UseProgressBarPropsOptions): UseProgressBarProps<T> => {
	const { labelProps } = useLabelsProps({ label, labelledBy })
 
	const progressBarProps: ProgressBarProps<T> = useMemo(
		() =>
			({
				role: withSemanticRole ? 'progressbar' : undefined,
				'aria-valuemax': valueMax,
				'aria-valuemin': valueMin,
				'aria-valuenow': valueNow,
				'aria-valuetext': valueText,
				...labelProps,
			}),
		[labelProps, valueMax, valueMin, valueNow, valueText, withSemanticRole]
	)

	return { progressBarProps }
}
