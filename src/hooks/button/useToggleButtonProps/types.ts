import type { ButtonProps, UseButtonPropsOptions } from '../useButtonProps'

export interface UseToggleButtonPropsOptions extends UseButtonPropsOptions {
	/** Признак, является ли кнопка в активированном состоянии */
    isPressed: boolean
}

export interface ToggleButtonProps<T extends HTMLElement> extends ButtonProps<T> {
	/** Признак, тогл состояния кнопки */
	'aria-pressed': boolean
}

export interface UseToggleButtonProps<T extends HTMLElement> {
	/** Свойства, необходимые для доступности toggleButton */
	toggleButtonProps: ToggleButtonProps<T>
}
