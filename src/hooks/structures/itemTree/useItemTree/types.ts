import { ItemTree, ItemTreeOptions, TreeItem, TreeItemPayload } from '../../../../lib'
import { ListItem } from '../../../../lib'

export interface UseItemTreeOptions<I extends TreeItem = TreeItem> extends ItemTreeOptions<I> {
	/** Элементы коллекции */
  items: I[]
}

export type UseItemTree<I extends ListItem = ListItem> = ItemTree<I, TreeItemPayload<I, 'parent' | 'child' | 'group'>>
