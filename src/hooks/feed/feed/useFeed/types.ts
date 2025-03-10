import type { UseFeedProps, UseFeedPropsOptions } from '../useFeedProps'
import { UseFeedControl, UseFeedControlOptions } from '../useFeedControl'
import { ListItem } from '../../../../lib'

export type UseFeedOptions<I extends ListItem = ListItem> = UseFeedPropsOptions & UseFeedControlOptions<I>

export type UseFeedUnionFeedProps<T extends HTMLElement> = UseFeedProps<T>['feedProps'] & UseFeedControl

export interface UseFeed<T extends HTMLElement> {
	/** Свойства, необходимые для доступности Feed */
	feedProps: UseFeedUnionFeedProps<T>
}
