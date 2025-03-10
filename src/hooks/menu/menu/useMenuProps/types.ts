import { UseLabelsPropsOptions } from '../../../labels'
import { Orientation } from '../../../../types'

export interface UseMenuPropsOptions extends UseLabelsPropsOptions {
  /** Признак, использовать ли семантическую роль. */
  withSemanticRole?: boolean
  /** Признак, открыто ли меню. */
  isOpen?: boolean
  /** Свойство, определяющее направление меню. По умолчанию - 'vertical' */
  orientation?: Orientation
  /** Свойство, обозначающее активный элемент в списке */
  active: string | undefined
}

export interface MenuProps {
	/** Роль menu */
	role?: 'menu'
  /** Свойство, означающее, должен ли элемент участвовать в последовательности с помощью клавиатуры и в каком порядке */
  tabIndex?: -1 | 0
}

export interface UseMenuProps {
	/** Свойства, необходимые для доступности menu */
	menuProps: MenuProps
}
