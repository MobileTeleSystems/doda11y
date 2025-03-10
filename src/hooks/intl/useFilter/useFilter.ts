import { useCallback } from 'react'
import { type CollatorLocale, type CollatorOptions, useCollator } from '../useCollator'
import type { UseFilter } from './types'

export const useFilter = (locale?: CollatorLocale, options?: CollatorOptions): UseFilter => {
	const { collator } = useCollator(locale, options)
 
	const equal = useCallback(
		(x: string, y: string) => {
			if (x.length === 0 && y.length === 0) return true

			if (x.length !== y.length) return false

			const xNFC = x.normalize('NFC')
			const yNFC = y.normalize('NFC')

			return collator.compare(xNFC, yNFC) === 0
		},
		[collator]
	)

	const contains = useCallback(
		(string: string, substring: string) => {
			const stringNFC = string.normalize('NFC')
			const substringNFC = substring.normalize('NFC')

			for (let i = 0; i < stringNFC.length; i++) {
				const comparedValue = stringNFC.substring(i, i + substringNFC.length)

				if (collator.compare(comparedValue, substringNFC) === 0) return true
			}

			return false
		},
		[collator]
	)

	const startsWith = useCallback(
		(string: string, substring: string) => {
			if (string.at(0) !== substring.at(0)) return false

			const stringNFC = string.normalize('NFC')
			const substringNFC = substring.normalize('NFC')

			return collator.compare(stringNFC.substring(0, substringNFC.length), substringNFC) === 0
		},
		[collator]
	)

	const endsWith = useCallback(
		(string: string, substring: string) => {
			if (string.at(-1) !== substring.at(-1)) return false

			const stringNFC = string.normalize('NFC')
			const substringNFC = substring.normalize('NFC')

			return collator.compare(stringNFC.substring(stringNFC.length - substringNFC.length, stringNFC.length), substringNFC) === 0
		},
		[collator]
	)

	return { contains, startsWith, endsWith, equal }
}
