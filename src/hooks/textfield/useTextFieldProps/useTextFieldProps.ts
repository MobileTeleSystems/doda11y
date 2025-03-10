import { useMemo } from 'react'
import { TextFieldLabelProps, TextFieldProps, UseTextFieldProps, UseTextPropsOptions } from './types'
import { useDescriptionProps } from '../../description'

export const useTextFieldProps = <T extends HTMLElement>(options?: UseTextPropsOptions): UseTextFieldProps<T> => {
	const { textFieldId, isInvalid = false, errorId, describedBy, description } = options ?? {}

	const { descriptionProps } = useDescriptionProps({ describedBy, description })

	const textFieldProps: TextFieldProps<T> = useMemo(() => ({
		'aria-invalid': isInvalid,
		'aria-errormessage': isInvalid ? errorId : undefined,
		...descriptionProps
	}), [isInvalid, errorId, descriptionProps])

	const textFieldLabelProps: TextFieldLabelProps = useMemo(() => ({
		htmlFor: textFieldId
	}), [textFieldId])

	return { inputProps: textFieldProps, labelProps: textFieldLabelProps }
}
