import { useMemo } from 'react'
import { ItemMatrix } from '../../../../lib'
import { UseItemMatrixOptions } from './types'

export const useItemMatrix = (options: UseItemMatrixOptions) => {
	const { items, ...matrixOptions } = options
	return useMemo(() => new ItemMatrix(items, matrixOptions), [options])
}
