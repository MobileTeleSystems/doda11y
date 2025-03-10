import { UseSubTreeProps, UseSubTreePropsOptions, } from '../useSubTreeProps'

export type UseSubTreeOptions = UseSubTreePropsOptions

export type UseSubTreeUnionProps<T extends HTMLElement> = UseSubTreeProps<T>['subTreeProps']

export interface UseSubTree<T extends HTMLElement> {
	/** Свойства, необходимые для доступности tree элемента */
	subTreeProps: UseSubTreeUnionProps<T>
}
