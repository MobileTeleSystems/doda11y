import { TreeNodeTypeResolverData } from './types'
import { FC, ReactElement } from 'react'
import { TreeItemType } from '../../types'

export const treeNodeTypeResolver = ({ childElement, parentElement, groupElement }: TreeNodeTypeResolverData) => (element: ReactElement): TreeItemType | null => {
	if (Array.isArray(childElement) && element?.type && childElement.includes(element.type as FC)) return 'child'

	if (Array.isArray(parentElement) && element?.type && parentElement.includes(element.type as FC)) return 'parent'

	if (Array.isArray(groupElement) && element?.type && groupElement.includes(element.type as FC)) return 'group'

	return element?.type === parentElement ? 'parent' : element?.type === childElement ? 'child' : element?.type === groupElement ? 'group' : null
}
