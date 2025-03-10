import type { LabelsProps, UseLabelsPropsOptions } from '../../labels'

export interface UseImagePropsOptions extends UseLabelsPropsOptions {
    /** Признак, использовать ли семантическую роль. В случае, если используется семантический тег (например `<button>` или `<article>`, лучше передать `false`) */
    withSemanticRole?: boolean
}

export interface ImageProps<T extends HTMLElement> extends LabelsProps<T> {
	/** Роль img */
	role?: 'img'
}

export interface UseImageProps<T extends HTMLElement> {
	/** Свойства, необходимые для доступности image */
	imageProps: ImageProps<T>
}
