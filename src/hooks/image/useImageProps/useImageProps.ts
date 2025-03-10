import { useMemo } from 'react'
import { throwError } from '../../../lib'
import { useLabelsProps } from '../../labels'
import { type ImageProps, UseImageProps, UseImagePropsOptions } from './types'

export const useImageProps = <T extends HTMLElement>({ label, labelledBy, withSemanticRole = true }: UseImagePropsOptions): UseImageProps<T> => {
	const { labelProps } = useLabelsProps({ labelledBy, label })

	if (!label && !labelledBy) throwError('label or labelledBy must be provided to the hook')

	const imageProps: ImageProps<T> = useMemo(() => ({
		role: withSemanticRole ? 'img' : undefined,
		...labelProps,
	}), [labelProps, withSemanticRole])

	return { imageProps }
}
