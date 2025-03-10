import { useMemo } from 'react'
import { useTreeControl } from '../useTreeControl'
import { useTreeProps } from '../useTreeProps'
import {
	UseTree,
	UseTreeOptions,
	UseTreeUnionProps
} from './types'
import { TreeItem } from '../../../../lib'

export const useTree = <T extends HTMLElement, I extends TreeItem>({ tree, selection, active, changeActive, labelledBy, label, orientation, withSemanticRole, expanded, onExpand, onHide, onToggleExpanded, onHideAll, changeFocus, multiSelectable }: UseTreeOptions<I>): UseTree<T> => {
	const { treeProps } = useTreeProps({ label, labelledBy, orientation, withSemanticRole, multiSelectable, active })
	const { onKeyDown, onFocus, onBlur } = useTreeControl({ active, changeActive, selection, tree, expanded, onToggleExpanded, onHide, onHideAll, onExpand, changeFocus })

	const unionTreeProps: UseTreeUnionProps<T> = useMemo(() => ({
		...treeProps,
		onKeyDown,
		onFocus,
		onBlur
	}), [treeProps, onKeyDown, onFocus, onBlur])

	return { treeProps: unionTreeProps }
}
