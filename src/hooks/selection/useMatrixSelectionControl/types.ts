import { CollectionKey } from '../../../types'
import { KeyboardEventHandler } from 'react'

export interface UseMatrixSelectionControlOptions {
  /** Признак, определяющий, доступен ли множественный выбор для списка. По умолчанию - `false` */
  multiple?: boolean
  /** Признак, определяющий, доступно ли всех элементов только в рамках выделения range. По умолчанию - `true` */
  allowOnlyRange?: boolean
  /** Признак, определяющий, доступно ли выделение всех элементов списка с помощью сочетания `ctrl+a`. По умолчанию - `true`. Может быть использован только тогда, когда multiSelectable - `true` */
  allowSelectAll?: boolean
  /** Свойство, обозначающее активный (сфокусированный) элемент в списке */
  active: string | undefined
  /** Коллекция выделенных ключей матрицы */
  selectedKeys?: Set<CollectionKey>
  /** Метод, выделяющий элемент матрицы по ключу */
  select?(key: CollectionKey): void
  /** Метод, выделяющий интервал элементов от одного до другого ключа */
  selectRange?(startKey: CollectionKey, endKey: CollectionKey): void
  /** Метод, позволяющий получить следующий элемент матрицы */
  getRightKey(key: CollectionKey): string | undefined
  /** Метод, позволяющий получить предыдущий элемент матрицы */
  getLeftKey(key: CollectionKey): string | undefined
  /** Метод, позволяющий получить элемент выше матрицы */
  getUpKey(key: CollectionKey): string | undefined
  /** Метод, позволяющий получить элемент выше матрицы */
  getDownKey(key: CollectionKey): string | undefined
  /** Метод, позволяющий получить первый элемент матрицы */
  getFirstKey(): string | undefined
  /** Метод, позволяющий получить последний элемент матрицы */
  getLastKey(): string | undefined
}

export interface UseMatrixSelectionControl {
  /** Обработчик на нажатие клавиш */
  onKeyDown: KeyboardEventHandler
}
