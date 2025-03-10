export interface UseLinkPropsOptions {
    /** Признак, использовать ли семантическую роль. В случае, если используется семантический тег (например `<button>` или `<article>`, лучше передать `false`) */
    withSemanticRole?: boolean
}

export interface LinkProps {
	/** Роль link */
	role?: 'link',
}

export interface UseLinkProps {
	/** Свойства, необходимые для доступности link */
	linkProps: LinkProps
}
