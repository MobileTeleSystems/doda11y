import { useMemo } from 'react'
import { type FeedArticleProps, UseFeedArticleProps, UseFeedArticlePropsOptions } from './types'
import { useLabelsProps } from '../../../labels'
import { useDescriptionProps } from '../../../description'

export const useFeedArticleProps = <T extends HTMLElement>({ label, labelledBy, description, describedBy, withSemanticRole = true, posInSet, setSize, focusable }: UseFeedArticlePropsOptions): UseFeedArticleProps<T> => {
	const { labelProps } = useLabelsProps({ label, labelledBy })
	const { descriptionProps } = useDescriptionProps({ description, describedBy })

	const feedArticleProps: FeedArticleProps<T> = useMemo(
		() =>
			({
				role: withSemanticRole ? 'article' : undefined,
				tabIndex: focusable ? 0 : -1,
				'aria-posinset': posInSet,
				'aria-setsize': setSize,
				...labelProps,
				...descriptionProps,
			}),
		[withSemanticRole, labelProps, descriptionProps, posInSet, setSize, focusable]
	)

	return { feedArticleProps }
}
