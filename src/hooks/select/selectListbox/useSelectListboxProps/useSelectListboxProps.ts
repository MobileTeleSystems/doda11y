import { useMemo } from 'react'
import type {
	SelectListboxProps,
	UseSelectListboxProps,
	UseSelectListboxPropsOptions,
} from './types'

export const useSelectListboxProps = <T extends HTMLElement>({ multiSelectable, withSemanticRole = true, id }: UseSelectListboxPropsOptions): UseSelectListboxProps<T> => {
	const listboxProps: SelectListboxProps<T> = useMemo(
		() =>
			({
				role: withSemanticRole ? 'listbox' : undefined,
				tabIndex: -1,
				'aria-multiselectable': multiSelectable,
				id
			}),
		[multiSelectable, withSemanticRole, id]
	)

	return { listboxProps }
}
