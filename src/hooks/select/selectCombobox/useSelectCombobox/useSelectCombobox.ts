import { useMemo } from 'react'
import { useSelectComboboxControl } from '../useSelectComboboxControl'
import { useSelectComboboxProps } from '../useSelectComboboxProps'
import { UseSelectCombobox, UseSelectComboboxOptions, UseSelectUnionComboboxProps } from './types'

export const useSelectCombobox = <T extends HTMLElement, G extends Record<string, any>>({ list, active, changeActive, changeFocus, withSemanticRole, isOpen, onOpen, onClose, popupId }: UseSelectComboboxOptions<G>): UseSelectCombobox<T> => {
	const { comboboxProps } = useSelectComboboxProps({ active, isOpen, popupId, withSemanticRole })
	const { onKeyDown } = useSelectComboboxControl({ isOpen, onOpen, onClose, popupId, changeActive, changeFocus, list })

	const unionComboboxProps: UseSelectUnionComboboxProps<T> = useMemo(() => ({
		...comboboxProps,
		onKeyDown,
	}), [comboboxProps, onKeyDown])

	return { comboboxProps: unionComboboxProps }
}
