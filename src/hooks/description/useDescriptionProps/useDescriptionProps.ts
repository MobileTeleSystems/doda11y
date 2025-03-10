import { useMemo } from 'react'
import { throwError } from '../../../lib'
import { type DescriptionProps, type UseDescriptionProps, type UseDescriptionPropsOptions } from './types'

export const useDescriptionProps = <T extends HTMLElement>({ description, describedBy }: UseDescriptionPropsOptions): UseDescriptionProps<T> => {
	if (description && describedBy) throwError('description and describedBy cannot be passed at the same time')
 
	const descriptionProps: DescriptionProps<T> = useMemo(() => ({
		'aria-description': description,
		'aria-describedby': describedBy,
	}), [description, describedBy])

	return { descriptionProps }
}
