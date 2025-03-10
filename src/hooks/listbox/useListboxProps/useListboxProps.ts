import { useMemo } from 'react'
import { type ListboxProps, UseListboxProps, UseListboxPropsOptions } from './types'

export const useListboxProps = ({
	multiSelectable,
	orientation = 'vertical',
	id,
	withSemanticRole = true,
	active,
}: UseListboxPropsOptions): UseListboxProps => {
	const listboxProps: ListboxProps = useMemo(
		() =>
			({
				role: withSemanticRole ? 'listbox' : undefined,
				'aria-multiselectable': multiSelectable,
				'aria-orientation': orientation,
				tabIndex: active ? -1 : 0,
				id,
			}),
		[id, multiSelectable, orientation, withSemanticRole, active]
	)

	return { listboxProps }
}
