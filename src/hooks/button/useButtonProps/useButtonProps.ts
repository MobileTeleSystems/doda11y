import { useMemo } from 'react'
import { useLabelsProps } from '../../labels'
import { type ButtonProps, UseButtonProps, UseButtonPropsOptions } from './types'

export const useButtonProps = <T extends HTMLElement>({ isDisabled, label, labelledBy, withSemanticRole = true }: UseButtonPropsOptions): UseButtonProps<T> => {
	const { labelProps } = useLabelsProps({ label, labelledBy })

	const buttonProps: ButtonProps<T> = useMemo(() => ({
		role: withSemanticRole ? 'button' : undefined,
		tabIndex: 0,
		'aria-disabled': isDisabled ? isDisabled : undefined,
		...labelProps,
	}), [isDisabled, labelProps, withSemanticRole])

	return { buttonProps }
}
