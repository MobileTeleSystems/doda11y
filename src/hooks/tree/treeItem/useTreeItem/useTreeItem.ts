import { useMemo } from 'react'
import { useTreeItemProps } from '../useTreeItemProps'
import {
	UseTreeItem,
	UseTreeItemOptions, UseTreeItemUnionProps,
} from './types'

export const useTreeItem = <T extends HTMLElement>({ withSemanticRole, selected, setSize, level, posInSet, checked, focusable }: UseTreeItemOptions): UseTreeItem<T> => {
	const { treeItemProps } = useTreeItemProps({ withSemanticRole, selected, setSize, focusable, level, posInSet, checked })

	const unionTreeProps: UseTreeItemUnionProps<T> = useMemo(() => ({
		...treeItemProps,
	}), [treeItemProps])

	return { treeItemProps: unionTreeProps }
}
