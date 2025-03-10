import { useMemo } from 'react'
import { useToggleButtonControl } from '../useToggleButtonControl'
import { useToggleButtonProps } from '../useToggleButtonProps'
import { type UseToggleButton, type UseToggleButtonOptions, UseToggleButtonUnionButtonProps } from './types'

export const useToggleButton = <T extends HTMLElement>({ isPressed, isDisabled, onPress, labelledBy, label, withSemanticRole }: UseToggleButtonOptions<T>): UseToggleButton<T> => {
	const { toggleButtonProps } = useToggleButtonProps({ isPressed, isDisabled, labelledBy, label, withSemanticRole })
	const { onKeyDown, onKeyUp } = useToggleButtonControl({ onPress })

	const unionToggleButtonProps: UseToggleButtonUnionButtonProps<T> = useMemo(() => ({
		...toggleButtonProps,
		onKeyDown,
		onKeyUp
	}), [toggleButtonProps, onKeyDown, onKeyUp])
 
	return { toggleButtonProps: unionToggleButtonProps }
}
