import { useMemo } from 'react'
import { UseSelectableItemTree, UseSelectableItemTreeOptions } from './types'
import { SelectableItemTree, TreeItem } from '../../../../lib'

export const useSelectableItemTree = <I extends TreeItem>({ items, typeResolver, prefix, expanded, triggerResolver, labelResolver, triggerForResolver, selectableResolver }: UseSelectableItemTreeOptions<I>): UseSelectableItemTree<I> => {
	const resolver = useMemo(() => typeResolver, [])
	const resolverTrigger = useMemo(() => triggerResolver, [])
	const resolverLabel = useMemo(() => labelResolver, [])
	const resolverTriggerFor = useMemo(() => triggerForResolver, [])
	const resolverSelectable = useMemo(() => selectableResolver, [])

	return useMemo(
		() =>
			new SelectableItemTree<I>(items, { typeResolver: resolver, expanded, prefix, triggerResolver: resolverTrigger, triggerForResolver: resolverTriggerFor, labelResolver: resolverLabel, selectableResolver: resolverSelectable }),
		[prefix, resolver, items, resolverTrigger, resolverTriggerFor, resolverSelectable, expanded]
	)
}
