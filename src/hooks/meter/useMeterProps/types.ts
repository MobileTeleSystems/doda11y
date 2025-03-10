import type { HTMLAttributes } from 'react'
import type { LabelsProps, UseLabelsPropsOptions } from '../../labels'

export interface UseMeterPropsOptions extends UseLabelsPropsOptions {
	/** Текущее значение meter */
    valueNow: number
	/** Минимальное значение meter */
    valueMin: number
	/** Максимальное значение meter */
    valueMax: number
	/** Текстовое описание значения meter */
    valueText?: string
    /** Признак, использовать ли семантическую роль. В случае, если используется семантический тег (например `<button>` или `<article>`, лучше передать `false`) */
    withSemanticRole?: boolean
}

export interface MeterProps<T extends HTMLElement> extends LabelsProps<T> {
	/** Роль meter */
	role?: 'meter',
	/** Максимальное значение */
	'aria-valuemax': HTMLAttributes<T>['aria-valuemax']
	/** Минимальное значение */
	'aria-valuemin': HTMLAttributes<T>['aria-valuemin']
	/** Текущее значение meter */
	'aria-valuenow': HTMLAttributes<T>['aria-valuenow']
	/** Текстовое описание значения */
	'aria-valuetext': HTMLAttributes<T>['aria-valuetext']
}

export interface UseMeterProps<T extends HTMLElement> {
	/** Свойства, необходимые для доступности meter */
	meterProps: MeterProps<T>
}
