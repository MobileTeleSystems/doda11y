import { useMemo } from 'react'
import { UseItemTree, UseItemTreeOptions } from './types'
import { ListItem, ItemTree } from '../../../../lib'

export const useItemTree = <I extends ListItem = ListItem>({ items, typeResolver, prefix, expanded, triggerResolver, labelResolver, triggerForResolver, keyResolver }: UseItemTreeOptions<I>): UseItemTree<I> => {
	return useMemo(
		() =>
			new ItemTree<I>(items, { typeResolver, expanded, prefix, triggerResolver, triggerForResolver, labelResolver, keyResolver }),
		[prefix, items, expanded, typeResolver, triggerResolver, triggerForResolver, labelResolver, keyResolver]
	)
}
