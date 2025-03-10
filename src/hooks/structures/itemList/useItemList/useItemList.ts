import { useMemo } from 'react'
import { UseItemList, UseItemListOptions } from './types'
import { ListItem } from '../../../../lib'
import { ItemList } from '../../../../lib'

export const useItemList = <I extends ListItem = ListItem>({ items, typeResolver, prefix, labelResolver, keyResolver }: UseItemListOptions<I>): UseItemList<I> => {
	return useMemo(
		() =>
			new ItemList(items, { typeResolver, prefix, labelResolver, keyResolver }),
		[prefix, items]
	)
}
