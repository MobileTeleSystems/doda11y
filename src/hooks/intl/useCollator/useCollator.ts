import { useRef } from 'react'
import { type CollatorLocale, type CollatorOptions, type UseCollator } from './types'

export const useCollator = (locale?: CollatorLocale, options?: CollatorOptions): UseCollator => {
	const collator = useRef(new Intl.Collator(locale, options))
 
	return { collator: collator.current }
}
