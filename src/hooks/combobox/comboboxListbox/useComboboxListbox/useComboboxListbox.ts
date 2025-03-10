import { useMemo } from 'react'
import {
	UseComboboxListbox,
	UseComboboxListboxOptions,
	UseComboboxListboxUnionProps,
} from './types'
import { ListItem } from '../../../../lib'
import { useComboboxListboxProps } from '../useComboboxListboxProps'
import { useComboboxListboxControl } from '../useComboboxListboxControl'

export const useComboboxListbox = <T extends HTMLElement, I extends ListItem = ListItem>({
	list,
	isOpen,
	onOpen,
	onClose, 
	changeActive,
	changeFocus,
	active,
	id,
	selection,
	onSelect,
	closeOnSelect,
	withSemanticRole,
	comboboxElement,
	loopList,
}: UseComboboxListboxOptions<I>): UseComboboxListbox<T, I> => {
	const { listboxProps } = useComboboxListboxProps({
		id,
		withSemanticRole
	})

	const { onKeyDown, onBlur } = useComboboxListboxControl({
		active,
		isOpen,
		onClose,
		onOpen,
		closeOnSelect,
		changeActive,
		changeFocus,
		list,
		comboboxElement,
		onSelect,
		selection,
		loopList
	})

	const unionListboxProps: UseComboboxListboxUnionProps<T> = useMemo(
		() => ({
			...listboxProps,
			onKeyDown,
			onBlur
		}),
		[listboxProps, onKeyDown, onBlur]
	)

	return { listboxProps: unionListboxProps }
}
