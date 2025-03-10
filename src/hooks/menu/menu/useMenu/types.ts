import { UseMenuControl, UseMenuControlOptions } from '../useMenuControl'
import { UseMenuProps, UseMenuPropsOptions } from '../useMenuProps'
import { TreeItem } from '../../../../lib'

export type UseMenuOptions<I extends TreeItem = TreeItem> = UseMenuControlOptions<I> & UseMenuPropsOptions

export type UseMenuUnionProps = UseMenuControl & UseMenuProps['menuProps']

export interface UseMenu {
	/** Свойства, необходимые для доступности button */
	menuProps: UseMenuUnionProps
}
