import { useMemo } from 'react'
import { useSubmenuProps } from '../useSubmenuProps'
import {
	UseSubmenu, UseSubmenuOptions, UseSubmenuUnionProps,
} from './types'

export const useSubmenu = <T extends HTMLElement>({ withSemanticRole, selected, setSize, level, posInSet, checked, expanded }: UseSubmenuOptions): UseSubmenu<T> => {
	const { submenuProps } = useSubmenuProps({ withSemanticRole, selected, setSize, level, posInSet, checked, expanded })

	const unionSubmenuProps: UseSubmenuUnionProps<T> = useMemo(() => ({
		...submenuProps,
	}), [submenuProps])

	return { submenuProps: unionSubmenuProps }
}
