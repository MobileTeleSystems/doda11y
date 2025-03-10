import { useMemo } from 'react'
import { useSubTreeProps } from '../useSubTreeProps'
import {
	UseSubTree, UseSubTreeOptions, UseSubTreeUnionProps,
} from './types'

export const useSubTree = <T extends HTMLElement>({ withSemanticRole, selected, setSize, level, posInSet, checked, expanded }: UseSubTreeOptions): UseSubTree<T> => {
	const { subTreeProps } = useSubTreeProps({ withSemanticRole, selected, setSize, level, posInSet, checked, expanded })

	const unionSubTreeProps: UseSubTreeUnionProps<T> = useMemo(() => ({
		...subTreeProps,
	}), [subTreeProps])

	return { subTreeProps: unionSubTreeProps }
}
