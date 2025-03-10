import type { HTMLAttributes } from 'react'

export interface UseLabelsPropsOptions {
	/** Свойство, позволяющее добавить текстовое имя/назначение элементу, которое может быть прочитан программами чтения с экрана, чтобы обеспечить доступ к информации, которая может быть утрачена из-за ограничений восприятия. */
	label?: string
	/** Аналогично `aria-label`, позволяет добавить имя/назначение к элементу, однако ссылается на описание с помощью id */
	labelledBy?: string
}

export type LabelsProps<T extends HTMLElement> = {
	/** Свойство, добавляющее текстовое имя/назначение элементу, которое может быть прочитан программами чтения с экрана, чтобы обеспечить доступ к информации, которая может быть утрачена из-за ограничений восприятия. */
	'aria-label'?: HTMLAttributes<T>['aria-label']
	/** Аналогично `aria-label`, позволяет добавить текстовое имя/назначение элементу, однако ссылается на описание с помощью id */
	'aria-labelledby'?: HTMLAttributes<T>['aria-labelledby']
}

export interface UseLabelsProps<T extends HTMLElement> {
	/** Свойства, необходимые для доступности label */
	labelProps: LabelsProps<T>
}
