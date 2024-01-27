const createElement = (type, props, ...children) => {
  const propsValue = {
    ...props,
    children: children.map((child) =>
      typeof child === 'object' ? child : createTextElement(child)
    ),
  }

  const isFunctionComponent = typeof type === 'function'

  if (isFunctionComponent) {
    return type(propsValue)
  }

  return {
    type,
    props: propsValue,
  }
}

const createTextElement = (text) => ({
  type: 'TEXT_ELEMENT',
  props: { nodeValue: text, children: [] },
})

export default createElement
