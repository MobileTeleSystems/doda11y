import { type FormEvent, useCallback } from 'react'
import { UseAutocomplete, UseAutocompleteOptions } from './types'

export const useAutocompleteHandler = <T extends HTMLInputElement | HTMLTextAreaElement>({ findCallback }: UseAutocompleteOptions): UseAutocomplete<T> => {
	const onInput = useCallback((e: FormEvent<T>) => {
		const nE = e.nativeEvent as InputEvent
		const { value = '' } = e.currentTarget

		if (nE.inputType === 'insertText') {
			const foundValue = findCallback(value)
			const end = foundValue ? foundValue.slice(value.length, foundValue.length) : ''

			e.currentTarget.value = value + end
			e.currentTarget.selectionStart = value.length
		}
	}, [findCallback])

	return { onInput }
}
