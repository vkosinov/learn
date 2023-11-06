import createPublicInstance from './create-public-instance'
import updateDomProperties from './update-dom-properties'
import { isTextElement } from './utils'

const instantiate = (element) => {
  const { type, props } = element

  const isDomElement = typeof type === 'string'

  if (isDomElement) {
    // создаем дом-элемент в зависимости от типа
    const isText = isTextElement(type)

    const dom = isText
      ? document.createTextNode('')
      : document.createElement(type)

    updateDomProperties(dom, {}, props)

    // Добавляем инстансы потомков
    const childElements = props.children || []
    const childInstances = childElements.map(instantiate)
    const childDoms = childInstances.map((childInstance) => childInstance.dom)
    childDoms.forEach((childDom) => dom.appendChild(childDom))

    const instance = { dom, element, childInstances }
    return instance
  }
  // Создаем инстанс компонента
  const instance = {}
  const publicInstance = createPublicInstance(element, instance)
  const childElement = publicInstance.render()
  const childInstance = instantiate(childElement)
  const { dom } = childInstance

  Object.assign(instance, { dom, element, childInstance, publicInstance })

  return instance
}

export default instantiate
