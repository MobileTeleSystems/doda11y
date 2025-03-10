import { HTMLAttributes } from 'react'
import { UseCheckboxPropsOptions } from '../../../checkbox'

export interface UseMenuItemCheckboxPropsOptions extends UseCheckboxPropsOptions {
  /** Признак, использовать ли семантическую роль. В случае, если используется семантический тег (например `<menu>` или `<article>`, лучше передать `false`) */
  withSemanticRole?: boolean
  /** Признак, находится ли активный фокус на данном элементе. */
  focusable?: boolean
  /** Свойство, обозначающее уровень вложенности элемента */
  level?: number
}

export interface MenuItemCheckboxProps<T extends HTMLElement> {
	/** Роль menuitemcheckbox */
	role?: 'menuitemcheckbox'
  /** Свойство, означающее, должен ли элемент участвовать в последовательности с помощью клавиатуры и в каком порядке */
  tabIndex: 0 | -1
  /** Свойство aria, определяющее вложенность элемента */
  'aria-level'?: HTMLAttributes<T>['aria-level']
  /** Свойство aria, обозначающее тип popup */
  'aria-haspopup'?: HTMLAttributes<T>['aria-haspopup']
  /** Свойство aria, обозначающее, выбран ли элемент */
  'aria-checked': HTMLAttributes<T>['aria-checked']
  /** Свойство aria, обозначающее, заблокирована ли в данный момент кнопка для выбора */
  'aria-disabled': HTMLAttributes<T>['aria-disabled']
  /** Свойство aria, обозначающее позицию элемента в коллекции */
  'aria-posinset': HTMLAttributes<T>['aria-posinset']
  /** Свойство aria, обозначающее количество элементов в коллекции */
  'aria-setsize': HTMLAttributes<T>['aria-setsize']
}

export interface UseMenuItemCheckboxProps<T extends HTMLElement> {
	/** Свойства, необходимые для доступности menu */
	menuItemCheckboxProps: MenuItemCheckboxProps<T>
}
