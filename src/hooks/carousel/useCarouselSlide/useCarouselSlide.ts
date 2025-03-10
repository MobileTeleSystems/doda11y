import { useMemo } from 'react'
import {
	UseCarouselSlide,
	UseCarouselSlideOptions,
	UseCarouselSlideUnionCarouselProps,
} from './types'
import { useCarouselSlideProps } from '../useCarouselSlideProps'

export const useCarouselSlide = <T extends HTMLElement>({ labelledBy, label, description, describedBy }: UseCarouselSlideOptions): UseCarouselSlide<T> => {
	const { carouselSlideProps } =  useCarouselSlideProps({ labelledBy, label, description, describedBy })

	const unionCarouselSlideProps: UseCarouselSlideUnionCarouselProps<T> = useMemo(
		() =>
			({
				...carouselSlideProps,
			}),
		[carouselSlideProps]
	)

	return { carouselSlideProps: unionCarouselSlideProps }
}
