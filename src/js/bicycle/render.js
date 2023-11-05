const render = (element, parentDom) => {
  // параметры элемента
  const { type, props } = element

  // создаем дом-элемент в зависимости от типа
  const isText = isTextElement(type)

  const dom = isText
    ? document.createTextNode('')
    : document.createElement(type)

  // добавление обработчиков событий
  Object.keys(props)
    .filter(isListener)
    .forEach((name) => {
      const eventType = name.toLowerCase().substring(2)
      dom.addEventListener(eventType, props[name])
    })

  // добавление пропс, кроме зарезервированного children
  Object.keys(props)
    .filter(isAttribute)
    .forEach((name) => {
      dom[name] = props[name]
    })

  // дочерние элементы
  const childElements = props.children || []

  // рендер дочерних элементов
  childElements.forEach((childElement) => render(childElement, dom))

  // вставка в DOM

  if (!parentDom.lastChild) {
    parentDom.appendChild(dom)
  } else {
    parentDom.replaceChild(dom, parentDom.lastChild)
  }
}

const isTextElement = (type) => type === 'TEXT_ELEMENT'
const isListener = (name) => name.startsWith('on')
const isAttribute = (name) => !isListener(name) && name !== 'children'

export default render
