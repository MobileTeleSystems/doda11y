import { useMemo } from 'react'
import { useComboboxControl } from '../useComboboxControl'
import { useComboboxProps } from '../useComboboxProps'
import {
	type UseCombobox,
	type UseComboboxOptions,
	type UseComboboxUnionProps
} from './types'
import { ListItem } from '../../../../lib'

export const useCombobox = <I extends ListItem = ListItem, T extends HTMLElement = HTMLElement>({
	list,
	isOpen,
	onOpen,
	onClose, 
	changeActive,
	changeFocus,
	active,
	popupType = 'listbox',
	id,
	popupId,
	autoComplete = 'list',
	withSemanticRole,
	clearSelect,
	listboxRef,
}: UseComboboxOptions<I>): UseCombobox<T> => {
	const { onKeyDown, onInput, onBlur } = useComboboxControl<I>({ list, isOpen, onOpen, onClose, changeActive, changeFocus, clearSelect, autoComplete, listboxRef })
	const { comboboxProps } = useComboboxProps({ id, popupId, isOpen, active, withSemanticRole, popupType, autoComplete })

	const unionComboboxProps: UseComboboxUnionProps<T> = useMemo(
		() =>
			({
				...comboboxProps,
				onKeyDown,
				onInput,
				onBlur
			}),
		[comboboxProps, onKeyDown, onInput, onBlur]
	)

	return { comboboxProps: unionComboboxProps }
}
