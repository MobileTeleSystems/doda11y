import { useMemo } from 'react'
import { useLabelsProps } from '../../labels'
import type { GroupProps, UseGroupProps, UseGroupPropsOptions } from './types'

export const useGroupProps = <T extends HTMLElement>(options?: UseGroupPropsOptions): UseGroupProps<T> => {
	const { label, labelledBy, withSemanticRole = true } = options ?? {}

	const { labelProps } = useLabelsProps({ labelledBy, label })

	const groupProps: GroupProps<T> = useMemo(() => ({
		role: withSemanticRole ? 'group' : undefined,
		...labelProps
	}), [labelProps, withSemanticRole])


	return { groupProps }
}
