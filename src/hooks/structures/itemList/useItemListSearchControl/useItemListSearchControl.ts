import {
	UseItemListSearchControl,
	UseItemListSearchControlOptions,
} from './types'
import { useIterableSearchControl } from '../../iterable'
import { ListItem, ItemList } from '../../../../lib'
import { useFilter } from '../../../intl'

export const useItemListSearchControl = <I extends ListItem = ListItem>(list: ItemList<I>, options?: UseItemListSearchControlOptions<I>): UseItemListSearchControl => {
	const { startsWith } = useFilter()

	const { onKeyDown } = useIterableSearchControl(list.getNodes() ?? [], (v, searched) => startsWith(v.payload?.label ?? '', searched), options?.onFound)

	return { onKeyDown }
}
