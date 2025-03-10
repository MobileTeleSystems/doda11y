export interface UseFilter {
	contains: (string: string, substring: string) => boolean
	startsWith: (string: string, substring: string) => boolean
	endsWith: (string: string, substring: string) => boolean
	equal: (x: string, y: string) => boolean
}
