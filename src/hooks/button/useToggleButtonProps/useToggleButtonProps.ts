import { useMemo } from 'react'
import { useButtonProps } from '../useButtonProps'
import { type ToggleButtonProps, type UseToggleButtonProps, type UseToggleButtonPropsOptions } from './types'

export const useToggleButtonProps = <T extends HTMLElement>({ isPressed, isDisabled, labelledBy, label, withSemanticRole }: UseToggleButtonPropsOptions): UseToggleButtonProps<T> => {
	const { buttonProps } = useButtonProps({ isDisabled, label, labelledBy, withSemanticRole })

	const toggleButtonProps: ToggleButtonProps<T> = useMemo(() => ({
		...buttonProps,
		'aria-pressed': isPressed,
	}), [buttonProps, isPressed])
 
	return { toggleButtonProps }
}
