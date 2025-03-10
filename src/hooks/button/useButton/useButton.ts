import { useMemo } from 'react'
import { useButtonControl } from '../useButtonControl'
import { useButtonProps } from '../useButtonProps'
import { type UseButton, type UseButtonOptions, UseButtonUnionButtonProps } from './types'

export const useButton = <T extends HTMLElement>({ isDisabled, label, labelledBy, onPress }: UseButtonOptions<T>): UseButton<T> => {
	const { buttonProps } = useButtonProps({ isDisabled, label, labelledBy })

	const { onKeyDown, onKeyUp } = useButtonControl({ onPress })

	const unionButtonProps: UseButtonUnionButtonProps<T> = useMemo(() => ({
		...buttonProps,
		onKeyUp,
		onKeyDown
	}), [buttonProps, onKeyUp, onKeyDown])

	return { buttonProps: unionButtonProps }
}
