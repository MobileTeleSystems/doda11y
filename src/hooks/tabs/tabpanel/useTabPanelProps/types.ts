import { LabelsProps, UseLabelsPropsOptions } from '../../../labels'

export interface UseTabPanelPropsOptions extends UseLabelsPropsOptions {
  /** Признак, использовать ли семантическую роль. В случае, если используется семантический тег (например `<button>` или `<article>`, лучше передать `false`) */
  withSemanticRole?: boolean
}

export interface TabPanelProps<T extends HTMLElement> extends LabelsProps<T> {
	/** Роль Tab Panel */
	role?: 'tabpanel'
}


export interface UseTabPanelProps<T extends HTMLElement> {
	/** Свойства, необходимые для доступности Tab */
	tabPanelProps: TabPanelProps<T>
}
