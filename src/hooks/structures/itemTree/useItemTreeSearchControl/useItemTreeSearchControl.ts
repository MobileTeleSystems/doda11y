import {
	UseItemTreeSearchControl,
	UseItemTreeSearchControlOptions
} from './types'
import { useIterableSearchControl } from '../../iterable'
import { ItemTree, TreeItem } from '../../../../lib'
import { useFilter } from '../../../intl'

export const useItemTreeSearchControl = <I extends TreeItem = TreeItem>(tree: ItemTree<I>, options?: UseItemTreeSearchControlOptions<I>): UseItemTreeSearchControl => {
	const { startsWith } = useFilter()

	const { onKeyDown } = useIterableSearchControl(tree.getReachableNodes(), (v, searched) => startsWith(v.payload?.label ?? '', searched), options?.onFound)

	return { onKeyDown }
}
