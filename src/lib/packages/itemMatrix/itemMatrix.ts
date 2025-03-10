import { MatrixItem, MatrixItemOptions, MatrixItemPayload } from './types'
import { Matrix, MatrixNode } from '../matrix'

export class ItemMatrix<I extends MatrixItem = MatrixItem, P extends MatrixItemPayload<I> = MatrixItemPayload<I>> {
	/** Матрица */
	private matrix: Matrix<P>
	private disabled: Set<string> = new Set()
	private readonly rowCount: number = 0
	private readonly columnCount: number = 0
	private readonly moveBetweenRows: boolean = true
	public keys: Set<string> = new Set()

	/**
   * Конструктор класса
   * @param items - элементы коллекции
   * @param options - опции коллекции
   * @param options.rowCount - свойство, означающее количество строк
   * @param options.columnCount - свойство, означающее количество столбцов
   * @param [options.labelResolver] - функция, вызываемая при определении текстовой метки элемента коллекции
   * @param [options.disabled] - свойство, означающие элементы матрицы, исключаемые из управления
   * @param [options.moveBetweenRows = true] - переносит ли на следующую строку, если достигли левого или правого края
   */
	constructor(items: I[], options: MatrixItemOptions<I>) {
		const { labelResolver, rowCount, columnCount, disabledKeys, moveBetweenRows = true } = options

		if (disabledKeys) this.disabled = disabledKeys
		this.moveBetweenRows = moveBetweenRows
		this.rowCount = rowCount
		this.columnCount = columnCount
		this.matrix = new Matrix<P>(items.map((item: I) => this.getPayload(item.key, item, labelResolver?.(item) ?? '')), rowCount, columnCount)
		this.keys = new Set(this.matrix.keysToIndexes.keys())
	}

	/**
   * Метод получения матрицы
   */
	public getMatrix(): (MatrixNode<P> | null)[][] {
		return this.matrix.matrix
	}

	public isDisable(key: string): boolean {
		return this.disabled.has(key)
	}

	public getFirstNode(): MatrixNode<P> | null {
		const node: MatrixNode<P> | null = this.matrix.findNodeByIndex([0, 0])

		if (!this.isDisable(node.key)) return node

		return this.getRightNode(node.key)
	}

	public getLastNode(): MatrixNode<P> | null {
		const node: MatrixNode<P> | null = this.matrix.findNodeByIndex([this.rowCount - 1, this.columnCount - 1])

		if (!this.isDisable(node.key)) return node

		return this.getLeftNode(node.key)
	}

	public getRightNode(key: string, moveBetweenRows?: boolean): MatrixNode<P> | null {
		const node = this.matrix.findNode(key)
		if (!node) return null

		const rightNode = moveBetweenRows ?? this.moveBetweenRows ? node.getNextNode() : node.getAfterNode()
		if (!rightNode) return null

		if (!this.isDisable(rightNode.key) && rightNode) return rightNode
		else return this.getRightNode(rightNode.key)
	}

	public getLeftNode(key: string, moveBetweenRows?: boolean): MatrixNode<P> | null {
		const node = this.matrix.findNode(key)
		if (!node) return null

		const leftNode = moveBetweenRows ?? this.moveBetweenRows ? node.getPrevNode() : node.getBeforeNode()
		if (!leftNode) return null

		if (!this.isDisable(leftNode.key) && leftNode) return leftNode
		else return this.getLeftNode(leftNode.key)
	}

	public getAboveNode(key: string): MatrixNode<P> | null {
		const node = this.matrix.findNode(key)
		if (!node) return null

		const aboveNode = node.getAboveNode()
		if (!aboveNode) return null

		if (!this.isDisable(aboveNode.key) && aboveNode) return aboveNode
		else return this.getAboveNode(aboveNode.key)
	}

	public getBelowNode(key: string): MatrixNode<P> | null {
		const node = this.matrix.findNode(key)
		if (!node) return null

		const belowNode = node.getBelowNode()
		if (!belowNode) return null

		if (!this.isDisable(belowNode.key) && belowNode) return belowNode
		else return this.getBelowNode(belowNode.key)
	}

	/**
   * Метод получения payload ноды
   * @param key - ключ элемента
   * @param item - элемент
   * @param label - текстовая метка
   */
	private getPayload(key: string, item: I, label: string): P {
		return {
			key,
			item,
			label
		} as P
	}
}
