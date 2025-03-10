import { KeyboardEvent, useCallback } from 'react'
import { SpecialKeys } from '../../../../constants'
import { ItemMatrix, MatrixItem, MatrixItemPayload } from '../../../../lib'
import { UseItemMatrixControl, UseItemMatrixControlOptions } from './types'

export const useItemMatrixControl = <I extends MatrixItem = MatrixItem, P extends MatrixItemPayload<I> = MatrixItemPayload<I>>(matrix: ItemMatrix<I, P>, { changeActive, active, changeFocus }: UseItemMatrixControlOptions): UseItemMatrixControl => {
	const onKeyDown = useCallback((e: KeyboardEvent<HTMLTableSectionElement>) => {
		switch (e.key) {
		case SpecialKeys.HOME:
		case SpecialKeys.END: {
			const node = e.key === SpecialKeys.HOME
				? matrix.getFirstNode()
				: matrix.getLastNode()

			if (!node) return

			e.preventDefault()
			changeActive?.(node.key)
			changeFocus?.(node.key)

			break
		}
		case SpecialKeys.ARROW_DOWN:
		case SpecialKeys.ARROW_LEFT:
		case SpecialKeys.ARROW_UP:
		case SpecialKeys.ARROW_RIGHT: {
			if (!active) return

			const { key } = e

			const node = key === SpecialKeys.ARROW_LEFT
				? matrix?.getLeftNode(active)
				: key === SpecialKeys.ARROW_DOWN
					? matrix?.getBelowNode(active)
					: key === SpecialKeys.ARROW_RIGHT
						? matrix?.getRightNode(active)
						: matrix?.getAboveNode(active)

			if (!node) return

			e.preventDefault()
			changeActive?.(node.key)
			changeFocus?.(node.key)

			break
		}
		}
	}, [matrix, changeFocus, changeActive, active])

	return { onKeyDown }
}
