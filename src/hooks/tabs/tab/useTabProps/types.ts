import { LabelsProps, UseLabelsPropsOptions } from '../../../labels'

export interface UseTabPropsOptions extends UseLabelsPropsOptions {
  /** Признак, использовать ли семантическую роль. В случае, если используется семантический тег (например `<button>` или `<article>`, лучше передать `false`) */
  withSemanticRole?: boolean
  /** Свойство, указывающее на то, каким элементом управляет данный компонент */
  controls: string
  /** Признак, выбран ли элемент в данный момент */
  selected?: boolean
  /** Свойство, обозначающее тип popup, если они есть у элемента tab (`true` или `menu`) */
  popupType?: true | 'menu'
  /** Признак, находится ли активный фокус на данном элементе. */
  focusable?: boolean
}

export interface TabProps<T extends HTMLElement> extends LabelsProps<T> {
	/** Роль Tab */
	role?: 'tab'
  /** Свойство, означающее, должен ли элемент участвовать в последовательности с помощью клавиатуры и в каком порядке */
  tabIndex?: -1 | 0
  /** Свойство, указывающее на элемент с помощью id, который управляется данным элементом */
  'aria-controls': string
  /** Свойство aria, определяющее, выбран ли элемент. Используется, если для выбора доступен только один элемент */
  'aria-selected'?: boolean
  /** Свойство aria, определяющее есть у элемента связанный попап */
  'aria-haspopup'?: true | 'menu'
}


export interface UseTabProps<T extends HTMLElement> {
	/** Свойства, необходимые для доступности Tab */
	tabProps: TabProps<T>
}
