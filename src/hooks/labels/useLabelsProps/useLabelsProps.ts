import { useMemo } from 'react'
import { throwError } from '../../../lib'
import { type LabelsProps, type UseLabelsProps, type UseLabelsPropsOptions } from './types'

export const useLabelsProps = <T extends HTMLElement>({ label, labelledBy }: UseLabelsPropsOptions): UseLabelsProps<T> => {
	if (label && labelledBy) throwError('label and labelledBy cannot be passed at the same time')
 
	const labelProps: LabelsProps<T> = useMemo(() => ({
		'aria-label': label,
		'aria-labelledby': labelledBy,
	}), [label, labelledBy])

	return { labelProps }
}
