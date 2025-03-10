import { iosPlatforms, linuxPlatforms, macOsPlatforms, windowsPlatforms } from './constants'
import { OS } from './types'

export const getOS = () => {
	// @ts-expect-error: not error
	const { userAgent, userAgentData, platform } = navigator ?? {} 

	const navigatorPlatform = userAgentData?.platform || platform

	if (macOsPlatforms.includes(navigatorPlatform)) {
		return OS.MAC
	} else if (iosPlatforms.includes(navigatorPlatform)) {
		return OS.IOS
	} else if (windowsPlatforms.includes(navigatorPlatform)) {
		return OS.WINDOWS
	} else if (linuxPlatforms.includes(navigatorPlatform)) {
		return OS.LINUX
	} else if (/Android/.test(userAgent)) {
		return OS.ANDROID
	}
}
