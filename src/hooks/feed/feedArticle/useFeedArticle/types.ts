import type { UseFeedArticleProps, UseFeedArticlePropsOptions } from '../useFeedArticleProps'

export type UseFeedArticleOptions = UseFeedArticlePropsOptions

export type UseFeedArticleUnionFeedProps<T extends HTMLElement> = UseFeedArticleProps<T>['feedArticleProps']

export interface UseFeedArticle<T extends HTMLElement> {
	/** Свойства, необходимые для доступности Feed */
	feedArticleProps: UseFeedArticleUnionFeedProps<T>
}
