export interface UseRefMap<K, V> {
  set: (key: K, value: V) => void
  get: (key: K) => V | undefined
  map: Map<K, V>
}
