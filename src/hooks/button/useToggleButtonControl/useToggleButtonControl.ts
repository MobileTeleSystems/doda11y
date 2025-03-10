import { useButtonControl } from '../useButtonControl'
import { UseToggleButtonControl, UseToggleButtonControlOptions } from './types'

export const useToggleButtonControl = <T extends HTMLElement>({ onPress }: UseToggleButtonControlOptions<T>): UseToggleButtonControl => {
	const { onKeyDown, onKeyUp } = useButtonControl({ onPress })
 
	return { onKeyUp, onKeyDown }
}
