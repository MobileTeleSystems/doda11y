import { useMemo } from 'react'
import {
	CheckboxProps,
	UseCheckboxProps,
	UseCheckboxPropsOptions
} from './types'
import { useLabelsProps } from '../../labels'
import { useDescriptionProps } from '../../description'

export const useCheckboxProps = <T extends HTMLElement>({ checked, posInSet, setSize, disabled, withSemanticRole = true, label, labelledBy, description, describedBy }: UseCheckboxPropsOptions): UseCheckboxProps<T> => {
	const { labelProps } = useLabelsProps({ labelledBy, label })
	const { descriptionProps } = useDescriptionProps({ description, describedBy })

	const checkboxProps: CheckboxProps<T> = useMemo(() => ({
		...labelProps,
		...descriptionProps,
		tabIndex: 0,
		role: withSemanticRole ? 'checkbox' : undefined,
		'aria-disabled': disabled,
		'aria-checked': checked,
		'aria-posinset': posInSet,
		'aria-setsize': setSize
	}), [disabled, checked, posInSet, withSemanticRole, setSize, labelProps, descriptionProps])

	return { checkboxProps }
}
