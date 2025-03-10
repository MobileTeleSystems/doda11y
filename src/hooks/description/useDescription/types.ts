import type { UseDescriptionProps, UseDescriptionPropsOptions } from '../useDescriptionProps'

export type UseDescriptionOptions = UseDescriptionPropsOptions

export type UseDescriptionUnionLabelProps<T extends HTMLElement> = UseDescriptionProps<T>['descriptionProps']

export interface UseDescription<T extends HTMLElement> {
	/** Свойства, необходимые для доступности description */
    descriptionProps: UseDescriptionUnionLabelProps<T>
}
