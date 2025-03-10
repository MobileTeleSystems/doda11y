import type { HTMLAttributes } from 'react'
import { LabelsProps, UseLabelsPropsOptions } from '../../labels'
import { DescriptionProps, UseDescriptionPropsOptions } from '../../description'

export interface UseRadioPropsOptions<T extends HTMLElement> extends UseLabelsPropsOptions, UseDescriptionPropsOptions {
	/** Свойство, определяющее тип popup */
	popupType?: HTMLAttributes<T>['aria-haspopup']
	/** Признак, определяющий, выбрана ли радио-кнопка */
	checked: boolean
	/** Признак, определяющий, заблокирована ли в данный момент кнопка для выбора */
  disabled?: boolean
  /** Свойство aria, определяющее позицию элемента в коллекции */
  posInSet?: number
  /** Свойство aria, определяющее количество элементов в коллекции */
  setSize?: number
  /** Признак, использовать ли семантическую роль. В случае, если используется семантический тег (например `<button>` или `<article>`, лучше передать `false`) */
  withSemanticRole?: boolean
}

export interface RadioProps<T extends HTMLElement> extends LabelsProps<T>, DescriptionProps<T> {
  /** Роль radio */
  role?: 'radio',
  /** Свойство aria, означающее, должен ли элемент участвовать в последовательности с помощью клавиатуры и в каком порядке */
  tabIndex: 0,
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

export interface UseRadioProps<T extends HTMLElement> {
	/** Свойства, необходимые для доступности */
	radioProps: RadioProps<T>
}
