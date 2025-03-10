export type CollectionKey = string

export interface CollectionItem<I, T> {
	/** Свойство, определяющее ключ элемента */
  key: CollectionKey
  /** Свойство, определяющее позицию элемента. Присутствует только у элементов типа item. */
  position?: number
	/** Свойство, определяющее тип элемента */
  type?: T
  /** Свойство, определяющее ключ родительского элемента (для вложенных элементов) */
  parentKey?: CollectionKey | undefined
	/** Свойство, определяющее ключ предыдущего элемента */
  prevKey?: CollectionKey | undefined
	/** Свойство, определяющее ключ следующего элемента */
  nextKey?: CollectionKey | undefined
  /** Свойство, определяющее элемент коллекции */
  item?: I
	/** Свойство, определяющее детей элемента */
  children?: CollectionItem<I, T>[]
}

export interface Collection<I, T> extends Iterable<CollectionItem<I, T>> {
	/** Метод, возвращающий первый ключ в коллекции */
  getFirstKey(): CollectionKey | undefined
	/** Метод, возвращающий последний ключ в коллекции */
  getLastKey(): CollectionKey | undefined
	/** Метод, возвращающий элемент коллекции по ключу */
  getItem(key: CollectionKey): CollectionItem<I, T> | undefined
	/** Метод, возвращающий следующий ключ */
  getNextKey(key: CollectionKey): CollectionKey | undefined
	/** Метод, возвращающий предыдущий ключ */
  getPrevKey(key: CollectionKey): CollectionKey | undefined
}
