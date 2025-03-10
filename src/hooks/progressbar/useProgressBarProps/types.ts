import type { HTMLAttributes } from 'react'
import type { LabelsProps, UseLabelsPropsOptions } from '../../labels'

export interface UseProgressBarPropsOptions extends UseLabelsPropsOptions {
	/** Текущее значение */
    valueNow: number
	/** Минимальное значение */
    valueMin: number
	/** Максимальное значение */
    valueMax: number
	/** Текстовое описание значения */
    valueText?: string
    /** Признак, использовать ли семантическую роль. В случае, если используется семантический тег (например `<button>` или `<article>`, лучше передать `false`) */
    withSemanticRole?: boolean
}

export interface ProgressBarProps<T extends HTMLElement> extends LabelsProps<T> {
	/** Роль progressbar */
	role?: 'progressbar'
	/** Максимальное значение */
	'aria-valuemax': HTMLAttributes<T>['aria-valuemax']
	/** Минимальное значение */
	'aria-valuemin': HTMLAttributes<T>['aria-valuemin']
	/** Текущее значение meter */
	'aria-valuenow': HTMLAttributes<T>['aria-valuenow']
	/** Текстовое описание значения */
	'aria-valuetext': HTMLAttributes<T>['aria-valuetext']
}

export interface UseProgressBarProps<T extends HTMLElement> {
	/** Свойства, необходимые для доступности progress bar */
	progressBarProps: ProgressBarProps<T>
}
