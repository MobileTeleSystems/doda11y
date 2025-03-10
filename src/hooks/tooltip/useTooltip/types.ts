import type { UseTooltipControl, UseTooltipControlOptions } from '../useTooltipControl'
import type { UseTooltipProps, UseTooltipPropsOptions } from '../useTooltipProps'

export type UseTooltipOptions = UseTooltipPropsOptions &  UseTooltipControlOptions

export type UseTooltipUnionTooltipProps<T extends HTMLElement> = UseTooltipProps<T>['tooltipProps']

export type UseTooltipUnionTooltipTriggerProps<T extends HTMLElement> = UseTooltipProps<T>['tooltipTriggerProps']

export type UseTooltipUnionTooltipContainerProps = UseTooltipControl

export interface UseTooltip<T extends HTMLElement> {
	/** Свойства, необходимые для доступности tooltip */
	tooltipProps: UseTooltipUnionTooltipProps<T>
	/** Свойства, необходимые для доступности tooltip trigger */
	tooltipTriggerProps: UseTooltipUnionTooltipTriggerProps<T>
	/** Свойства, необходимые для доступности tooltip container */
	tooltipContainerProps: UseTooltipUnionTooltipContainerProps
}
