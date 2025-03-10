import type { UseLinkControl, UseLinkControlOptions } from '../useLinkControl'
import type { UseLinkProps, UseLinkPropsOptions } from '../useLinkProps'

export type UseLinkOptions = UseLinkControlOptions & UseLinkPropsOptions

export type UseLinkUnionLinkProps = UseLinkProps['linkProps'] & UseLinkControl

export interface UseLink {
	/** Свойства, необходимые для доступности link */
	linkProps: UseLinkUnionLinkProps
}
