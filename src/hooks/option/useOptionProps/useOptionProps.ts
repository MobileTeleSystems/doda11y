import { useMemo } from 'react'
import { throwError } from '../../../lib'
import type { OptionProps, UseOptionProps, UseOptionPropsOptions } from './types'

export const useOptionProps = <T extends HTMLElement>({ selected, checked, posInSet, setSize, withSemanticRole = true, focusable }: UseOptionPropsOptions): UseOptionProps<T> => {
	if (checked && selected) throwError('isChecked and isSelected cannot be passed at the same time')

	if (checked === undefined && selected === undefined) throwError('isChecked or isSelected must be passed')

	const optionProps: OptionProps<T> = useMemo(
		() =>
			({
				role: withSemanticRole ? 'option' : undefined,
				tabIndex: focusable ? 0 : -1,
				'aria-selected': selected,
				'aria-checked': checked,
				'aria-posinset': posInSet,
				'aria-setsize': setSize,
			}),
		[checked, selected, posInSet, setSize, withSemanticRole, focusable]
	)

	return {
		optionProps,
	}
}
