import type { HTMLAttributes } from 'react'

export interface UseOptionPropsOptions {
	/** Размер коллекции, частью которой является элемент option */
  setSize?: number
	/** Позиция элемента в коллекции */
  posInSet?: number
  /** Признак, использовать ли семантическую роль. В случае, если используется семантический тег (например `<button>` или `<article>`, лучше передать `false`) */
  withSemanticRole?: boolean
  /** Признак, выбран ли элемент в данный момент. В отличие от isChecked используется при одиночном выборе */
  selected?: boolean
  /** Признак, выбран ли элемент в данный момент. В отличие от isSelected используется при множественном выборе */
  checked?: boolean
  /** Признак, находится ли активный фокус на данном элементе. */
  focusable?: boolean
}

export interface OptionProps<T extends HTMLElement> {
	/** Роль option */
	role?: 'option',
	/** Свойство aria, определяющее, выбран ли элемент. Используется, если для выбора доступен только один элемент */
	'aria-selected': HTMLAttributes<T>['aria-selected']
	/** Свойство aria, определяющее, выбран ли элемент. Используется, если для выбора доступно несколько элементов */
	'aria-checked': HTMLAttributes<T>['aria-checked']
	/** Свойство aria, определяющее позицию элемента в коллекции */
	'aria-posinset': HTMLAttributes<T>['aria-posinset']
	/** Свойство aria, определяющее количество элементов в коллекции */
	'aria-setsize': HTMLAttributes<T>['aria-setsize']
}

export interface UseOptionProps<T extends HTMLElement> {
	/** Свойства, необходимые для доступности option */
	optionProps: OptionProps<T>
}
