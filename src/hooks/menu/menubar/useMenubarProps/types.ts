import { UseLabelsPropsOptions } from '../../../labels'
import { Orientation } from '../../../../types'

export interface UseMenubarPropsOptions extends UseLabelsPropsOptions {
  /** Признак, использовать ли семантическую роль. */
  withSemanticRole?: boolean
  /** Свойство, определяющее направление меню. По умолчанию - 'vertical' */
  orientation?: Orientation
  /** Свойство, обозначающее активный элемент в списке */
  active?: string
}

export interface MenubarProps {
	/** Роль menubar */
	role?: 'menubar'
  /** Свойство, означающее, должен ли элемент участвовать в последовательности с помощью клавиатуры и в каком порядке */
  tabIndex?: -1 | 0
}

export interface UseMenubarProps {
	/** Свойства, необходимые для доступности menu */
	menubarProps: MenubarProps
}
