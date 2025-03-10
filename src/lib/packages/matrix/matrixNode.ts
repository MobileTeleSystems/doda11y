
export class MatrixNode<P> {
	public key: string
	public payload: P
	public above: MatrixNode<P> | null = null
	public below: MatrixNode<P> | null = null
	public before: MatrixNode<P> | null = null
	public after: MatrixNode<P> | null = null
	public next: MatrixNode<P> | null = null
	public prev: MatrixNode<P> | null = null
	public rowIndex: number
	public columnIndex: number

	constructor(key: string, payload: P, index: [number, number]) {
		const [rowIndex, columnIndex] = index

		this.key = key
		this.payload = payload
		this.rowIndex = rowIndex
		this.columnIndex = columnIndex
	}

	/**
   * Метод, возвращающий предыдущий элемент
   */
	getPrevNode(): MatrixNode<P> | null {
		return this.prev
	}

	/**
   * Метод, возвращающий следующий элемент
   */
	getNextNode(): MatrixNode<P> | null {
		return this.next
	}

	/**
   * Метод, возвращающий следующий элемент
   */
	getAfterNode(): MatrixNode<P> | null {
		return this.after
	}

	/**
   * Метод, возвращающий предыдущий элемент
   */
	getBeforeNode(): MatrixNode<P> | null {
		return this.before
	}

	/**
   * Метод, возвращающий элемент выше
   */
	getAboveNode(): MatrixNode<P> | null {
		return this.above
	}

	/**
   * Метод, возвращающий элемент ниже
   */
	getBelowNode(): MatrixNode<P> | null {
		return this.below
	}

	/**
   * Метод, возвращающий всех соседей элемента
   */
	getAllNeighbors(){
		const { below, before, after, above } = this
		return { before, after, above, below }
	}

	/**
   * Метод, возвращающий индекс элемента
   */
	getIndex(): [number, number] {
		return [this.rowIndex, this.columnIndex]
	}
}
