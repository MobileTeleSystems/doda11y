export const generateElementId = (prefix?: string) => {
	const length = 12

	const randomId = Math.random()
		.toString(12)
		.substring(2, length + 2)
 
	return `${prefix ? prefix + '-' : ''}${randomId}`
}
