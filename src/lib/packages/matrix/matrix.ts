import { MatrixNode } from './matrixNode'

export class Matrix<P extends { key: string }> {
	/** Матрица */
	matrix: Array<Array<MatrixNode<P>>> = [[]]
	/** Сопоставление ключа индексу */
	keysToIndexes: Map<string, [number, number]> = new Map()

	constructor(items: P[], rowCount: number, columnCount: number) {
		if (items.length > rowCount * columnCount) console.warn('Элементов больше, чем размерности матрицы')

		let index = 0

		this.matrix = Array.from({ length: rowCount }, (_, rowIndex) => (
			Array.from({ length: columnCount }, (_, columnIndex) => {
				const item = items[index]
				const node = new MatrixNode(item.key, item, [rowIndex, columnIndex])

				this.keysToIndexes.set(node.key, node.getIndex())

				index += 1

				return node
			})
		))

		for (let rowIndex = 0; rowIndex < this.matrix.length; rowIndex++) {
			const row = this.matrix[rowIndex]

			for (let columnIndex = 0; columnIndex < row.length; columnIndex++) {
				const node = row[columnIndex]

				if (!node) continue

				if (columnIndex !== 0) node.before = this.matrix[rowIndex][columnIndex - 1]
				if (columnIndex !== columnCount - 1) node.after = this.matrix[rowIndex][columnIndex + 1]
				if (rowIndex !== 0) node.above = this.matrix[rowIndex - 1][columnIndex]
				if (rowIndex !== rowCount - 1) node.below = this.matrix[rowIndex + 1][columnIndex]

				// not first node
				if (columnIndex !== 0 || rowIndex !== 0) {
					node.prev = node.before ?? this.matrix?.[rowIndex - 1]?.[columnCount - 1]
				}

				// not last node
				if (columnIndex !== rowCount - 1 || rowIndex !== columnCount - 1) {
					node.next = node.after ?? this.matrix?.[rowIndex + 1]?.[0]
				}
			}
		}
	}

	/**
   * Метод, добавляющий ноду в матрицу
   * @param node - нода
   * @param index - индекс, куда вставляется нода. Первый элемент массива - индекс строки, второй - колонки
   * @private
   */
	private insertNode(node: MatrixNode<P>, index: [number, number]) {
		const [rowIndex, columnIndex] = index
		this.matrix[rowIndex][columnIndex] = node
	}

	/**
   * Метод, возвращающий элемент матрицы по индексу
   * @param index - индекс. Первый элемент массива - индекс строки, второй - колонки
   */
	findNodeByIndex(index: [number, number]): MatrixNode<P> {
		const [rowIndex, columnIndex] = index

		return this.matrix[rowIndex][columnIndex]
	}

	/**
   * Метод, возвращающий элемент матрицы по ключу
   * @param key - ключ элемента
   */
	findNode(key: string): MatrixNode<P> | null {
		const index = this.keysToIndexes.get(key)
		if (!index) return null

		const [rowIndex, columnIndex] = index

		return this.matrix[rowIndex][columnIndex]
	}

	/**
   * Метод, создающий и добавляющий элемент в матрицу
   * @param key - ключ элемента
   * @param index - индекс ноды. Первый элемент массива - индекс строки, второй - колонки
   * @param payload - полезная нагрузка элемента
   */
	addNode(key: string, index: [number, number], payload: P): MatrixNode<P> {
		const newNode = new MatrixNode(key, payload, index)
		this.insertNode(newNode, index)

		return newNode
	}

	/**
   * Метод, возвращающий соседние ноды элемента
   * @param key - ключ элемента
   */
	getNeighborNodes(key: string): {
    before: MatrixNode<P> | null,
    after: MatrixNode<P> | null,
    below: MatrixNode<P> | null,
    above: MatrixNode<P> | null
  } {
		const node =  this.findNode(key)

		if (!node) return { before: null, above: null, after: null, below: null }

		const { before, after, above, below } = node

		return { before, after, above, below }
	}
}
