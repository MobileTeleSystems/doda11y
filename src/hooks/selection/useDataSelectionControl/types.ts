import { CollectionKey, Orientation } from '../../../types'
import { KeyboardEventHandler } from 'react'

export interface UseDataSelectionControlOptions {
  /** Признак, определяющий, доступен ли множественный выбор для списка. По умолчанию - `false` */
  multiSelectable?: boolean
  /** Признак, определяющий, доступно ли выделение всех элементов списка с помощью сочетания `ctrl+a`. По умолчанию - `true`. Может быть использован только тогда, когда multiSelectable - `true` */
  allowSelectAll?: boolean
  /** Признак, определяющий, доступно ли снятие всех выделенных значений на `escape` */
  allowClearSelection?: boolean
  /** Ориентация списка. По умолчанию - `vertical`  */
  orientation?: Orientation
  /** Свойство, обозначающее активный (сфокусированный) элемент в списке */
  active: string | undefined
  /** Коллекция выделенных ключей коллекции */
  selectedKeys?: Set<CollectionKey>
  /** Метод, очищающий все выделенные значения */
  clearSelect?(): void
  /** Метод, выделяющий элемент коллекции по ключу */
  select?(key: CollectionKey): void
  /** Метод, выделяющий интервал элементов от одного до другого ключа */
  selectRange?(startKey: CollectionKey, endKey: CollectionKey): void
  /** Метод, позволяющий получить следующий элементы из коллекции */
  getNextKey(key: CollectionKey): string | undefined
  /** Метод, позволяющий получить предыдущий элементы из коллекции */
  getPrevKey(key: CollectionKey): string | undefined
  /** Метод, позволяющий получить первый элементы из коллекции */
  getFirstKey(): string | undefined
  /** Метод, позволяющий получить последний элементы из коллекции */
  getLastKey(): string | undefined
}

export interface UseDataSelectionControl {
  /** Обработчик на нажатие клавиш */
  onKeyDown: KeyboardEventHandler
}
