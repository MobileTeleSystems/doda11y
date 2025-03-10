import { useMemo } from 'react'
import { useOptionProps } from '../useOptionProps'
import type { UseOption, UseOptionOptions, UseOptionUnionOptionProps } from './types'

export const useOption = <T extends HTMLElement>({ selected, checked, posInSet, setSize, withSemanticRole, focusable }: UseOptionOptions): UseOption<T> => {
	const { optionProps } = useOptionProps({ checked, selected, posInSet, setSize, withSemanticRole, focusable })
 
	const unionOptionProps: UseOptionUnionOptionProps<T> = useMemo(
		() => optionProps,
		[optionProps]
	)

	return {
		optionProps: unionOptionProps
	}
}
