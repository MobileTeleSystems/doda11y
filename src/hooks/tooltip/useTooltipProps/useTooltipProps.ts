import { useMemo } from 'react'
import type { TooltipProps, TooltipTriggerProps, UseTooltipProps, UseTooltipPropsOptions } from './types'
import { useDescriptionProps } from '../../description'

export const useTooltipProps = <T extends HTMLElement>({ describedBy, description, withSemanticRole = true }: UseTooltipPropsOptions): UseTooltipProps<T> => {
	const { descriptionProps } = useDescriptionProps({ describedBy, description })

	const tooltipTriggerProps: TooltipTriggerProps<T> = useMemo(() => ({
		...descriptionProps
	}), [descriptionProps])
 
	const tooltipProps: TooltipProps = useMemo(
		() =>
			({
				role: withSemanticRole ? 'tooltip' : undefined,
			}),
		[withSemanticRole]
	)

	return { tooltipProps, tooltipTriggerProps }
}
