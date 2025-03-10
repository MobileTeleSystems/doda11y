import type { UseCarouselSlideProps, UseCarouselSlidePropsOptions } from '../useCarouselSlideProps'

export type UseCarouselSlideOptions = UseCarouselSlidePropsOptions

export type UseCarouselSlideUnionCarouselProps<T extends HTMLElement> = UseCarouselSlideProps<T>['carouselSlideProps']

export interface UseCarouselSlide<T extends HTMLElement> {
	/** Свойства, необходимые для доступности Carousel */
	carouselSlideProps: UseCarouselSlideUnionCarouselProps<T>
}
