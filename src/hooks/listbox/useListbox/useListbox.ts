import { useMemo } from 'react'
import { useListboxControl } from '../useListboxControl'
import { useListboxProps } from '../useListboxProps'
import { type UseListbox, type UseListboxOptions, UseListboxUnionListboxProps } from './types'
import { ListItem } from '../../../lib'

export const useListbox = <I extends ListItem = ListItem>({
	orientation = 'vertical',
	list,
	id, 
	selection,
	active,
	changeActive,
	changeFocus,
}: UseListboxOptions<I>): UseListbox => {
	const { listboxProps } = useListboxProps({ multiSelectable: selection.multiple, id, orientation, active })
	const { onKeyDown, onFocus } = useListboxControl({ orientation, active, changeActive, changeFocus, list, selection })

	const unionListboxProps: UseListboxUnionListboxProps = useMemo(() => ({
		...listboxProps,
		onKeyDown,
		onFocus,
	}), [listboxProps, onKeyDown])

	return { listboxProps: unionListboxProps }
}
