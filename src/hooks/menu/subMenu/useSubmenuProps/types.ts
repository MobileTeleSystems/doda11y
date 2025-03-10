import { HTMLAttributes } from 'react'

export interface UseSubmenuPropsOptions {
  /** Размер коллекции, частью которой является элемент */
  setSize?: number
  /** Свойство, обозначающее уровень вложенности элемента */
  level?: number
  /** Позиция элемента в коллекции */
  posInSet?: number
  /** Признак, использовать ли семантическую роль. В случае, если используется семантический тег (например `<button>` или `<article>`, лучше передать `false`) */
  withSemanticRole?: boolean
  /** Признак, выбран ли элемент в данный момент. В отличие от isChecked используется при одиночном выборе */
  selected?: boolean
  /** Признак, выбран ли элемент в данный момент. В отличие от isSelected используется при множественном выборе */
  checked?: boolean
  /** Признак, раскрыто ли поддерево */
  expanded: boolean
}

export interface SubmenuProps<T extends HTMLElement> {
	/** Роль menu */
	role?: 'menu'
  /** Свойство, означающее, должен ли элемент участвовать в последовательности с помощью клавиатуры и в каком порядке */
  tabIndex: -1,
  /** Свойство aria, определяющее, выбран ли элемент. Используется, если для выбора доступен только один элемент */
  'aria-selected': HTMLAttributes<T>['aria-selected']
  /** Свойство aria, определяющее, выбран ли элемент. Используется, если для выбора доступно несколько элементов */
  'aria-checked': HTMLAttributes<T>['aria-checked']
  /** Свойство aria, определяющее позицию элемента в коллекции */
  'aria-posinset': HTMLAttributes<T>['aria-posinset']
  /** Свойство aria, определяющее количество элементов в коллекции */
  'aria-setsize': HTMLAttributes<T>['aria-setsize']
  /** Свойство aria, определяющее вложенность элемента */
  'aria-level': HTMLAttributes<T>['aria-level']
  /** Свойство aria, определяющее раскрыт ли элемент */
  'aria-expanded': HTMLAttributes<T>['aria-expanded']
}

export interface UseSubmenuProps<T extends HTMLElement> {
	/** Свойства, необходимые для доступности tree */
	submenuProps: SubmenuProps<T>
}
