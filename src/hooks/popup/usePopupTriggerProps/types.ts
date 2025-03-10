import type { HTMLAttributes } from 'react'

export interface UsePopupTriggerPropsOptions<T extends HTMLElement> {
	/** Тип popup */
	type: HTMLAttributes<T>['aria-haspopup']
	/** Признак, определяющий, открыт ли popup */
	isOpen: boolean
	/** id popup */
	popupId?: string
}

export interface PopupTriggerProps<T extends HTMLElement> {
	/** Тип popup */
	'aria-haspopup': HTMLAttributes<T>['aria-haspopup']
	/** Свойство, определяющее, открыт ли popup */
	'aria-expanded': HTMLAttributes<T>['aria-expanded']
	/** Свойство, указывающее на элемент с помощью id, который управляет видимостью popup trigger */
	'aria-controls': HTMLAttributes<T>['aria-controls']
}

export interface UsePopupTriggerProps<T extends HTMLElement> {
	/** Свойства, необходимые для доступности trigger popup */
	triggerProps: PopupTriggerProps<T>
}
