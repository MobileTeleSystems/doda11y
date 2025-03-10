import { UseTreeControlOptions } from '../useTreeControl'
import { UseTreeProps, UseTreePropsOptions } from '../useTreeProps'
import { TreeItem } from '../../../../lib'

export type UseTreeOptions<I extends TreeItem> = UseTreeControlOptions<I> & UseTreePropsOptions

export type UseTreeUnionProps<T extends HTMLElement> = UseTreeProps<T>['treeProps']

export interface UseTree<T extends HTMLElement> {
	/** Свойства, необходимые для доступности tree элемента */
	treeProps: UseTreeUnionProps<T>
}
