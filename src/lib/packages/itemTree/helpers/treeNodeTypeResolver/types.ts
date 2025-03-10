import { FC } from 'react'

export interface TreeNodeTypeResolverData {
	/** Компонент-ребенок, не может быть развернут */
  childElement: FC<any> | FC<any>[]
	/** Компонент, содержащий в себе другие элементы. Может быть развернутым/свернутым */
  parentElement?: FC<any> | FC<any>[]
  /** Компонент, содержащий в себе другие элементы. Группа. */
  groupElement?: FC<any> | FC<any>[]
}
