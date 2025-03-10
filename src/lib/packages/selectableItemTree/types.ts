import { ItemTreeCallback, ItemTreeOptions, TreeItem, TreeItemPayload } from '../itemTree'

export interface SelectableItemTreeOptions<I> extends ItemTreeOptions<I> {
  /** Метод, определяющий, является ли элемент выбираемым */
  selectableResolver?: (item: I) => boolean,
}

export type SelectableItemTreeCallback<I, P> = ItemTreeCallback<I, P>

export interface SelectableTreeItemPayload<I = TreeItem> extends TreeItemPayload<I, 'parent' | 'child' | 'group'> {
  /** Признак, поддерживает ли элемент выбор */
  selectable?: boolean
}
