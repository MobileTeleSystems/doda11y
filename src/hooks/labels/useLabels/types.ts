import type { UseLabelsProps, UseLabelsPropsOptions } from '../useLabelsProps'

export type UseLabelsOptions = UseLabelsPropsOptions

export type UseLabelsUnionLabelProps<T extends HTMLElement> = UseLabelsProps<T>['labelProps']

export interface UseLabels<T extends HTMLElement> {
	/** Свойства, необходимые для доступности label */
	labelProps: UseLabelsUnionLabelProps<T>
}
