import type { UseProgressBarProps, UseProgressBarPropsOptions } from '../useProgressBarProps'

export type UseProgressBarOptions = UseProgressBarPropsOptions

export type UseProgressBarUnionOptions<T extends HTMLElement> = UseProgressBarProps<T>['progressBarProps']

export interface UseProgressBar<T extends HTMLElement> {
	/** Свойства, необходимые для доступности progress bar */
	progressBarProps: UseProgressBarUnionOptions<T>
}
