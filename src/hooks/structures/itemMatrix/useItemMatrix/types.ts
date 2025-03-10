import {
	ItemMatrix,
	MatrixItem,
	MatrixItemOptions,
	MatrixItemPayload,
} from '../../../../lib'

export interface UseItemMatrixOptions<I extends MatrixItem = MatrixItem> extends MatrixItemOptions<I> {
  /** Элементы коллекции */
  items: I[]
}

export type UseItemMatrix<I extends MatrixItem = MatrixItem> = ItemMatrix<I, MatrixItemPayload<I>>
