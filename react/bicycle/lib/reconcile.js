import instantiate from './instantiate'

import updateDomProperties from './update-dom-properties'

const reconcile = (parentDom, instance, element) => {
  if (instance === null) {
    // Создаем инстанс
    const newInstance = instantiate(element)
    parentDom.appendChild(newInstance.dom)

    return newInstance
  }

  if (element === null) {
    // Убираем инстанс
    parentDom.removeChild(instance.dom)
    return null
  }

  if (instance.element.type === element.type) {
    // Обновляем инстанс
    updateDomProperties(instance.dom, instance.element.props, element.props)
    instance.childInstances = reconcileChildren(instance, element)
    instance.element = element

    return instance
  }

  if (typeof instance.element.type === 'string') {
    // Обновляем инстанс DOM-элемента
    updateDomProperties(instance.dom, instance.element.props, element.props)
    instance.childInstances = reconcileChildren(instance, element)
    instance.element = element

    return instance
  }
  // Обновляем инстанс компонента
  instance.publicInstance.props = element.props
  const childElement = instance.publicInstance.render()
  const oldChildInstance = instance.childInstance
  const childInstance = reconcile(parentDom, oldChildInstance, childElement)

  instance.dom = childInstance.dom
  instance.childInstance = childInstance
  instance.element = element

  return instance
}

const reconcileChildren = (instance, element) => {
  const { dom } = instance
  const { childInstances } = instance
  const nextChildElements = element.props.children || []
  const newChildInstances = []

  const count = Math.max(childInstances.length, nextChildElements.length)

  for (let i = 0; i < count; i += 1) {
    const childInstance = childInstances[i]
    const childElement = nextChildElements[i]
    const newChildInstance = reconcile(dom, childInstance, childElement)
    newChildInstances.push(newChildInstance)
  }

  return newChildInstances
}

export default reconcile
