import { useGroupProps } from '../useGroupProps'
import type { UseGroup, UseGroupOptions } from './types'

export const useGroup = <T extends HTMLElement>(options?: UseGroupOptions): UseGroup<T> => {
	const { label, labelledBy } = options ?? {}

	const { groupProps } = useGroupProps({ label, labelledBy })

	return { groupProps }
}
