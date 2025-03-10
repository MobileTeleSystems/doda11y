import type { LabelsProps, UseLabelsPropsOptions } from '../../labels'

export interface UseGroupPropsOptions extends  UseLabelsPropsOptions {
    /** Признак, использовать ли семантическую роль. В случае, если используется семантический тег (например `<button>` или `<article>`, лучше передать `false`) */
    withSemanticRole?: boolean
}

export type GroupProps<T extends HTMLElement> = {
	/** Роль group */
	role?: 'group'
} & LabelsProps<T>

export interface UseGroupProps<T extends HTMLElement> {
	/** Свойства, необходимые для доступности group */
	groupProps: GroupProps<T>
}
