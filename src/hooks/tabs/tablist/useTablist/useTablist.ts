import { useMemo } from 'react'
import { useTablistProps } from '../useTablistProps'
import type {
	UseTablist,
	UseTablistOptions,
	UseTablistUnionProps,
} from './types'
import { useTablistControl } from '../useTablistControl'
import { ListItem } from '../../../../lib'

export const useTablist = <I extends ListItem = ListItem, T extends HTMLElement = HTMLElement>({ label, labelledBy, withSemanticRole, active, changeActive, changeFocus, onActivate, list, orientation, activateOnChange }: UseTablistOptions<I>): UseTablist<T> => {
	const { tablistProps } = useTablistProps({ label, withSemanticRole, labelledBy, active, orientation })
	const { onKeyDown, onFocus } = useTablistControl({ orientation, active, changeActive, changeFocus, list, onActivate, activateOnChange })

	const unionTablistProps: UseTablistUnionProps<T> = useMemo(
		() =>
			({
				...tablistProps,
				onKeyDown,
				onFocus,
			}),
		[tablistProps, onKeyDown, onFocus]
	)

	return { tablistProps: unionTablistProps }
}
