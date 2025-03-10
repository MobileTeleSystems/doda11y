import { DescriptionProps, UseDescriptionPropsOptions } from '../../description'

export interface UseTooltipPropsOptions extends UseDescriptionPropsOptions {
    /** Признак, использовать ли семантическую роль. В случае, если используется семантический тег (например `<button>` или `<article>`, лучше передать `false`) */
    withSemanticRole?: boolean
}

export interface TooltipProps {
	/** Роль tooltip */
	role?: 'tooltip'
}

export type TooltipTriggerProps<T extends HTMLElement> = DescriptionProps<T>

export interface UseTooltipProps<T extends HTMLElement> {
	/** Свойства, необходимые для доступности tooltip */
	tooltipProps: TooltipProps
	/** Свойства, необходимые для доступности tooltip trigger */
	tooltipTriggerProps: TooltipTriggerProps<T>
}
