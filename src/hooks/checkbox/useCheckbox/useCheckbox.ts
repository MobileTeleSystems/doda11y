import { useMemo } from 'react'
import { UseCheckbox, UseCheckboxOptions, UseCheckboxUnionOptionProps } from './types'
import { useCheckboxProps } from '../useCheckboxProps'
import { useCheckboxControl } from '../useCheckboxControl'

export const useCheckbox = <T extends HTMLElement>({ checked, posInSet, setSize, withSemanticRole, label, labelledBy, onToggle, description, describedBy, disabled }: UseCheckboxOptions): UseCheckbox<T> => {
	const { checkboxProps } = useCheckboxProps({ checked, posInSet, setSize, withSemanticRole, label, labelledBy, description, describedBy, disabled })
	const { onKeyDown } = useCheckboxControl({ onToggle })

	const unionCheckboxProps: UseCheckboxUnionOptionProps<T> = useMemo(
		() => ({ ...checkboxProps, onKeyDown }),
		[checkboxProps]
	)

	return {
		checkboxProps: unionCheckboxProps
	}
}
