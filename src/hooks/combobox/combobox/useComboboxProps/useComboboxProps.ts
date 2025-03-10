import { useMemo } from 'react'
import { usePopupTriggerProps } from '../../../popup'
import { ComboboxProps, UseComboboxProps, UseComboboxPropsOptions } from './types'

export const useComboboxProps = <T extends HTMLElement>({
	isOpen,
	active,
	popupType = 'listbox',
	id,
	popupId,
	autoComplete = 'list',
	withSemanticRole = true,
}: UseComboboxPropsOptions): UseComboboxProps<T> => {
	const { triggerProps } = usePopupTriggerProps({ type: popupType, isOpen, popupId })

	const comboboxProps: ComboboxProps<T> = useMemo(
		() =>
			({
				...triggerProps,
				tabIndex: 0,
				role: withSemanticRole ? 'combobox' : undefined,
				'aria-autocomplete': autoComplete,
				id,
			}),
		[triggerProps, isOpen, active, autoComplete, id, withSemanticRole]
	)

	return { comboboxProps }
}
