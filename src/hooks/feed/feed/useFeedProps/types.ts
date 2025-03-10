import type { LabelsProps, UseLabelsPropsOptions } from '../../../labels'
import { HTMLAttributes } from 'react'

export interface UseFeedPropsOptions extends UseLabelsPropsOptions {
  /** Признак, определяющий, изменяется ли в данный момент компонент */
  isBusy?: boolean
  /** Признак, использовать ли семантическую роль. В случае, если используется семантический тег (например `<button>` или `<article>`, лучше передать `false`) */
  withSemanticRole?: boolean
}

export interface FeedProps<T extends HTMLElement> extends LabelsProps<T> {
	/** Роль feed */
	role?: 'feed',
  /** Признак, обозначающий, подгружает ли элемент контент в данный момент */
  'aria-busy': HTMLAttributes<T>['aria-busy']
}

export interface UseFeedProps<T extends HTMLElement> {
	/** Свойства, необходимые для доступности Feed */
	feedProps: FeedProps<T>
}
