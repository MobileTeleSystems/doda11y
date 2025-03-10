import { useMemo } from 'react'
import { type AlertProps, UseAlertProps, UseAlertPropsOptions } from './types'

export const useAlertProps = <T extends HTMLElement>(options?: UseAlertPropsOptions): UseAlertProps<T> => {
	const { withSemanticRole = true, live = 'polite' } = options ?? {}

	const alertProps: AlertProps<T> = useMemo(
		() =>
			({
				role: withSemanticRole ? 'alert' : undefined,
				'aria-live': live
			}),
		[withSemanticRole, live]
	)

	return { alertProps }
}
