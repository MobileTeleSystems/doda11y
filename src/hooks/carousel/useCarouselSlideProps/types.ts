import { UseDescriptionPropsOptions } from '../../description'
import { UseLabelsPropsOptions } from '../../labels'
import { HTMLAttributes } from 'react'

export type UseCarouselSlidePropsOptions = UseDescriptionPropsOptions & UseLabelsPropsOptions

export interface CarouselSlideProps<T extends HTMLElement> {
	/** Свойство, описывающее роль элемента. В отличие от role, позволяет задавать собственные роли */
	'aria-roledescription'?: HTMLAttributes<T>['aria-roledescription']
}

export interface UseCarouselSlideProps<T extends HTMLElement> {
	/** Свойства, необходимые для доступности carousel */
	carouselSlideProps: CarouselSlideProps<T>
}
