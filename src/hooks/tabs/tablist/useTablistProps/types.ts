import { LabelsProps, UseLabelsPropsOptions } from '../../../labels'
import { Orientation } from '../../../../types'
import { HTMLAttributes } from 'react'

export interface UseTablistPropsOptions extends UseLabelsPropsOptions {
  /** Признак, использовать ли семантическую роль. В случае, если используется семантический тег (например `<button>` или `<article>`, лучше передать `false`) */
  withSemanticRole?: boolean
  /** Свойство, определяющее направление. По умолчанию - 'horizontal' */
  orientation?: Orientation
  /** Свойство, обозначающее активный элемент */
  active?: string
}

export interface TablistProps<T extends HTMLElement> extends LabelsProps<T> {
	/** Роль Tablist */
	role?: 'tablist'
  /** Свойство, означающее, должен ли элемент участвовать в последовательности с помощью клавиатуры и в каком порядке */
  tabIndex?: 0 | -1
  /** Ориентация элемента. По умолчанию - `vertical`  */
  'aria-orientation': HTMLAttributes<HTMLElement>['aria-orientation'];
}


export interface UseTablistProps<T extends HTMLElement> {
	/** Свойства, необходимые для доступности Tablist */
	tablistProps: TablistProps<T>
}
