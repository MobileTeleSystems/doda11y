import { useMemo } from 'react'
import {
	SelectComboboxProps,
	UseSelectComboboxProps,
	UseSelectComboboxPropsOptions,
} from './types'
import { usePopupTriggerProps } from '../../../popup'

export const useSelectComboboxProps = <T extends HTMLElement>({ active, isOpen, popupId, withSemanticRole = true }: UseSelectComboboxPropsOptions): UseSelectComboboxProps<T> => {
	const { triggerProps } = usePopupTriggerProps({ type: 'listbox', popupId: popupId, isOpen })

	const comboboxProps: SelectComboboxProps<T> = useMemo(() => ({
		...triggerProps,
		role: withSemanticRole ? 'combobox' : undefined,
		tabIndex: !active || !isOpen ? 0 : -1,
	}), [triggerProps, active, withSemanticRole, isOpen])

	return { comboboxProps }
}
