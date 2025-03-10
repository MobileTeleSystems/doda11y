import { HTMLAttributes } from 'react'
import { UseLabelsPropsOptions } from '../../../labels'
import { UseDescriptionPropsOptions } from '../../../description'

export interface UseMenuItemRadioPropsOptions extends UseLabelsPropsOptions, UseDescriptionPropsOptions {
  /** Признак, определяющий, выбрана ли радио-кнопка */
  checked: boolean
  /** Признак, определяющий, заблокирована ли в данный момент кнопка для выбора */
  disabled?: boolean
  /** Свойство aria, определяющее позицию элемента в коллекции */
  posInSet?: number
  /** Свойство aria, определяющее количество элементов в коллекции */
  setSize?: number
  /** Признак, использовать ли семантическую роль. В случае, если используется семантический тег (например `<menu>` или `<article>`, лучше передать `false`) */
  withSemanticRole?: boolean
  /** Признак, находится ли активный фокус на данном элементе. */
  focusable?: boolean
  /** Свойство, обозначающее уровень вложенности элемента */
  level?: number
}

export interface MenuItemRadioProps<T extends HTMLElement> {
	/** Роль menuitemradio */
	role?: 'menuitemradio'
  /** Свойство, означающее, должен ли элемент участвовать в последовательности с помощью клавиатуры и в каком порядке */
  tabIndex: 0 | -1
  /** Свойство aria, определяющее вложенность элемента */
  'aria-level'?: HTMLAttributes<T>['aria-level']
  /** Свойство aria, обозначающее тип popup */
  'aria-haspopup'?: HTMLAttributes<T>['aria-haspopup']
  /** Свойство aria, определяющее, выбрана ли радио-кнопка */
  'aria-checked': HTMLAttributes<T>['aria-checked']
  /** Свойство aria, определяющее, заблокирована ли в данный момент кнопка для выбора */
  'aria-disabled': HTMLAttributes<T>['aria-disabled']
  /** Свойство aria, определяющее позицию элемента в коллекции */
  'aria-posinset': HTMLAttributes<T>['aria-posinset']
  /** Свойство aria, определяющее количество элементов в коллекции */
  'aria-setsize': HTMLAttributes<T>['aria-setsize']
}

export interface UseMenuItemRadioProps<T extends HTMLElement> {
	/** Свойства, необходимые для доступности menu */
	menuItemRadioProps: MenuItemRadioProps<T>
}
