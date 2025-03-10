import type { LabelsProps, UseLabelsPropsOptions } from '../../../labels'

export interface UseSelectableDataGridPropsOptions extends UseLabelsPropsOptions {
  /** Признак, использовать ли семантическую роль. В случае, если используется семантический тег (например `<button>` или `<article>`, лучше передать `false`) */
  withSemanticRole?: boolean
}

export interface DataGridProps<T extends HTMLElement> extends LabelsProps<T> {
	/** Роль Grid */
	role?: 'grid',
}

export interface UseSelectableDataGridProps<T extends HTMLElement> {
	/** Свойства, необходимые для доступности Data Grid */
	gridProps: DataGridProps<T>
}
