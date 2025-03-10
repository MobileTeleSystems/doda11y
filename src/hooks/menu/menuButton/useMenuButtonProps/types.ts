import type { Popup } from '../../../../types'
import { PopupTriggerProps } from '../../../popup'
import { LabelsProps, UseLabelsPropsOptions } from '../../../labels'

export interface UseMenuButtonPropsOptions extends UseLabelsPropsOptions {
	/** Признак, открыто ли меню */
  isOpen: boolean
	/** Свойство, обозначающее тип popup (`listbox` или `menu`) */
  popupType?: Extract<Popup, 'listbox' | 'menu'>
	/** Свойство, обозначающее id элемента меню */
  menuId?: string
  /** Признак, использовать ли семантическую роль. В случае, если используется семантический тег (например `<button>` или `<article>`, лучше передать `false`) */
  withSemanticRole?: boolean
}

export interface MenuButtonProps<T extends HTMLElement> extends PopupTriggerProps<T>, LabelsProps<T> {
	/** Роль button */
	role?: 'button'
}

export interface UseMenuButtonProps<T extends HTMLElement> {
	/** Свойства, необходимые для доступности button */
	buttonProps: MenuButtonProps<T>
}
