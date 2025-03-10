export interface UseActiveDescendantOptions {
	/** Признак, означающий, должен ли меняться фокус на активный элемент */
  isFocusOnActive?: boolean
  /** Свойство, обозначающее дефолтный ключ при инициализации */
  defaultActive?: string
}

export interface UseActiveDescendant {
	/** Свойство, обозначающее активный элемент */
	activeDescendant: string | undefined
	/** Метод, изменяющий активный элемент */
	setActiveDescendantId: (id: string | undefined) => void
}
