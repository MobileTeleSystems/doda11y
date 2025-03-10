import { useCallback, useRef } from 'react'
import { UseRefMap } from './types'

export const useRefMap = <K, V>(): UseRefMap<K, V> => {
	const ref = useRef<Map<K, V>>(new Map())

	const set = useCallback((key: K, value: V): void => {
		ref.current.set(key, value)
	}, [])

	const get = useCallback((key: K): V | undefined => {
		return ref.current.get(key)
	}, [])

	return { set, get, map: ref.current }
}
