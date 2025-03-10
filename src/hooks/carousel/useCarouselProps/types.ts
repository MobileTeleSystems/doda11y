import { GroupProps, UseGroupPropsOptions } from '../../group'
import { HTMLAttributes } from 'react'

export type UseCarouselPropsOptions = UseGroupPropsOptions

export interface CarouselProps<T extends HTMLElement> extends GroupProps<T> {
    /** Свойство, описывающее роль элемента. В отличие от role, позволяет задавать собственные роли */
    'aria-roledescription': HTMLAttributes<T>['aria-roledescription']
}

export interface UseCarouselProps<T extends HTMLElement> {
	/** Свойства, необходимые для доступности carousel */
	carouselProps: CarouselProps<T>
}
