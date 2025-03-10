import type { CollectionKey } from '../../../types'

export interface UseSelectionOptions {
	/** Коллекция ключей из списков, деревьев, или грид-сетки */
  keys?: CollectionKey[]
	/** Свойства, определяющее режим выбора: одиночный или множественный */
  multiple?: boolean
	/** Массив предвыбранных ключей. Необязательное поле */
  defaultKeys?: CollectionKey[]
  /** Коллекция неактивных ключей матрицы */
  disabledKeys?: Set<CollectionKey>
  /** Максимальное количество выбранных ключей. Используется при multiple = true */
  limit?: number
}

export interface SelectionControl {
	/** Свойство, обозначающее выбранные ключи */
  selectedKeys: Set<CollectionKey>
  /** Свойство, обозначающее доступен ли множественный выбор */
  multiple?: boolean
	/** Метод-тогл выбора по ключу */
  toggleSelect(key: CollectionKey): void
	/** Метод выбора по ключу */
  select(key: CollectionKey): void
	/** Метод снятия выбора по ключу */
  unselect(key: CollectionKey): void
	/** Метод выбора по интервалу ключе */
  selectRange(startKey: CollectionKey, endKey: CollectionKey): void
	/** Метод очистки всех выбранных значений */
  clearSelect(): void
	/** Метод, возвращающий `true` в случае, если ключ выбран, иначе - `false` */
  isSelected(key: CollectionKey): boolean
}
