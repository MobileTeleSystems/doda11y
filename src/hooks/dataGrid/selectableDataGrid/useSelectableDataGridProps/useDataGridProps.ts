import { useMemo } from 'react'
import {
	DataGridProps,
	UseSelectableDataGridProps,
	UseSelectableDataGridPropsOptions
} from './types'
import { useLabelsProps } from '../../../labels'

export const useDataGridProps = <T extends HTMLElement>({ label, labelledBy, withSemanticRole = true }: UseSelectableDataGridPropsOptions): UseSelectableDataGridProps<T> => {
	const { labelProps } = useLabelsProps({ label, labelledBy })

	const gridProps: DataGridProps<T> = useMemo(
		() =>
			({
				role: withSemanticRole ? 'grid' : undefined,
				...labelProps,
			}),
		[labelProps, withSemanticRole]
	)

	return { gridProps }
}
