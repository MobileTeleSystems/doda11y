import { useMemo } from 'react'
import { useTooltipControl } from '../useTooltipControl'
import { useTooltipProps } from '../useTooltipProps'
import type {
	UseTooltip,
	UseTooltipOptions,
	UseTooltipUnionTooltipContainerProps,
	UseTooltipUnionTooltipProps,
	UseTooltipUnionTooltipTriggerProps
} from './types'

export const useTooltip = <T extends HTMLElement>({ describedBy, onClose }: UseTooltipOptions): UseTooltip<T> => {
	const { tooltipProps, tooltipTriggerProps } = useTooltipProps({ describedBy })
	const { onKeyDown } = useTooltipControl({ onClose })

	const unionTooltipProps: UseTooltipUnionTooltipProps<T> = useMemo(
		() =>
			({
				...tooltipProps
			}),
		[tooltipProps]
	)

	const unionTooltipTriggerProps: UseTooltipUnionTooltipTriggerProps<T> = useMemo(
		() =>
			({
				...tooltipTriggerProps
			}),
		[tooltipTriggerProps]
	)

	const unionTooltipContainerProps: UseTooltipUnionTooltipContainerProps = useMemo(
		() =>
			({
				onKeyDown
			}),
		[onKeyDown]
	)

	return { tooltipProps: unionTooltipProps, tooltipContainerProps: unionTooltipContainerProps, tooltipTriggerProps: unionTooltipTriggerProps }
}
