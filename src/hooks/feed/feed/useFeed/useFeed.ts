import { useMemo } from 'react'
import { useFeedProps } from '../useFeedProps'
import { type UseFeed, type UseFeedOptions, UseFeedUnionFeedProps } from './types'
import { useFeedControl } from '../useFeedControl'
import { ListItem } from '../../../../lib'

export const useFeed = <I extends ListItem = ListItem, T extends HTMLElement = HTMLElement>({ labelledBy, label, active, list, isBusy, changeFocus, changeActive, withSemanticRole }: UseFeedOptions<I>): UseFeed<T> => {
	const { feedProps } =  useFeedProps({ labelledBy, label, withSemanticRole, isBusy })
	const { onKeyDown } = useFeedControl<I>({ changeFocus, changeActive, active, list })

	const unionFeedProps: UseFeedUnionFeedProps<T> = useMemo(
		() =>
			({
				...feedProps,
				onKeyDown
			}),
		[feedProps, onKeyDown]
	)

	return { feedProps: unionFeedProps }
}
