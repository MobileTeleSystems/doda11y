import { useMemo } from 'react'
import { type FeedProps, UseFeedProps, UseFeedPropsOptions } from './types'
import { useLabelsProps } from '../../../labels'

export const useFeedProps = <T extends HTMLElement>({ label, labelledBy, isBusy, withSemanticRole = true }: UseFeedPropsOptions): UseFeedProps<T> => {
	const { labelProps } = useLabelsProps({ label, labelledBy })

	const feedProps: FeedProps<T> = useMemo(
		() =>
			({
				role: withSemanticRole ? 'feed' : undefined,
				'aria-busy': isBusy,
				...labelProps,
			}),
		[labelProps, isBusy, withSemanticRole]
	)

	return { feedProps }
}
