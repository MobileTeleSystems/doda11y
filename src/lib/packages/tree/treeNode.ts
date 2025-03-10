
export class TreeNode<P> {
	public key: string
	public parent: TreeNode<P> | null
	public children: TreeNode<P>[]
	public payload: P
	public level: number
	public next: TreeNode<P> | null = null
	public prev: TreeNode<P> | null = null
	public parents: TreeNode<P>[] = []

	constructor(key: string, parent: TreeNode<P> | null = null, payload: P, level: number = 0) {
		this.key = key
		this.parent = parent
		this.payload = payload
		this.children = []
		this.level = level
	}

	/**
   * Метод, добавляющий дочерний элемент в ноду
   * @param child - дочерний элемент
   */
	addChild(child: TreeNode<P>): void {
		child.parent = this
		child.level = this.level + 1
		child.parents = [...this.parents, this]
		this.children.push(child)
	}

	/**
   * Метод, возвращающий следующий элемент
   */
	getNextNode(): TreeNode<P> | null {
		return this.next
	}

	/**
   * Метод, возвращающий предыдущий элемент
   */
	getPrevNode(): TreeNode<P> | null {
		return this.prev
	}

	/**
   * Метод, возвращающий всех родителей элемента
   */
	getAllParents(): TreeNode<P>[] {
		return this.parents
	}
}
