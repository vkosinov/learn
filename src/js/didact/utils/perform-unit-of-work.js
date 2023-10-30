import createDom from './create-dom'
import reconcileChildren from '..'

const performUnitOfWork = (fiber) => {
  // Создаем новый узел и добавляем его в DOM
  if (!fiber.dom) {
    fiber.dom = createDom(fiber)
  }

  const elements = fiber.props.children
  reconcileChildren(fiber, elements)

  if (fiber.child) {
    return fiber.child
  }

  let nextFiber = fiber

  while (nextFiber) {
    if (nextFiber.sibling) {
      return nextFiber.sibling
    }

    nextFiber = nextFiber.parent
  }
}

export default performUnitOfWork
