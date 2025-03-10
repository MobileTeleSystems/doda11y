import { TreeNode } from './treeNode'

export class Tree<P> {
	/** Root-элемент */
	root: TreeNode<P> | null = null
	/** Все элементы коллекции */
	nodes: Map<string, TreeNode<P>> = new Map()
	/** Первый элемент коллекции */
	head: TreeNode<P>
	/** Последний элемент коллекции */
	tail: TreeNode<P>

	constructor(rootKey: string, rootPayload: P) {
		this.root = new TreeNode<P>(rootKey, null, rootPayload, 0)
		this.nodes.set(rootKey, this.root)
		this.head = this.root
		this.tail = this.root
	}

	/**
   * Метод, устанавливающий конец и начало дерева в случае изменений
   * @param node - нода дерева
   * @private
   */
	private insertNodeInList(node: TreeNode<P>) {
		if (this.tail) {
			this.tail.next = node
			node.prev = this.tail
			this.tail = node
		} else {
			this.head = node
			this.tail = node
		}
	}

	/**
   * Обход дерева в глубину
   * @param callback - Метод, вызываемый при обходе
   */
	traverseDFS(callback: (node: TreeNode<P>) => void): void {
		const traverse = (node: TreeNode<P>) => {
			callback(node)

			for (const child of node.children) traverse(child)
		}

		if (this.root) traverse(this.root)
	}

	/**
   * Метод, возвращающий элемент дерева по ключу
   * @param key - ключ элемента
   */
	findNode(key: string): TreeNode<P> | null {
		return this.nodes.get(key) ?? null
	}

	/**
   * Метод, добавляющий элемент в дерево
   * @param key - ключ добавляемого элемента
   * @param parentKey - ключ родительского элемента
   * @param payload - полезная нагрузка элемента
   */
	addNode(key: string, parentKey: string, payload: P): TreeNode<P> {
		const parentNode = this.findNode(parentKey)

		if (!parentNode) throw new Error(`Parent key ${parentNode} not found`)

		const newNode = new TreeNode(key, parentNode, payload, parentNode.level + 1)

		parentNode.addChild(newNode)
		this.nodes.set(key, newNode)
		this.insertNodeInList(newNode)

		return newNode
	}

	/**
   * Метод, возвращающий соседний ноды элемента
   * @param key - ключ элемента, чьих соседей нужно найти
   */
	getNeighborNodes(key: string): { previous: TreeNode<P> | null, next: TreeNode<P> | null } {
		const node =  this.findNode(key)

		if (!node) return { previous: null, next: node }

		return { previous: node.prev, next: node.next }
	}

	/**
   * Метод, возвращающий ключ родительского элемента
   * @param key - ключ элемента, родителя которого нужно найти
   */
	getParentKey(key: string): string | null {
		const node = this.findNode(key)

		return node && node.parent ? node.parent.key : null
	}
}
