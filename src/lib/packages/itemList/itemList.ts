import { ListItem, ListItemCallback, ListItemKey, ListItemOptions, ListItemPayload, ListItemType } from './types'
import { LinkedList } from '../linkedList'
import { LinkedListNode } from '../linkedList'

export class ItemList<I extends ListItem = ListItem, P extends ListItemPayload<I> = ListItemPayload<I>> {
	/** Коллекция элементов */
	private list = new LinkedList<P>()

	private readonly _typeResolver: ((item: I) => ListItemType | null) = () => null
	private readonly _callback: ListItemCallback<I, P> | undefined = () => undefined
	private readonly _labelResolver: ((item: I) => string) | undefined = () => ''
	private readonly _keyResolver: ((item: I) => string) | undefined = undefined

	private _position: number = 1
	private _keys: ListItemKey[] = []
	private readonly _prefix: string | undefined
	private readonly _parentForKeys: Map<ListItemKey, ListItemKey[] | undefined> = new Map()

	/**
   * Конструктор класса
   * @param items - элементы коллекции
   * @param options - опции коллекции
   * @param options.labelResolver - функция, вызываемая при определении текстовой метки элемента коллекции
   * @param options.typeResolver - функция, вызываемая при определении типа элемента коллекции
   * @param [options.prefix] - префикс
   * @param callback - функция, вызываемая при добавлении элемента в коллекцию
   */
	constructor(items: I[], options: ListItemOptions<I>, callback?: ListItemCallback<I, P>) {
		const { labelResolver, keyResolver, typeResolver, prefix } = options

		this._callback = callback
		this._typeResolver = typeResolver
		this._labelResolver = labelResolver
		this._keyResolver = keyResolver
		this._prefix = prefix

		items.forEach((item, index) => {
			this.addNode(item, this._position,{ index, prefix: options.prefix })
			this._position += 1
		})
	}

	/**
   * Метод получения следующего элемента коллекции
   * @param key - ключ элемента коллекции
   * @param types - типы, которым нода должны соответствовать (по умолчанию 'item')
   */
	public getNextNode(key: ListItemKey, types: ListItemType[] = ['item']): LinkedListNode<ListItemPayload<I>> | null {
		const nextNode = this.list.getNextByKey(key)

		if (!nextNode) return null
		if (!types) return nextNode
		if (nextNode?.payload?.type && types.includes(nextNode?.payload?.type)) return nextNode

		return this.getNextNode(nextNode.key, types)
	}

	/**
   * Метод получения предыдущего элемента коллекции
   * @param key - ключ элемента коллекции
   * @param types - типы, которым нода должны соответствовать (по умолчанию 'item')
   */
	public getPrevNode(key: ListItemKey, types: ListItemType[] = ['item']): LinkedListNode<ListItemPayload<I>> | null {
		const prevNode = this.list.getPrevByKey(key)

		if (!prevNode) return null
		if (!types) return prevNode
		if (prevNode?.payload?.type && types.includes(prevNode.payload.type)) return prevNode

		return this.getPrevNode(prevNode.key, types)
	}

	/**
   * Метод, возвращающий новую отфильтрованную коллекцию элементов
   * @param predicate - функция, вызываемая при итерации
   */
	public filterNodes(predicate: (node: LinkedListNode<ListItemPayload<I>>) => boolean): ItemList<I, P & { key: string }> {
		let current = this.getFirstNode()
		const items = []

		while (current) {
			if (predicate(current) || ['group'].includes(current.payload.type || '')) {
				items.push({ ...current.payload.item, key: current.key })
			}

			current = current.next
		}

		return new ItemList<I, P & { key: string }>(items, {
			prefix: this._prefix,
			typeResolver: this._typeResolver,
			labelResolver: this._labelResolver,
			keyResolver: (item) => item.key,
		}, this._callback)
	}

	/**
   * Метод, возвращающий первый элемент коллекции
   * @param types - типы, которым нода должны соответствовать (по умолчанию 'item')
   */
	public getFirstNode(types: ListItemType[] = ['item']): LinkedListNode<ListItemPayload<I>> | null {
		const firstNode = this.list.getFirst()

		if (types && firstNode?.payload.type && types.includes(firstNode.payload.type)) return firstNode
		if (firstNode?.key) return this.getNextNode(firstNode?.key, types)

		return null
	}

	/**
   * Метод, возвращающий второй элемент коллекции
   * @param types - типы, которым нода должны соответствовать (по умолчанию 'item')
   */
	public getLastNode(types: ListItemType[] = ['item']): LinkedListNode<ListItemPayload<I>> | null {
		const lastNode = this.list.getLast()

		if (types && lastNode?.payload.type && types.includes(lastNode.payload.type)) return lastNode
		if (lastNode?.key) return this.getPrevNode(lastNode?.key, types)

		return null
	}

	/**
   * Метод, возвращающий элемент коллекции по ключу
   * @param key - ключ элемента коллекции
   */
	public getNode(key: string): LinkedListNode<ListItemPayload<I>> | null {
		return this.list.find(key)
	}

	/**
   * Метод, возвращающий ключ элемента
   * @param type - тип элемента
   * @param index - индекс элемента
   * @param [parentKey] - ключ родительского элемента
   * @param [prefix] - префикс элемента
   * @param [item] - item элемента
   * @private
   */
	private getKey(type: ListItemType, index: number = 0, parentKey?: ListItemKey, prefix?: string, item?: I): string {
		if (this._keyResolver && item) {
			const key = this._keyResolver(item)
			if (!key) throw new Error('Ключ не может быть пустым')

			return key
		}

		const key = parentKey ? `${parentKey}.${type}${index}` : `${type}${index}`
		return prefix && !key.startsWith(prefix) ? `${prefix}${key}` : `${key}`
	}

	/**
   * Метод, возвращающий тип элемента
   * @param item - item элемента коллекции
   * @private
   */
	private getType(item: I): ListItemType {
		return this._typeResolver?.(item) ?? 'item'
	}

	/**
   * Метод, возвращающий текстовую метку элемента коллекции
   * @param item - item элемента коллекции
   * @private
   */
	private getLabel(item: I): string {
		return this._labelResolver?.(item) ?? ''
	}

	/**
   * Метод, возвращающий все элементы коллекции в виде массива
   */
	getNodes(): LinkedListNode<P>[] | null {
		return Array.from(this.list.nodes.values())
	}

	/**
   * Метод, возвращающий все ключи дочерних элементов
   * @param key - ключ элемента, чьих детей нужно получить
   */
	getChildrenKeys(key: ListItemKey): ListItemKey[] | undefined {
		return this._parentForKeys.get(key)
	}

	/**
   * Метод, возвращающий все дочерние элементы
   * @param key - ключ элемента, чьих детей нужно получить
   */
	getChildren(key: ListItemKey): LinkedListNode<ListItemPayload<I>>[] {
		const childrenKeys = this.getChildrenKeys(key)

		if (!childrenKeys) return []

		const res: LinkedListNode<ListItemPayload<I>>[] = []

		for (const key of childrenKeys) {
			const node = this.getNode(key)

			if (node) res.push(node)
		}

		return res
	}

	/**
   * Метод, добавляющий элемент в коллекцию
   * @param item - item элемента
   * @param position - позиция элемента
   * @param options - опции элемента
   * @param [options.parentKey] - ключ родительского элемента
   * @param options.index - индекс элемента
   * @param [options.prefix] - префикс элемента
   * @private
   */
	private addNode(item: I, position = 1, options: { parentKey?: ListItemKey, index: number, prefix?: string }) {
		const { parentKey = 'root', index = 0, prefix = '' } = options

		const type = this.getType(item)

		if (!type) return

		const key = this.getKey(type, index, parentKey, prefix, item)

		if (this._keys.includes(key)) {
			throw new Error('Ключ должен быть уникальным')
		} else this._keys.push(key)

		const label = this.getLabel(item)

		const siblings = [...(this._parentForKeys.get(parentKey) ?? []), key]
		this._parentForKeys.set(parentKey, siblings)

		const payload = {
			type,
			item,
			label,
			position,
			parentKey
		} as unknown as P

		this.list.append(key, payload)

		this._callback?.(item, this.list, { prefix, index, key, ...payload })

		if (['group'].includes(type) && Array.isArray(item.children)) {
			item.children.forEach((child, index) => {
				this.addNode(child, this._position, { index, prefix, parentKey: key })
				this._position += 1
			})
		}
	}
}
