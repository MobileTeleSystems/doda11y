import type { UsePopupTriggerProps, UsePopupTriggerPropsOptions } from '../usePopupTriggerProps'
import { UsePopupTriggerControl, UsePopupTriggerControlOptions } from '../usePopupTriggerControl'

export type UsePopupTriggerOptions<T extends HTMLElement> = UsePopupTriggerPropsOptions<T> & UsePopupTriggerControlOptions

export type UsePopupTriggerUnionTriggerProps<T extends HTMLElement> = UsePopupTriggerProps<T>['triggerProps'] & UsePopupTriggerControl

export interface UsePopupTrigger<T extends HTMLElement> {
	/** Свойства, необходимые для доступности trigger popup */
	triggerProps: UsePopupTriggerUnionTriggerProps<T>
}
