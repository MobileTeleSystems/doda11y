import { UseTreeItemProps, UseTreeItemPropsOptions } from '../useTreeItemProps'

export type UseTreeItemOptions = UseTreeItemPropsOptions

export type UseTreeItemUnionProps<T extends HTMLElement> = UseTreeItemProps<T>['treeItemProps']

export interface UseTreeItem<T extends HTMLElement> {
	/** Свойства, необходимые для доступности tree элемента */
	treeItemProps: UseTreeItemUnionProps<T>
}
