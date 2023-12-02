export const isTextElement = (type) => type === 'TEXT_ELEMENT'
export const isEvent = (name) => name.startsWith('on')
export const isAttribute = (name) => !isEvent(name) && name !== 'children'
