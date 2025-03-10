export interface UseVisibility {
	/** Признак, определяющий, открыт ли popup */
	isOpen: boolean
	/** Метод, закрывающий popup */
	close(): void
	/** Метод, открывающий popup */
	open(): void
	/** Метод-тоггл для popup */
	toggle(): void
}
