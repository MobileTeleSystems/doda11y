import { useMemo } from 'react'
import { type UseFeedArticle, type UseFeedArticleOptions, UseFeedArticleUnionFeedProps } from './types'
import { useFeedArticleProps } from '../useFeedArticleProps'

export const useFeedArticle = <T extends HTMLElement>({ labelledBy, label, withSemanticRole, description, describedBy, posInSet, setSize, focusable }: UseFeedArticleOptions): UseFeedArticle<T> => {
	const { feedArticleProps } =  useFeedArticleProps({ labelledBy, label, withSemanticRole, description, describedBy, posInSet, setSize, focusable })

	const unionFeedArticleProps: UseFeedArticleUnionFeedProps<T> = useMemo(
		() =>
			({
				...feedArticleProps
			}),
		[feedArticleProps]
	)

	return { feedArticleProps: unionFeedArticleProps }
}
