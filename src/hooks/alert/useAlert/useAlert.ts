import { useMemo } from 'react'
import { type UseAlert, type UseAlertOptions, UseAlertUnionProps } from './types'
import { useAlertProps } from '../useAlertProps'

export const useAlert = <T extends HTMLElement>(options?: UseAlertOptions): UseAlert<T> => {
	const { withSemanticRole, live } = options ?? {}
	const { alertProps } =  useAlertProps({ withSemanticRole, live })

	const unionAlertProps: UseAlertUnionProps<T> = useMemo(
		() =>
			({
				...alertProps
			}),
		[alertProps]
	)

	return { alertProps: unionAlertProps }
}
