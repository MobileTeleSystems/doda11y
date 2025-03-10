import {
	ItemTreeCallback,
	ItemTreeOptions,
	TreeItem,
	TreeItemKey,
	TreeItemPayload,
	TreeItemType
} from './types'
import { Tree } from '../tree'
import { TreeNode } from '../tree'

export class ItemTree<I extends TreeItem = TreeItem, P extends TreeItemPayload<I, 'parent' | 'child' | 'group'> = TreeItemPayload<I, 'parent' | 'child' | 'group'>> {
	/** Дерево */
	public tree: Tree<P | null> = new Tree<P | null>('root', null)
	/** Достижимые в дереве ключи */
	public readonly reachableKeys: Set<TreeItemKey> = new Set()

	private readonly _typeResolver: ((item: I) => TreeItemType | null) = () => null
	private readonly _triggerResolver: ((item: I, index: number) => boolean) | undefined = () => false
	private readonly _labelResolver: ((item: I) => string) | undefined = () => ''
	private readonly _triggerForResolver: ((item: I, node: TreeNode<TreeItemPayload<I, 'parent' | 'child' | 'group'> | null>) => TreeItemKey | undefined) | undefined = () => undefined
	private readonly _keyResolver: ((item: I) => string) | undefined = undefined
	private readonly _callback: ItemTreeCallback<I, P> | undefined = () => {}

	private readonly _parentChildren: Map<TreeItemKey, Set<TreeNode<TreeItemPayload<I, 'parent' | 'child' | 'group'> | null>>> = new Map()
	private readonly _expanded: TreeItemKey[] = []
	private _keys: TreeItemKey[] = []
	private readonly _triggerForKeys: Map<TreeItemKey, TreeItemKey | undefined> = new Map()

	/**
   *
   * @param items - Коллекция item элементов
   * @param options - Параметры инициализации дерева
   * @param [options.prefix] - Префикс
   * @param options.typeResolver - Функция, вызываемая при определении типа элемента
   * @param [options.triggerResolver] - Функция, вызываемая при определении, является ли элемент триггером
   * @param [options.triggerForResolver] - Функция, вызываемая при определении, какому родителю принадлежит триггер
   * @param [options.labelResolver] - Функция, вызываемая при определении текстовой метки
   * @param [options.expanded] - список раскрытых ключей
   * @param callback - Функция, вызываемая при инициализации элемента дерева
   */
	constructor(items: I[], options: ItemTreeOptions<I>, callback?: ItemTreeCallback<I, P>) {
		const {
			prefix,
			typeResolver,
			expanded = [],
			triggerResolver,
			triggerForResolver,
			labelResolver,
			keyResolver
		} = options || {}

		this._expanded = ['root', ...expanded]
		this._typeResolver = typeResolver
		this._triggerResolver = triggerResolver
		this._triggerForResolver = triggerForResolver
		this._labelResolver = labelResolver
		this._keyResolver = keyResolver
		this._callback = callback

		items.forEach((item, index) => {
			this.addNode(item, { index, prefix })
		})

		for (const [triggerKey] of this._triggerForKeys) {
			const node = this.tree.findNode(triggerKey)

			if (!node || !node.payload?.item) continue
      
			const triggerFor = this.getTriggerFor(node.payload.item, node)
			this._triggerForKeys.set(triggerKey, triggerFor)
			if (node.payload) node.payload.triggerFor = triggerFor
		}

		this.getReachableNodes().forEach((node) => {
			this.reachableKeys.add(node.key)
		})
	}

	/**
   * Метод, определяющий, является ли элемент доступным (достижимым по раскрытости/скрытности родителей) в родителе
   * @param key - ключ элемента
   */
	public isReachableInParents(key: TreeItemKey): boolean {
		const node = this.tree.findNode(key)
		if (!node) return false

		for (const parent of node.getAllParents()) {
			if (!this._expanded.includes(parent.key) && parent.payload?.type !== 'group') return false
		}

		return true
	}

	/**
   * Метод получения всех достижимых нод
   */
	public getReachableNodes(): TreeNode<TreeItemPayload<I, 'parent' | 'child' | 'group'> | null>[] {
		const res = []

		for (const [key, node] of this.tree.nodes.entries()) {
			if (this.isReachableInParents(key)) res.push(node)
			if (!node?.parent) res.push(node)

			if (node?.payload?.isTrigger) {
				const triggerFor = this._triggerForKeys.get(node.key)

				if (triggerFor && this.isReachableInParents(triggerFor)) res.push(node)
			}

			if (this.isReachableInParents(node.key) && !node.payload?.isTrigger) res.push(node)
		}

		return res
	}


	/**
   * Метод получения триггера родительского элемента по ключу
   * @param key - ключ элемента
   */
	public getTrigger(key: TreeItemKey): TreeNode<P | null> | null {
		const node = this.tree.findNode(key)

		if (!node) return null
		if (node.payload?.type !== 'parent') throw new Error('Переданный ключ должен соответствовать ноде с типом "parent"')

		for (const [trigger, parent] of this._triggerForKeys.entries()) {
			if (parent === key) return this.tree.findNode(trigger)
		}

		return null
	}

	/**
   * Метод получения всех дочерних элементов по ключу
   * @param key - ключ элемента
   */
	public getChildren(key: TreeItemKey): TreeNode<TreeItemPayload<I, 'parent' | 'group' | 'child'> | null>[] {
		const children = this._parentChildren.get(key)

		return children ? Array.from(children) : []
	}

	/**
   * Метод получения следующей ноды
   * @param key - ключ ноды
   * @param types - типы, которым следующая нода должны соответствовать
   * @param excludedKeys - ключи, которые должны быть пропущены при поиске
   */
	public getNextNode(key: TreeItemKey, types: TreeItemType[] = ['child'], excludedKeys?: TreeItemKey[]): TreeNode<TreeItemPayload<I, 'parent' | 'group' | 'child'> | null> | null {
		const nextNode = this.tree.findNode(key)?.getNextNode()

		if (!nextNode) return null
		if (!types && !excludedKeys?.includes(nextNode.key)) return nextNode
		if (nextNode?.payload?.type && types.includes(nextNode?.payload?.type) && !excludedKeys?.includes(nextNode.key)) return nextNode

		return this.getNextNode(nextNode?.key ?? '', types)
	}

	/**
   * Метод получения предыдущей ноды
   * @param key - ключ ноды
   * @param types - типы, которым предыдущая нода должны соответствовать (по умолчанию 'child')
   * @param excludedKeys - ключи, которые должны быть пропущены при поиске
   */
	public getPrevNode(key: TreeItemKey, types: TreeItemType[] = ['child'], excludedKeys?: TreeItemKey[]): TreeNode<TreeItemPayload<I, 'parent' | 'group' | 'child'> | null> | null {
		const prevNode = this.tree.findNode(key)?.getPrevNode()

		if (!prevNode) return null
		if (!types && !excludedKeys?.includes(prevNode.key)) return prevNode
		if (prevNode?.payload?.type && types.includes(prevNode?.payload?.type) && !excludedKeys?.includes(prevNode.key)) return prevNode

		return this.getPrevNode(prevNode?.key ?? '', types)
	}

	/**
   * Метод получения следующего элемента с тем же родителем, что элемент с соответсвующим переданным ключом
   * @param parentKey - ключ родительского элемента
   * @param key - ключ элемента в составе родителя
   * @param types - типы, которым следующая нода должны соответствовать (по умолчанию 'child')
   * @param excludedKeys - ключи, которые должны быть пропущены при поиске
   */
	public getNextParentNode(parentKey: TreeItemKey, key: TreeItemKey, types: TreeItemType[] = ['child'], excludedKeys?: TreeItemKey[]): TreeNode<TreeItemPayload<I, 'parent' | 'group' | 'child'> | null> | null {
		const children = this.getChildren(parentKey)
		const next = this.getNextNode(key, types, excludedKeys)

		if (next && children.includes(next)) return next

		return null
	}

	/**
   * Метод получения предыдущего элемента с тем же родителем, что элемент с соответсвующим переданным ключом
   * @param parentKey - ключ родительского элемента
   * @param key - ключ элемента в составе родителя
   * @param types - типы, которым следующая ноды должна соответствовать (по умолчанию 'child')
   * @param excludedKeys - ключи, которые должны быть пропущены при поиске
   */
	public getPrevParentNode(parentKey: TreeItemKey, key: TreeItemKey, types: TreeItemType[] = ['child'], excludedKeys?: TreeItemKey[]): TreeNode<TreeItemPayload<I, 'parent' | 'group' | 'child'> | null> | null {
		const children = this.getChildren(parentKey)
		const prev = this.getPrevNode(key, types, excludedKeys)

		if (prev && children.includes(prev)) return prev

		return null
	}

	/**
   * Метод получения первой ноды в дереве
   * @param types - типы, которым нода должна соответствовать (по умолчанию 'child')
   */
	public getFirstNode(types: TreeItemType[] = ['child']): TreeNode<TreeItemPayload<I, 'parent' | 'group' | 'child'> | null> | null {
		return this.getNextNode('root', types)
	}

	/**
   * Метод получения последней ноды в дереве
   * @param types - типы, которым нода должна соответствовать (по умолчанию 'child')
   */
	public getLastNode(types: TreeItemType[] = ['child']): TreeNode<TreeItemPayload<I, 'parent' | 'group' | 'child'> | null> | null {
		if (this.tree.tail.payload?.type && types.includes(this.tree.tail.payload.type)) return this.tree.tail

		return this.getPrevNode(this.tree.tail.key, types)
	}

	/**
   * Метод получения первой ноды в родительском элементе
   * @param parentKey - ключ родительского элемента
   * @param types - типы, которым нода должны соответствовать (по умолчанию 'child')
   */
	public getFirstParentNode(parentKey: TreeItemKey, types: TreeItemType[] = ['child']): TreeNode<TreeItemPayload<I, 'parent' | 'group' | 'child'> | null> | null {
		const children = this.getChildren(parentKey)

		for (let i = 0; i < children.length; i++) {
			const child = children[i]
			if (child.payload?.type && types.includes(child.payload.type)) return child
		}

		return null
	}

	/**
   * Метод получения последней ноды в родительском элементе
   * @param parentKey - ключ родительского элемента
   * @param types - типы, которым нода должны соответствовать (по умолчанию 'child')
   */
	public getLastParentNode(parentKey: TreeItemKey, types: TreeItemType[] = ['child']): TreeNode<TreeItemPayload<I, 'parent' | 'group' | 'child'> | null> | null {
		const children = this.getChildren(parentKey)

		for (let i = children.length - 1; i >= 0; i--) {
			const child = children[i]
			if (child.payload?.type && types.includes(child.payload.type)) return child
		}
    
		return null
	}

	/**
   * Метод, позволяющий получить ближайшего к ноде родителя по указанному типу
   * @param key - ключ элемента
   * @param types - типы, которым нода должны соответствовать (по умолчанию 'parent')
   */
	public getCloseParentByTypes(key: TreeItemKey, types: TreeItemType[] = ['parent']): TreeNode<TreeItemPayload<I, 'parent' | 'group' | 'child'> | null> | null {
		const node = this.tree.findNode(key)
		if (!node) return null

		if (types.includes('child')) throw new Error('types не может включать в себя тип child')

		const parents = node.parents
		if (!parents) return null

		for (let i = parents.length - 1; i >= 0; i--) {
			const parent = parents[i]
			if (parent.payload?.type && types.includes(parent.payload.type)) return parent
		}

		return null
	}

	/**
   * Метод, позволяющий получить дальнего к ноде родителя по указанному типу
   * @param key - ключ элемента
   * @param types - типы, которым нода должны соответствовать (по умолчанию 'parent')
   */
	public getDistantParentByTypes(key: TreeItemKey, types: TreeItemType[] = ['parent']): TreeNode<TreeItemPayload<I, 'parent' | 'group' | 'child'> | null> | null {
		const node = this.tree.findNode(key)
		if (!node) return null

		if (types.includes('child')) throw new Error('types не может включать в себя тип child')

		const parents = node.parents
		if (!parents) return null

		for (let i = 0; i < parents.length; i++) {
			const parent = parents[i]
			if (parent.payload?.type && types.includes(parent.payload.type)) return parent
		}

		return null
	}

	/**
   * Метод, позволяющий получить следующий достижимый элемент дерева
   * @param key - ключ элемента
   * @param types - типы, которым нода должны соответствовать (по умолчанию 'child')
   * @param excludedKeys - ключи, которые должны быть пропущены при поиске
   * @param includeTrigger - учитывать ли триггеры при поиске
   */
	public getNextExtendedNode(key: TreeItemKey, types: TreeItemType[] = ['child'], excludedKeys: TreeItemKey[] = [], includeTrigger: boolean = true): TreeNode<TreeItemPayload<I, 'parent' | 'group' | 'child'> | null> | null {
		const nextNode = this.getNextNode(key, types)

		if (!nextNode) return null
		if (this.reachableKeys.has(nextNode.key) && !excludedKeys?.includes(nextNode.key)) {
			if (nextNode.payload?.isTrigger && !includeTrigger) return this.getNextExtendedNode(nextNode.key, types, excludedKeys, includeTrigger)

			return nextNode
		}

		return this.getNextExtendedNode(nextNode.key, types, excludedKeys, includeTrigger)
	}

	/**
   * Метод, позволяющий получить следующий достижимый элемент в родительском элементе
   * @param parentKey - ключ родительского элемента
   * @param key - ключ элемента
   * @param types - типы, которым нода должны соответствовать (по умолчанию 'child')
   * @param excludedKeys - ключи, которые должны быть пропущены при поиске
   * @param includeTrigger - учитывать ли триггеры при поиске
   */
	public getNextParentExtendedNode(parentKey: string, key: string, types: TreeItemType[] = ['child'], excludedKeys: TreeItemKey[] = [], includeTrigger: boolean = true): TreeNode<TreeItemPayload<I, 'parent' | 'group' | 'child'> | null> | null {
		const children = this.getChildren(parentKey)
		const next = this.getNextExtendedNode(key, types, excludedKeys, includeTrigger)

		if (next && children.includes(next)) return next

		return null
	}

	/**
   * Метод, позволяющий получить предыдущий достижимый элемент дерева
   * @param key - ключ элемента
   * @param types - типы, которым нода должны соответствовать (по умолчанию 'child')
   * @param excludedKeys - ключи, которые должны быть пропущены при поиске
   * @param includeTrigger - учитывать ли триггеры при поиске
   */
	public getPrevExtendedNode(key: TreeItemKey, types: TreeItemType[] = ['child'], excludedKeys: TreeItemKey[] = [], includeTrigger: boolean = true): TreeNode<TreeItemPayload<I, 'parent' | 'group' | 'child'> | null> | null {
		const prevNode = this.getPrevNode(key, types)

		if (!prevNode) return null
		if (this.reachableKeys.has(prevNode.key) && !excludedKeys?.includes(prevNode.key)) {
			if (prevNode.payload?.isTrigger && !includeTrigger) return this.getPrevExtendedNode(prevNode.key, types, excludedKeys, includeTrigger)

			return prevNode
		}

		return this.getPrevExtendedNode(prevNode.key, types, excludedKeys, includeTrigger)
	}

	/**
   * Метод, позволяющий получить предыдущий достижимый элемент в родительском элементе
   * @param parentKey - ключ родительского элемента
   * @param key - ключ элемента
   * @param types - типы, которым нода должны соответствовать (по умолчанию 'child')
   * @param excludedKeys - ключи, которые должны быть пропущены при поиске
   * @param includeTrigger - учитывать ли триггеры при поиске
   */
	public getPrevParentExtendedNode(parentKey: string, key: string, types: TreeItemType[] = ['child'], excludedKeys: TreeItemKey[] = [], includeTrigger: boolean = true): TreeNode<TreeItemPayload<I, 'parent' | 'group' | 'child'> | null> | null {
		const children = this.getChildren(parentKey)
		const next = this.getPrevExtendedNode(key, types, excludedKeys, includeTrigger)

		if (next && children.includes(next)) return next

		return null
	}

	/**
   * Метод получения первого достижимого элемента дерева
   * @param types - типы, которым нода должны соответствовать (по умолчанию 'child')
   * @param excludedKeys - ключи, которые должны быть пропущены при поиске
   * @param includeTrigger - учитывать ли триггеры при поиске
   */
	public getFirstExtendedNode(types?: TreeItemType[], excludedKeys: TreeItemKey[] = [], includeTrigger: boolean = true): TreeNode<TreeItemPayload<I, 'parent' | 'group' | 'child'> | null> | null {
		return this.getNextExtendedNode('root', types, excludedKeys, includeTrigger)
	}

	/**
   * Метод получения первого элемента в составе родительского
   * @param key - ключ элемента
   * @param types - типы, которым нода должны соответствовать (по умолчанию 'child')
   * @param excludedKeys - ключи, которые должны быть пропущены при поиске
   * @param includeTrigger - учитывать ли триггеры при поиске
   */
	public getFirstParentExtendedNode(key: string, types: TreeItemType[] = ['child'], excludedKeys: TreeItemKey[] = [], includeTrigger = true): TreeNode<TreeItemPayload<I, 'parent' | 'group' | 'child'> | null> | null {
		const children = this.getChildren(key)

		for (let i = 0; i < children.length; i++) {
			const child = children[i]

			if (this.reachableKeys.has(child.key) && !excludedKeys?.includes(child.key)) {
				if (child.payload?.isTrigger && !includeTrigger) continue
				if (types && child.payload?.type && !types.includes(child.payload?.type)) continue

				return child
			}
		}

		return null
	}

	/**
   * Метод получения последнего достижимого элемента дерева
   * @param types - типы, которым нода должны соответствовать (по умолчанию 'child')
   * @param excludedKeys - ключи, которые должны быть пропущены при поиске
   * @param includeTrigger - учитывать ли триггеры при поиске
   */
	public getLastExtendedNode(types?: TreeItemType[], excludedKeys: TreeItemKey[] = [], includeTrigger: boolean = true): TreeNode<TreeItemPayload<I, 'parent' | 'group' | 'child'> | null> | null {
		const last = this.tree.tail

		if (!last) return null

		if (last.payload?.isTrigger && includeTrigger) {
			const triggerFor = this._triggerForKeys.get(last.key)
			if (triggerFor && this.reachableKeys.has(triggerFor) && !excludedKeys?.includes(last.key)) return last
		}

		if (this.reachableKeys.has(last.key) && !last.payload?.isTrigger && !excludedKeys?.includes(last.key)) return last

		return this.getPrevExtendedNode(this.tree.tail.key, types, excludedKeys, includeTrigger)
	}

	/**
   * Метод получения последнего элемента в составе родительского
   * @param key - ключ элемента
   * @param types - типы, которым нода должны соответствовать (по умолчанию 'child')
   * @param excludedKeys - ключи, которые должны быть пропущены при поиске
   * @param includeTrigger - учитывать ли триггеры при поиске
   */
	public getLastParentExtendedNode(key: string, types: TreeItemType[] = ['child'], excludedKeys: TreeItemKey[] = [], includeTrigger: boolean = true): TreeNode<TreeItemPayload<I, 'parent' | 'group' | 'child'> | null> | null {
		const children = this.getChildren(key)

		for (let i = children.length - 1; i >= 0; i--) {
			const child = children[i]
			if (this.reachableKeys.has(child.key) && !excludedKeys?.includes(child.key)) {
				if (child.payload?.isTrigger && !includeTrigger) continue
				if (types && child.payload?.type && !types.includes(child.payload?.type)) continue

				return child
			}
		}

		return null
	}

	/**
   * Метод получения ключа элемента
   * @param type - тип элемента
   * @param index - индекс элемента
   * @param [parentKey] - родительский ключ
   * @param [prefix] - префикс для ключа
   * @param [item] - item элемента
   * @private
   */
	private getKey(type: TreeItemType, index: number = 0, parentKey?: TreeItemKey, prefix?: string, item?: I): string {
		if (this._keyResolver && item) {
			const key = this._keyResolver(item)
			if (!key) throw new Error('Ключ не может быть пустым')

			return key
		}

		const key = parentKey ? `${parentKey}.${type}${index}` : `${type}${index}`
		return prefix && !key.startsWith(prefix) ? `${prefix}${key}` : `${key}`
	}

	/**
   * Метод получения типа элемента
   * @param item - item элемента
   * @private
   */
	private getType(item: I): TreeItemType {
		return this._typeResolver?.(item) ?? 'child'
	}

	/**
   * Метод, возвращающий true, если элемент является триггером, иначе - false
   * @param item - item элемента
   * @param index - индекс элемента
   * @private
   */
	private isTrigger(item: I, index: number): boolean {
		return this._triggerResolver?.(item, index) ?? false
	}

	/**
   * Метод получения текстовой метки элемента
   * @param item - item элемента
   * @private
   */
	private getLabel(item: I): string {
		return this._labelResolver?.(item) ?? ''
	}

	/**
   * Метод, связывающий триггер с родителем
   * @param item - item элемента
   * @param node - элемент
   * @private
   */
	private getTriggerFor(item: I, node: TreeNode<TreeItemPayload<I, 'parent' | 'child' | 'group'> | null>) {
		return this._triggerForResolver?.(item, node)
	}

	/**
   * Метод, добавляющий элемент в дерево
   * @param item - item элемента
   * @param {Object} options - опции элемента
   * @param [options.parentKey] - ключ родителя
   * @param options.index - индекс элемента
   * @param [options.prefix] - префикс элемента
   * @param [options.parentKeys] - ключи родительских элементов
   * @private
   */
	private addNode(item: I, options: { parentKey?: TreeItemKey, index: number, prefix?: string, parentKeys?: Set<TreeItemKey> }) {
		const { parentKey = 'root', index = 0, prefix = '', parentKeys = new Set(['root']) } = options

		const type = this.getType(item)

		if (!type) return

		const key = this.getKey(type, index, parentKey, prefix, item)

		if (!this._keys.includes(key)) this._keys.push(key)

		const label = this.getLabel(item)
		const isTrigger = this.isTrigger(item, index)

		const payload = {
			type,
			item,
			label,
			isTrigger
		} as P

		const node = this.tree.addNode(key, parentKey, payload)

		this._callback?.(item, this.tree, { parentKey, prefix, index, key, ...payload })

		for (const pK of parentKeys) {
			const prev = this._parentChildren.get(pK)
			if (prev) prev.add(node)
			else  this._parentChildren.set(pK, new Set([node]))
		}

		if (isTrigger) this._triggerForKeys.set(key, undefined)

		if (['group', 'parent'].includes(type) && Array.isArray(item.children)) {
			item.children.forEach((child, index) => {
				this.addNode(child, { index, prefix, parentKey: key, parentKeys: new Set([...parentKeys, parentKey, key]) })
			})
		}
	}
}
