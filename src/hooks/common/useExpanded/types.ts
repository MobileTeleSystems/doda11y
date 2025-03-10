export interface UseExpanded {
  /** Метод, раскрывающий элемент */
  expand(key: string): void
  /** Метод, сворачивающий элемент */
  hide(key: string): void
  /** Метод, сворачивающий все элементы */
  hideAll(): void
  /** Метод, переключающий состояние элемента */
  toggle(key: string): void
  /** Свойство, обозначающее раскрытые элементы */
  expanded: Set<string>
}
