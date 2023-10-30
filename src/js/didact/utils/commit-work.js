import updateDom from './update-dom'

const commitWork = (fiber) => {
  if (!fiber) {
    return
  }

  const domParent = fiber.parent.dom

  if (fiber.effectTag == 'PLACEMENT' && fiber.dom != null) {
    domParent.appendChild(fiber.dom)
  } else if (fiber.effectTag == 'UPDATE' && fiber.dom != null) {
    updateDom(fiber.dom, fiber.alternate.props, fiber.props)
  } else if (fiber.effectTag == 'DELETION') {
    domParent.removeChild(fiber.dom)
  }

  commitWork(fiber.child)
  commitWork(fiber.sibling)
}

export default commitWork
