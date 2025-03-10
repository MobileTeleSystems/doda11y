import type { HTMLAttributes } from 'react'
import { LabelsProps, UseLabelsPropsOptions } from '../../labels'
import { DescriptionProps, UseDescriptionPropsOptions } from '../../description'

export interface UseSwitchPropsOptions extends UseLabelsPropsOptions, UseDescriptionPropsOptions {
	/** Признак, определяющий, выбран switch. В случае реализации через input передавать признак в данное свойство не рекомендуется, так как в input уже есть свойство checked */
	checked?: boolean
	/** Признак, определяющий, заблокирована ли в данный момент кнопка для выбора. В случае реализации через input передавать признак в данное свойство не рекомендуется, так как в input уже есть свойство disabled */
  disabled?: boolean
  /** Признак, использовать ли семантическую роль. В случае, если используется семантический тег (например `<button>` или `<article>`, лучше передать `false`) */
  withSemanticRole?: boolean
}

export interface SwitchProps<T extends HTMLElement> extends LabelsProps<T>, DescriptionProps<T> {
  /** Роль checkbox */
  role?: 'switch',
  /** Свойство, означающее, должен ли элемент участвовать в последовательности с помощью клавиатуры и в каком порядке */
  tabIndex: 0,
	/** Свойство aria, обозначающее, выбран ли элемент */
	'aria-checked': HTMLAttributes<T>['aria-checked']
  /** Свойство aria, обозначающее, заблокирована ли в данный момент кнопка для выбора */
  'aria-disabled': HTMLAttributes<T>['aria-disabled']
}

export interface UseSwitchProps<T extends HTMLElement> {
	/** Свойства, необходимые для доступности */
	switchProps: SwitchProps<T>
}
