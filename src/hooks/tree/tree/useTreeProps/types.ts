import { HTMLAttributes } from 'react'
import { LabelsProps, UseLabelsPropsOptions } from '../../../labels'
import { Orientation } from '../../../../types'

export interface UseTreePropsOptions extends UseLabelsPropsOptions {
	/** Признак, определяющий, доступен ли множественный выбор. По умолчанию - `false` */
  multiSelectable?: boolean
  /** Признак, использовать ли семантическую роль. В случае, если используется семантический тег (например `<button>` или `<article>`, лучше передать `false`) */
  withSemanticRole?: boolean
  /** Свойство, обозначающее ориентацию дочерних элементов. По умолчанию - `vertical` */
  orientation?: Orientation
  /** Свойство, обозначающее активный элемент */
  active: string | undefined
}

export interface TreeProps<T extends HTMLElement> extends LabelsProps<T> {
	/** Роль tree */
	role?: 'tree'
  /** Признак, определяющий, доступен ли множественный выбор для дерева. По умолчанию - `false` */
  'aria-multiselectable'?: HTMLAttributes<T>['aria-multiselectable']
  /** Свойство, определяющее ориентацию элемента. По умолчанию - `vertical` */
  'aria-orientation'?: HTMLAttributes<T>['aria-orientation']
  /** Свойство, означающее, должен ли элемент участвовать в последовательности с помощью клавиатуры и в каком порядке */
  tabIndex?: -1 | 0
}

export interface UseTreeProps<T extends HTMLElement> {
	/** Свойства, необходимые для доступности */
	treeProps: TreeProps<T>
}
