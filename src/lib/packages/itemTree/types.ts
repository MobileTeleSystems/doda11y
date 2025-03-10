import { CollectionKey, Orientation } from '../../../types'
import { TreeNode } from '../tree/treeNode'
import { Tree } from '../tree'

export interface TreeItem {
  children?: any
  [key: string]: any
}

export type TreeItemType = 'child' | 'group' | 'parent'
export interface ItemTreeOptions<I> {
  prefix?: string,
  typeResolver: (item: I) => TreeItemType | null,
  triggerResolver?: (item: I, index: number) => boolean,
  labelResolver?: (item: I) => string,
  triggerForResolver?: (item: I, treeNode: TreeNode<TreeItemPayload<I, 'parent' | 'child' | 'group'> | null>) => TreeItemKey | undefined,
  keyResolver?: (item: I) => string
  expanded?: TreeItemKey[]
}
export type ItemTreeCallback<I, P> = (item: I, tree: Tree<P | null>, options: { parentKey?: TreeItemKey, index: number, prefix?: string, key: string } & P) => void
export type TreeItemKey = CollectionKey
export type TreeItemPayload<I = TreeItem, T = TreeItemType> = {
  /** Свойство, определяющее соответствующий элемент коллекции */
  item: I
  /** Свойство, определяющее текстовое описание элемента */
  label: string
  /** Признак, является ли элемент триггером, открывающем поддерево */
  isTrigger?: boolean
  /** Свойство, определяющее ключ элемента, который данный триггер открывает */
  triggerFor?: string
  /** Свойство, определяющее тип элемента */
  type?: T
  /** Свойство, определяющее ориентацию родительского элемента (по умолчанию - `vertical`) */
  orientation?: Orientation
}
