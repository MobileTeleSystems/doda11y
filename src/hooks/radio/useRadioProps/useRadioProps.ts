import { useMemo } from 'react'
import {
	RadioProps,
	UseRadioProps,
	UseRadioPropsOptions
} from './types'
import { useLabelsProps } from '../../labels'
import { useDescriptionProps } from '../../description'

export const useRadioProps = <T extends HTMLElement>({ checked, posInSet, setSize, disabled, popupType, withSemanticRole = true, label, labelledBy, description, describedBy }: UseRadioPropsOptions<T>): UseRadioProps<T> => {
	const { labelProps } = useLabelsProps({ labelledBy, label })
	const { descriptionProps } = useDescriptionProps({ description, describedBy })

	const radioProps: RadioProps<T> = useMemo(() => ({
		...labelProps,
		...descriptionProps,
		tabIndex: 0,
		role: withSemanticRole ? 'radio' : undefined,
		'aria-disabled': disabled,
		'aria-checked': checked,
		'aria-haspopup': popupType,
		'aria-posinset': posInSet,
		'aria-setsize': setSize
	}), [disabled, checked, popupType, posInSet, withSemanticRole, setSize, labelProps, descriptionProps])

	return { radioProps }
}
