import { useTextFieldProps } from '../useTextFieldProps'
import { UseTextField, UseTextFieldOptions } from './types'
import { useMemo } from 'react'

export const useTextField = <T extends HTMLElement>(options?: UseTextFieldOptions): UseTextField<T> => {
	const { description, textFieldId, describedBy, errorId, isInvalid } = options ?? {}

	const { inputProps, labelProps } = useTextFieldProps({ description, textFieldId, describedBy, errorId, isInvalid })

	const unionInputProps = useMemo(() => inputProps, [inputProps])

	const unionLabelProps = useMemo(() => labelProps, [labelProps])

	return { inputProps: unionInputProps, labelProps: unionLabelProps }
}
