import { UseMenubarControl, UseMenubarControlOptions } from '../useMenubarControl'
import { UseMenubarProps, UseMenubarPropsOptions } from '../useMenubarProps'
import { TreeItem } from '../../../../lib'

export type UseMenubarOptions<I extends TreeItem = TreeItem> = UseMenubarControlOptions<I> & UseMenubarPropsOptions

export type UseMenubarUnionProps = UseMenubarControl & UseMenubarProps['menubarProps']

export interface UseMenubar {
	/** Свойства, необходимые для доступности menubar */
	menubarProps: UseMenubarUnionProps
}
