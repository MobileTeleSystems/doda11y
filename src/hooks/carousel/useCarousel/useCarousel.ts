import { useMemo } from 'react'
import { useCarouselProps } from '../useCarouselProps'
import { UseCarousel, UseCarouselOptions, UseCarouselUnionProps } from './types'

export const useCarousel = <T extends HTMLElement>({ labelledBy, label }: UseCarouselOptions): UseCarousel<T> => {
	const { carouselProps } =  useCarouselProps({ labelledBy, label })

	const unionCarouselProps: UseCarouselUnionProps<T> = useMemo(
		() => carouselProps,
		[carouselProps]
	)

	return { carouselProps: unionCarouselProps }
}
