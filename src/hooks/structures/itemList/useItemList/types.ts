import { ListItem, ListItemOptions, ListItemPayload } from '../../../../lib/packages/itemList/types'
import { ItemList } from '../../../../lib'

export interface UseItemListOptions<I extends ListItem = ListItem> extends ListItemOptions<I> {
  /** Элементы коллекции */
  items: I[]
}

export type UseItemList<I extends ListItem = ListItem> = ItemList<I, ListItemPayload<I>>
