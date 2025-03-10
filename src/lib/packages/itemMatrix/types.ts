export interface MatrixItem {
  [key: string]: any
}

export type MatrixItemIndex = [number, number]

export interface MatrixItemOptions<I> {
  rowCount: number
  columnCount: number
  disabledKeys?: Set<string>
  moveBetweenRows?: boolean
  labelResolver?: (item: I) => string
}

export type MatrixItemPayload<I = MatrixItem> = {
  /** Свойство, определяющее соответствующий элемент коллекции */
  item: I
  /** Свойство, определяющее текстовое описание элемента */
  label: string
  /** Свойство, определяющее ключ элемента */
  key: string
}
