import { useMemo } from 'react'
import { type LinkProps, UseLinkProps, UseLinkPropsOptions } from './types'

export const useLinkProps = (options?: UseLinkPropsOptions): UseLinkProps => {
	const { withSemanticRole = true } = options ?? {}

	const linkProps: LinkProps = useMemo(
		() =>
			({
				role: withSemanticRole ? 'link' : undefined,
			}),
		[withSemanticRole]
	)

	return { linkProps }
}
