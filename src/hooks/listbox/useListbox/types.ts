import type { UseListboxControl, UseListboxControlOptions } from '../useListboxControl'
import type { UseListboxProps, UseListboxPropsOptions } from '../useListboxProps'
import { ListItem } from '../../../lib'

export type UseListboxOptions<I extends ListItem = ListItem> = Omit<UseListboxPropsOptions, 'multiSelectable'> & UseListboxControlOptions<I>

export type UseListboxUnionListboxProps = UseListboxProps['listboxProps'] & UseListboxControl

export interface UseListbox {
	/** Свойства, необходимые для доступности listbox */
	listboxProps: UseListboxUnionListboxProps
}
