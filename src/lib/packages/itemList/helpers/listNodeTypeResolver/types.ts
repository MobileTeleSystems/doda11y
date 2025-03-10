import { FC } from 'react'

export interface ListNodeTypeResolverData {
	/** Компонент-ребенок */
  itemElement: FC<any> | FC<any>[]
  /** Компонент, содержащий в себе другие элементы. Группа. */
  groupElement?: FC<any> | FC<any>[]
}
