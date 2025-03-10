import { useMemo } from 'react'
import {
	type ComboboxListboxProps,
	type UseComboboxListboxProps,
	type UseComboboxListboxPropsOptions,
} from './types'

export const useComboboxListboxProps = <T extends HTMLElement>({
	id,
	withSemanticRole = true,
}: UseComboboxListboxPropsOptions): UseComboboxListboxProps<T> => {
	const listboxProps: ComboboxListboxProps<T> = useMemo(
		() =>
			({
				role: withSemanticRole ? 'listbox' : undefined,
				tabIndex: -1,
				id
			}),
		[withSemanticRole, id]
	)

	return { listboxProps }
}
