import { useMemo } from 'react'
import { UseRadio, UseRadioOptions, UseRadioUnionOptionProps } from './types'
import { useRadioProps } from '../useRadioProps'

export const useRadio = <T extends HTMLElement>({ checked, posInSet, setSize, withSemanticRole, label, labelledBy, description, describedBy, disabled }: UseRadioOptions<T>): UseRadio<T> => {
	const { radioProps } = useRadioProps({ checked, posInSet, setSize, withSemanticRole, label, labelledBy, description, describedBy, disabled })
 
	const unionRadioProps: UseRadioUnionOptionProps<T> = useMemo(
		() => radioProps,
		[radioProps]
	)

	return {
		radioProps: unionRadioProps
	}
}
