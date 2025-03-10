import { useImageProps } from '../useImageProps'
import { type UseImage, type UseImageOptions } from './types'

export const useImage = <T extends HTMLElement>({ label, labelledBy }: UseImageOptions): UseImage<T> => {
	const { imageProps  } = useImageProps({ label, labelledBy })

	return { imageProps }
}
