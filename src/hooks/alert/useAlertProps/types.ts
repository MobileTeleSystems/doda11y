import { HTMLAttributes } from 'react'

export interface UseAlertPropsOptions {
  /** Признак, использовать ли семантическую роль. В случае, если используется семантический тег (например `<button>` или `<article>`, лучше передать `false`) */
  withSemanticRole?: boolean
  /** Признак, использовать ли семантическую роль. В случае, если используется семантический тег (например `<button>` или `<article>`, лучше передать `false`) */
  live?: 'polite' | 'assertive'
}

export interface AlertProps<T extends HTMLElement> {
	/** Роль alert */
	role?: 'alert',
  /** Свойство, указывающее на то, что при появлении alert необходимо прочитать его содержимое */
  'aria-live': HTMLAttributes<T>['aria-live']
}

export interface UseAlertProps<T extends HTMLElement> {
	/** Свойства, необходимые для доступности alert */
  alertProps: AlertProps<T>
}
