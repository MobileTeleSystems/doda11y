import { UseTablistProps, UseTablistPropsOptions } from '../useTablistProps'
import { UseTablistControl, UseTablistControlOptions } from '../useTablistControl'
import { ListItem } from '../../../../lib'

export type UseTablistOptions<I extends ListItem = ListItem> = UseTablistPropsOptions &  UseTablistControlOptions<I>

export type UseTablistUnionProps<T extends HTMLElement> = UseTablistProps<T>['tablistProps'] & UseTablistControl

export interface UseTablist<T extends HTMLElement> {
	/** Свойства, необходимые для доступности Tablist */
	tablistProps: UseTablistUnionProps<T>
}
