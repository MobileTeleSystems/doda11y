import { usePopupTriggerControl } from '../../../popup'
import { type UseComboboxControl, type UseComboboxControlOptions } from './types'
import { ListItem } from '../../../../lib'
import { FocusEvent, type FormEvent, type KeyboardEvent, useCallback } from 'react'
import { useFilter } from '../../../intl'
import { useAutocompleteHandler } from '../../../common'

export const useComboboxControl = <I extends ListItem = ListItem>({
	list,
	autoComplete,
	isOpen,
	onOpen,
	onClose,
	clearSelect,
	changeActive,
	changeFocus,
	listboxRef,
}: UseComboboxControlOptions<I>): UseComboboxControl => {
	const { equal, startsWith } = useFilter(undefined, { sensitivity: 'base', ignorePunctuation: true })

	const { onKeyDown: onKeyDownPopup } = usePopupTriggerControl({
		isOpen,
		onOpen,
		onClose,
		isFocusFirstOnEnterOrSpace: false,
		isOpenOnEnterOrSpace: false,
		preventDefault: false,
		onFocusFirst(){
			const key = list.getFirstNode()?.key
			if (!key) return

			changeActive(key)

			requestAnimationFrame(() => {
				changeFocus(key)
			})
		},
		onFocusLast() {
			const key = list.getLastNode()?.key
			if (!key) return

			changeActive(key)

			requestAnimationFrame(() => {
				changeFocus(key)
			})
		},
	})

	const { onInput: onInputAutocomplete } = useAutocompleteHandler({
		findCallback: (value) => list.getNodes()?.find((item) => startsWith(item.payload.label, value))?.payload.label || ''
	})

	const onInput = useCallback((e: FormEvent<HTMLInputElement>) => {
		const { value = '' } = e.currentTarget

		changeActive(undefined)

		if (!isOpen && value.length > 0) onOpen()
		if (isOpen && value.length === 0) onClose()

		if (autoComplete && ['both', 'inline'].includes(autoComplete)) onInputAutocomplete?.(e)

		clearSelect()
	}, [changeActive, isOpen, onOpen, equal, clearSelect, onInputAutocomplete, autoComplete])

	const onKeyDown = useCallback((e: KeyboardEvent) => {
		onKeyDownPopup(e)
	}, [onKeyDownPopup])

	const onBlur = useCallback((e: FocusEvent<HTMLElement>) => {
		if (isOpen && !listboxRef.current?.contains(e.relatedTarget)) onClose()
	}, [isOpen])

	return { onKeyDown, onInput, onBlur }
}
