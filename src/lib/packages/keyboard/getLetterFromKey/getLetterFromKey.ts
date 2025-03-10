export const getLetterFromKey = (key: KeyboardEvent['key']) => (key.length === 1 && /^[A-zА-я|\d ]/.test(key) ? key : '')
