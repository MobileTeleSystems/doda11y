import { useDescriptionProps } from '../useDescriptionProps'
import { type UseDescription, type UseDescriptionOptions } from './types'

export const useDescription = <T extends HTMLElement>({ description, describedBy }: UseDescriptionOptions): UseDescription<T> => {
	const { descriptionProps } = useDescriptionProps({ description, describedBy })

	return { descriptionProps }
}
