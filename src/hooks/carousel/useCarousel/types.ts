import type { UseCarouselProps, UseCarouselPropsOptions } from '../useCarouselProps'

export type UseCarouselOptions = UseCarouselPropsOptions

export type UseCarouselUnionProps<T extends HTMLElement> = UseCarouselProps<T>['carouselProps']

export interface UseCarousel<T extends HTMLElement> {
	/** Свойства, необходимые для доступности Carousel */
	carouselProps: UseCarouselUnionProps<T>
}
