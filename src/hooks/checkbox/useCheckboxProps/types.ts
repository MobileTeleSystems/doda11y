import type { HTMLAttributes } from 'react'
import { LabelsProps, UseLabelsPropsOptions } from '../../labels'
import { DescriptionProps, UseDescriptionPropsOptions } from '../../description'

export interface UseCheckboxPropsOptions extends UseLabelsPropsOptions, UseDescriptionPropsOptions {
	/** Признак, определяющий, выбрана ли радио-кнопка */
	checked: boolean | 'mixed'
	/** Признак, определяющий, заблокирована ли в данный момент кнопка для выбора */
  disabled?: boolean
  /** Свойство, определяющее позицию элемента в коллекции */
  posInSet?: number
  /** Свойство, определяющее количество элементов в коллекции */
  setSize?: number
  /** Признак, использовать ли семантическую роль. В случае, если используется семантический тег (например `<button>` или `<article>`, лучше передать `false`) */
  withSemanticRole?: boolean
}

export interface CheckboxProps<T extends HTMLElement> extends LabelsProps<T>, DescriptionProps<T> {
  /** Роль checkbox */
  role?: 'checkbox',
  /** Свойство, означающее, должен ли элемент участвовать в последовательности с помощью клавиатуры и в каком порядке */
  tabIndex: 0,
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

export interface UseCheckboxProps<T extends HTMLElement> {
	/** Свойства, необходимые для доступности */
	checkboxProps: CheckboxProps<T>
}
