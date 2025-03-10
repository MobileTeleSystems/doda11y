import { useMemo } from 'react'
import { useLinkControl } from '../useLinkControl'
import { useLinkProps } from '../useLinkProps'
import { type UseLink, type UseLinkOptions, UseLinkUnionLinkProps } from './types'

export const useLink = ({ onOpenContextMenu, onRedirect, withSemanticRole }: UseLinkOptions): UseLink => {
	const { linkProps } = useLinkProps({ withSemanticRole })
	const { onKeyDown } = useLinkControl({ onOpenContextMenu, onRedirect })

	const unionLinkProps: UseLinkUnionLinkProps = useMemo(
		() =>
			({
				...linkProps,
				onKeyDown,
			}),
		[linkProps]
	)

	return { linkProps: unionLinkProps }
}
