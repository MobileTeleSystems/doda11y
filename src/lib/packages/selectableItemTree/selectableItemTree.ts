import {
	SelectableItemTreeCallback,
	SelectableItemTreeOptions,
	SelectableTreeItemPayload
} from './types'
import { TreeNode } from '../tree/treeNode'
import { ItemTree, TreeItem, TreeItemType, TreeItemKey } from '../itemTree'

export class SelectableItemTree<I extends TreeItem = TreeItem> extends ItemTree<I, SelectableTreeItemPayload<I>> {
	/** Доступные для выбора ключи */
	public selectableKeys: Set<string> = new Set()
	/** Достижимые, доступные для выбора ключи */
	public reachableSelectableKeys: Set<string> = new Set()

	/**
   * Конструктор класса
   * @param items - Коллекция item элементов
   * @param options - Параметры инициализации дерева
   * @param [options.prefix] - Префикс
   * @param options.typeResolver - Функция, вызываемая при определении типа элемента
   * @param options.triggerResolver - Функция, вызываемая при определении, является ли элемент триггером
   * @param options.triggerForResolver - Функция, вызываемая при определении того, какому родителю принадлежит триггер
   * @param [options.labelResolver] - Функция, вызываемая при определении текстовой метки
   * @param [options.selectableResolver] - Функция, вызываемая при определении того, может ли элемент быть выбран
   * @param [options.expanded] - список раскрытых ключей
   * @param callback - Функция, вызываемая при инициализации элемента дерева
   */
	constructor(
		items: I[],
		options: SelectableItemTreeOptions<I>,
		callback?: SelectableItemTreeCallback<I, SelectableTreeItemPayload<I>>
	) {
		const { selectableResolver } = options

		super(items, options, (iterateItem, tree, options) => {
			const { key } = options
			const node = tree.nodes.get(key)

			if (!node) return

			if (node.payload) {
				node.payload.selectable = selectableResolver?.(iterateItem)
			}

			callback?.(iterateItem, tree, options)
		})

		for (const node of this.tree.nodes.values()) {
			if (node.payload?.selectable) this.selectableKeys.add(node.key)
		}

		for (const reachableKey of this.reachableKeys) {
			if (this.selectableKeys.has(reachableKey)) this.reachableSelectableKeys.add(reachableKey)
		}
	}

	/**
   * Метод получения следующего выбираемого (доступного для выбора) элемента дерева
   * @param key - ключ элемента
   * @param types - типы, которым нода должны соответствовать (по умолчанию 'child')
   * @param excludedKeys - ключи, которые должны быть пропущены при поиске
   * @param includeTrigger - учитывать ли триггеры при поиске
   */
	public getNextSelectableExtendedNode(key: TreeItemKey, types?: TreeItemType[], excludedKeys: TreeItemKey[] = [], includeTrigger = true): TreeNode<SelectableTreeItemPayload<I> | null> | null {
		const nextExtendedNode = super.getNextExtendedNode(key, types, excludedKeys, includeTrigger)

		if (!nextExtendedNode) return null
		if (nextExtendedNode.key && this.selectableKeys.has(nextExtendedNode.key)) return nextExtendedNode

		return this.getNextSelectableExtendedNode(nextExtendedNode.key, types, excludedKeys, includeTrigger)
	}

	/**
   * Метод получения предыдущего выбираемого (доступного для выбора) элемента дерева
   * @param key - ключ элемента
   * @param types - типы, которым нода должны соответствовать (по умолчанию 'child')
   * @param excludedKeys - ключи, которые должны быть пропущены при поиске
   * @param includeTrigger - учитывать ли триггеры при поиске
   */
	public getPrevSelectableExtendedNode(key: TreeItemKey, types?: TreeItemType[], excludedKeys: TreeItemKey[] = [], includeTrigger: boolean = true): TreeNode<SelectableTreeItemPayload<I> | null> | null {
		const prevExtendedNode = super.getPrevExtendedNode(key, types, excludedKeys, includeTrigger)

		if (!prevExtendedNode) return null
		if (prevExtendedNode.key && this.selectableKeys.has(prevExtendedNode.key)) return prevExtendedNode

		return this.getPrevSelectableExtendedNode(prevExtendedNode.key, types, excludedKeys, includeTrigger)
	}

	/**
   * Метод получения первого выбираемого (доступного для выбора) элемента дерева
   * @param types - типы, которым нода должны соответствовать (по умолчанию 'child')
   * @param excludedKeys - ключи, которые должны быть пропущены при поиске
   * @param includeTrigger - учитывать ли триггеры при поиске
   */
	public getFirstSelectableExtendedNode(types?: TreeItemType[], excludedKeys: TreeItemKey[] = [], includeTrigger: boolean = true): TreeNode<SelectableTreeItemPayload<I> | null> | null {
		return this.getNextSelectableExtendedNode('root', types, excludedKeys, includeTrigger)
	}

	/**
   * Метод получения последнего выбираемого (доступного для выбора) элемента дерева
   * @param types - типы, которым нода должны соответствовать (по умолчанию 'child')
   * @param excludedKeys - ключи, которые должны быть пропущены при поиске
   * @param includeTrigger - учитывать ли триггеры при поиске
   */
	public getLastSelectableExtendedNode(types?: TreeItemType[], excludedKeys: TreeItemKey[] = [], includeTrigger: boolean = true): TreeNode<SelectableTreeItemPayload<I> | null> | null {
		const lastNode = this.getLastExtendedNode(types, excludedKeys, includeTrigger)

		if (!lastNode) return null
		if (lastNode.payload && !this.selectableKeys.has(lastNode.key)) return this.getPrevSelectableExtendedNode(lastNode.key, types, excludedKeys, includeTrigger)

		return lastNode
	}
}
