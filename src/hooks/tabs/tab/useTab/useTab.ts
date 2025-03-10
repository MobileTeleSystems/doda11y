import { useMemo } from 'react'
import { useTabProps } from '../useTabProps'
import {
	UseTab,
	UseTabOptions,
	UseTabUnionProps,
} from './types'
import { useTabControl } from '../useTabControl'

export const useTab = <T extends HTMLElement>({ label, labelledBy, withSemanticRole, popupType, controls, selected, onActivate, onOpenPopup, focusable }: UseTabOptions): UseTab<T> => {
	const { tabProps } = useTabProps({ label, withSemanticRole, labelledBy, popupType, controls, selected, focusable })
	const { onKeyDown } = useTabControl({ onActivate, onOpenPopup })

	const unionTabProps: UseTabUnionProps<T> = useMemo(
		() => ({
			...tabProps,
			onKeyDown
		}),
		[tabProps, onKeyDown]
	)

	return { tabProps: unionTabProps }
}
