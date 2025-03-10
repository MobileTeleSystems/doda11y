import { UseLabelsPropsOptions } from '../../../labels'
import { HTMLAttributes } from 'react'

export interface UseMenuItemPropsOptions extends UseLabelsPropsOptions {
  /** Признак, использовать ли семантическую роль. В случае, если используется семантический тег (например `<menu>` или `<article>`, лучше передать `false`) */
  withSemanticRole?: boolean
  /** Размер коллекции, частью которой является элемент option */
  setSize?: number
  /** Свойство, обозначающее уровень вложенности элемента */
  level?: number
  /** Позиция элемента в коллекции */
  posInSet?: number
  /** Признак, выбран ли элемент в данный момент. */
  checked?: boolean
  /** Признак, находится ли активный фокус на данном элементе. */
  focusable?: boolean
  /** Признак, имеет ли подменю данный пункт меню (для триггеров) */
  popup?: true | 'menu'
  /** Признак, раскрыто ли подменю (для триггеров) */
  expanded?: boolean
}

export interface MenuItemProps<T extends HTMLElement> {
	/** Роль menuitem */
	role?: 'menuitem'
  /** Свойство, означающее, должен ли элемент участвовать в последовательности с помощью клавиатуры и в каком порядке */
  tabIndex: -1 | 0,
  /** Свойство aria, определяющее позицию элемента в коллекции */
  'aria-posinset': HTMLAttributes<T>['aria-posinset']
  /** Свойство aria, определяющее количество элементов в коллекции */
  'aria-setsize': HTMLAttributes<T>['aria-setsize']
  /** Свойство aria, определяющее вложенность элемента */
  'aria-level': HTMLAttributes<T>['aria-level']
  /** Свойство aria, определяющее раскрыт ли подпункт */
  'aria-expanded'?: HTMLAttributes<T>['aria-expanded']
  /** Свойство aria, определяющее есть у элемента связанный попап */
  'aria-haspopup'?: HTMLAttributes<T>['aria-haspopup']
}

export interface UseMenuItemProps<T extends HTMLElement> {
	/** Свойства, необходимые для доступности menu */
	menuItemProps: MenuItemProps<T>
}
