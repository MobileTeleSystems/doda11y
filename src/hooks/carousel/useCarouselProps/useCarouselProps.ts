import { useMemo } from 'react'
import { type CarouselProps, UseCarouselProps, UseCarouselPropsOptions } from './types'
import { useGroup } from '../../group'

export const useCarouselProps = <T extends HTMLElement>(options?: UseCarouselPropsOptions): UseCarouselProps<T> => {
	const { label, labelledBy } = options ?? {}

	const { groupProps } = useGroup({ label, labelledBy })

	const carouselProps: CarouselProps<T> = useMemo(
		() =>
			({
				'aria-roledescription': 'Карусель',
				...groupProps,
			}),
		[groupProps]
	)

	return { carouselProps }
}
