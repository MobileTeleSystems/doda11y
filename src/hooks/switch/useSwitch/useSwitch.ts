import { useMemo } from 'react'
import { UseSwitch, UseSwitchOptions, UseSwitchUnionOptionProps } from './types'
import { useSwitchProps } from '../useSwitchProps'
import { useSwitchControl } from '../useSwitchControl'

export const useSwitch = <T extends HTMLElement>({ checked, withSemanticRole, onToggle, label, labelledBy, description, describedBy, disabled }: UseSwitchOptions): UseSwitch<T> => {
	const { switchProps } = useSwitchProps({ checked, withSemanticRole, label, labelledBy, description, describedBy, disabled })
	const { onKeyDown } = useSwitchControl({ onToggle })

	const unionSwitchProps: UseSwitchUnionOptionProps<T> = useMemo(
		() => ({ ...switchProps, onKeyDown }),
		[switchProps]
	)

	return {
		switchProps: unionSwitchProps
	}
}
