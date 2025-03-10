import { useMemo } from 'react'
import {
	SwitchProps,
	UseSwitchProps,
	UseSwitchPropsOptions
} from './types'
import { useLabelsProps } from '../../labels'
import { useDescriptionProps } from '../../description'

export const useSwitchProps = <T extends HTMLElement>({ checked, disabled, withSemanticRole = true, label, labelledBy, description, describedBy }: UseSwitchPropsOptions): UseSwitchProps<T> => {
	const { labelProps } = useLabelsProps({ labelledBy, label })
	const { descriptionProps } = useDescriptionProps({ description, describedBy })

	const switchProps: SwitchProps<T> = useMemo(() => ({
		...labelProps,
		...descriptionProps,
		tabIndex: 0,
		role: withSemanticRole ? 'switch' : undefined,
		'aria-disabled': disabled,
		'aria-checked': checked,
	}), [disabled, checked, withSemanticRole, labelProps, descriptionProps])

	return { switchProps }
}
