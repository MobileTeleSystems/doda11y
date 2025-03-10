import {
	SelectableItemTree,
	TreeItem,
} from '../../../../lib'
import { UseItemTreeOptions } from '../../itemTree'

export interface UseSelectableItemTreeOptions<I extends TreeItem = TreeItem> extends UseItemTreeOptions<I> {
	/** Элементы коллекции */
  items: I[]
  /** Функция, вызывающаяся для разрешения является ли нода выбираемым элементом */
  selectableResolver?: (item: I) => boolean
}

export type UseSelectableItemTree<I extends TreeItem = TreeItem> = SelectableItemTree<I>
