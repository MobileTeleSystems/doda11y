import type { HTMLAttributes } from 'react'

export interface UseBreadcrumbsItemPropsOptions {
	/** Указывает ли элемент breadcrumbs на текущую страницу */
  isCurrent: boolean
}

export interface BreadcrumbsItemProps<T extends HTMLElement> {
	/** Свойство, означающее, что пользователь находится на определенной странице из группы  */
	'aria-current'?: Extract<HTMLAttributes<T>['aria-current'], 'page'>
}

export interface UseBreadcrumbsItemProps<T extends HTMLElement> {
	/** Свойства, необходимые для доступности item в составе компонента breadcrumbs */
	itemProps: BreadcrumbsItemProps<T>
}
