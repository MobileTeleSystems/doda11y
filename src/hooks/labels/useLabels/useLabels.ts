import { useLabelsProps } from '../useLabelsProps'
import { type UseLabels, type UseLabelsOptions } from './types'

export const useLabels = <T extends HTMLElement>({ label, labelledBy }: UseLabelsOptions): UseLabels<T> => {
	const { labelProps } = useLabelsProps({ label, labelledBy })

	return { labelProps }
}
