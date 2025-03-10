import { GroupProps, UseGroupPropsOptions } from '../../../group/useGroupProps/types'
import { LabelsProps, UseLabelsPropsOptions } from '../../../labels'

export interface UseMenuItemRadioGroupPropsOptions extends UseGroupPropsOptions, UseLabelsPropsOptions {
  /** Признак, использовать ли семантическую роль. В случае, если используется семантический тег (например `<menu>` или `<article>`, лучше передать `false`) */
  withSemanticRole?: boolean
}

export type MenuItemRadioGroupProps<T extends HTMLElement> = LabelsProps<T> & GroupProps<T>

export interface UseMenuItemRadioGroupProps<T extends HTMLElement> {
	/** Свойства, необходимые для доступности menu */
	menuItemRadioGroupProps: MenuItemRadioGroupProps<T>
}
