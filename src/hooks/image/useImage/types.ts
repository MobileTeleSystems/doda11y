import type { UseLabelsOptions } from '../../labels'
import type { UseImageProps } from '../useImageProps'

export type UseImageOptions = UseLabelsOptions

export type UseImageUnionImageProps<T extends HTMLElement> = UseImageProps<T>['imageProps']

export interface UseImage<T extends HTMLElement> {
	/** Свойства, необходимые для доступности image */
	imageProps: UseImageUnionImageProps<T>
}
