import { UseDescriptionPropsOptions } from '../../../description'
import { UseLabelsPropsOptions } from '../../../labels'
import { HTMLAttributes } from 'react'

export interface UseFeedArticlePropsOptions extends UseDescriptionPropsOptions, UseLabelsPropsOptions {
  /** Признак, использовать ли семантическую роль. В случае, если используется семантический тег (например `<button>` или `<article>`, лучше передать `false`) */
  withSemanticRole?: boolean
  /** Размер коллекции, частью которой является элемент option */
  setSize: number
  /** Позиция элемента в коллекции */
  posInSet: number
  /** Признак, находится ли активный фокус на данном элементе. */
  focusable?: boolean
}

export interface FeedArticleProps<T extends HTMLElement> {
	/** Роль feed */
	role?: 'article'
  /** Свойство, означающее, должен ли элемент участвовать в последовательности с помощью клавиатуры и в каком порядке */
  tabIndex: 0 | -1,
  /** Свойство aria, определяющее позицию элемента в коллекции */
  'aria-posinset': HTMLAttributes<T>['aria-posinset']
  /** Свойство aria, определяющее количество элементов в коллекции */
  'aria-setsize': HTMLAttributes<T>['aria-setsize']
}

export interface UseFeedArticleProps<T extends HTMLElement> {
	/** Свойства, необходимые для доступности Feed */
	feedArticleProps: FeedArticleProps<T>
}
