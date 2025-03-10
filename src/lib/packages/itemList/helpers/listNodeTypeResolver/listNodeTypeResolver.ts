import { ListNodeTypeResolverData } from './types'
import { FC, ReactElement } from 'react'
import { ListItemType } from '../../types'

export const listNodeTypeResolver = ({ itemElement, groupElement }: ListNodeTypeResolverData) => (element: ReactElement): ListItemType | null => {
	if (Array.isArray(groupElement) && element?.type && groupElement.includes(element.type as FC)) return 'group'
	if (Array.isArray(itemElement) && element?.type && itemElement.includes(element.type as FC)) return 'item'

	return element?.type === itemElement ? 'item' : element?.type === groupElement ? 'group' : null
}
