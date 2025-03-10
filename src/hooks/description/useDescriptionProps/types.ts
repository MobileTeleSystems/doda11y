import type { HTMLAttributes } from 'react'

export interface UseDescriptionPropsOptions {
	/** Свойство, позволяющее добавить текстовое описание (например, его предназначение) к элементу, которое может быть прочитан программами чтения с экрана, чтобы обеспечить доступ к информации, которая может быть утрачена из-за ограничений восприятия. */
	description?: string
	/** Аналогично `aria-description`, позволяет добавить описание (например, его предназначение) к элементу, однако ссылается на описание с помощью id */
	describedBy?: string
}

export type DescriptionProps<T extends HTMLElement> = {
	/** Свойство, добавляющее текстовое имя/назначение элементу, которое может быть прочитан программами чтения с экрана, чтобы обеспечить доступ к информации, которая может быть утрачена из-за ограничений восприятия. */
	'aria-description'?: HTMLAttributes<T>['aria-description']
	/** Аналогично `aria-label`, позволяет добавить текстовое имя/назначение элементу, однако ссылается на описание с помощью id */
	'aria-describedby'?: HTMLAttributes<T>['aria-describedby']
}

export interface UseDescriptionProps<T extends HTMLElement> {
	/** Свойства, необходимые для доступности label */
	descriptionProps: DescriptionProps<T>
}
