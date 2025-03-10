import { useMemo } from 'react'
import { useSelectListboxProps } from '../useSelectListboxProps'
import {
	UseSelectListbox,
	UseSelectListboxOptions,
	UseSelectUnionListboxProps
} from './types'
import { useSelectListboxControl } from '../useSelectListboxControl'

export const useSelectListbox = <T extends HTMLElement, G extends Record<string, any>>({ withSemanticRole, multiSelectable, selection, onSelect, closeOnSelect, onClose, active, changeActive, changeFocus, isOpen, onOpen, list, comboboxElement, loopList, id }: UseSelectListboxOptions<G>): UseSelectListbox<T> => {
	const { listboxProps } = useSelectListboxProps({ multiSelectable, withSemanticRole, id })
	const { onBlur, onKeyDown } = useSelectListboxControl({
		selection,
		onSelect,
		closeOnSelect,
		onClose,
		active,
		changeActive,
		changeFocus,
		isOpen,
		onOpen,
		list,
		comboboxElement,
		loopList
	})

	const unionListboxProps: UseSelectUnionListboxProps<T> = useMemo(() => ({
		...listboxProps,
		onBlur,
		onKeyDown,
	}), [listboxProps, onBlur, onKeyDown])

	return { listboxProps: unionListboxProps }
}
