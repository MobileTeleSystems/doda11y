import { LinkedList } from '../linkedList'

export interface ListItem {
  children?: any
  [key: string]: any
}

export type ListItemKey = string
export type ListItemType = 'item' | 'group'
export interface ListItemOptions<I> {
  prefix?: string,
  typeResolver: (item: I) => ListItemType | null,
  labelResolver?: (item: I) => string,
  keyResolver?: (item: I) => string
}
export type ListItemCallback<I, P> = (item: I, list: LinkedList<P>, options: { index: number, prefix?: string, key: string } & P) => void
export type ListItemPayload<I = ListItem, T = ListItemType> = {
  /** Свойство, определяющее соответствующий элемент коллекции */
  item: I
  /** Свойство, определяющее текстовое описание элемента */
  label: string
  /** Свойство, определяющее позицию элемента в коллекции */
  position: number
  /** Свойство, определяющее ключ родительского элемента (если элемент вложен в group) */
  parentKey: string
  /** Свойство, определяющее тип элемента */
  type?: T
}
