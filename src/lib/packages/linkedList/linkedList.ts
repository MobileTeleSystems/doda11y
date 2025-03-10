import { LinkedListNode } from './linkedListNode'

export class LinkedList<P> {
	private head: LinkedListNode<P> | null = null
	private tail: LinkedListNode<P> | null = null

	/** Коллекция элементов */
	public nodes = new Map<string, LinkedListNode<P>>()

	/**
   * Метод, добавляющий ноду в лист
   * @param key - ключ, по которому будет храниться нода в листе
   * @param payload - дополнительная информация, хранящаяся в элементе листа
   * */
	append(key: string, payload: P): void {
		const newNode = new LinkedListNode(key, payload)

		if (!this.head) {
			this.head = newNode
			this.tail = newNode
		} else {
			if (this.tail) {
				this.tail.next = newNode
				newNode.prev = this.tail
				this.tail = newNode
			}
		}

		this.nodes.set(key, newNode)
	}

	/**
   * Метод, удаляющий ноду из листа
   * @param key - ключ, по которому будет храниться элемент в листе
   * */
	remove(key: string): void {
		const nodeToRemove = this.nodes.get(key)

		if (!nodeToRemove) return

		if (nodeToRemove.prev) {
			nodeToRemove.prev.next = nodeToRemove.next
		} else {
			this.head = nodeToRemove.next
		}

		if (nodeToRemove.next) {
			nodeToRemove.next.prev = nodeToRemove.prev
		} else {
			this.tail = nodeToRemove.prev
		}

		this.nodes.delete(key)
	}

	/**
   * Метод, фильтрующий элементы в листе
   * @param predicate - фильтрующая функция, вызываемая при итерации по нодам листа
   * */
	filter(predicate: (node: LinkedListNode<P>) => boolean): LinkedList<P> {
		let current = this.head
		const newList = new LinkedList<P>()

		while (current) {
			if (predicate(current)) newList.append(current.key, current.payload)

			current = current.next
		}

		return newList
	}

	/**
   * Метод, возвращающий ноду из листа по ключу
   * @param key - ключ элемента
   * */
	find(key: string): LinkedListNode<P> | null {
		return this.nodes.get(key) || null
	}

	/**
   * Метод, возвращающий первую ноду листа
   * */
	getFirst(): LinkedListNode<P> | null {
		return this.head
	}

	/**
   * Метод, возвращающий последнюю ноду листа
   * */
	getLast(): LinkedListNode<P> | null {
		return this.tail
	}

	/**
   * Метод, возвращающий следующую ноду от передаваемой по ключу
   * @param key - ключ ноды
   * */
	getNextByKey(key: string): LinkedListNode<P> | null {
		const node = this.nodes.get(key)

		return node ? node.next : null
	}

	/**
   * Метод, возвращающий предыдущую ноду от передаваемой по ключу
   * @param key - ключ ноды
   * */
	getPrevByKey(key: string): LinkedListNode<P> | null {
		const node = this.nodes.get(key)

		return node ? node.prev : null
	}
}
