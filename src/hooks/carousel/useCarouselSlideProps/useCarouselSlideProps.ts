import { useMemo } from 'react'
import { type CarouselSlideProps, UseCarouselSlideProps, UseCarouselSlidePropsOptions } from './types'
import { useLabelsProps } from '../../labels'
import { useDescriptionProps } from '../../description'

export const useCarouselSlideProps = <T extends HTMLElement>({ label, labelledBy, description, describedBy }: UseCarouselSlidePropsOptions): UseCarouselSlideProps<T> => {
	const { labelProps } = useLabelsProps({ label, labelledBy })
	const { descriptionProps } = useDescriptionProps({ description, describedBy })

	const carouselSlideProps: CarouselSlideProps<T> = useMemo(
		() =>
			({
				'aria-roledescription': 'Слайд',
				...labelProps,
				...descriptionProps,
			}),
		[labelProps, descriptionProps]
	)

	return { carouselSlideProps }
}
