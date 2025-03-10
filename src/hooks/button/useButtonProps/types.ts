import type { LabelsProps, UseLabelsPropsOptions } from '../../labels'

export interface UseButtonPropsOptions extends UseLabelsPropsOptions {
	/** Признак, является ли кнопка заблокированной для интерактивного взаимодействия */
    isDisabled?: boolean
    /** Признак, использовать ли семантическую роль. В случае, если используется семантический тег (например `<button>` или `<article>`, лучше передать `false`) */
    withSemanticRole?: boolean
}

export interface ButtonProps<T extends HTMLElement> extends LabelsProps<T> {
	/** Роль кнопки */
	role?: 'button',
	/** Признак, указывающий на то, можно ли изменять или как-то взаимодействовать с элементом */
	'aria-disabled'?: boolean
}

export interface UseButtonProps<T extends HTMLElement> {
	/** Свойства, необходимые для доступности button */
	buttonProps: ButtonProps<T>
}
