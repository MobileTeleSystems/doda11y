import { getOS } from '../getOS'
import { OS } from '../getOS/types'

export const isMacOS = () => {
	return getOS() === OS.MAC
}
