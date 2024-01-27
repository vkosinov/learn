import createElement from './utils/create-element'
import commitWork from './utils/commit-work'
import createDom from './utils/create-dom'

let deletions = null
let nextUnitOfWork = null
let currentRoot = null
let wipRoot = null
let wipFiber = null
let hookIndex = null

const commitRoot = () => {
  deletions.forEach(commitWork)
  commitWork(wipRoot.child)
  currentRoot = wipRoot
  wipRoot = null
}

const render = (element, container) => {
  wipRoot = {
    dom: container,
    props: {
      children: [element],
    },
    alternate: currentRoot,
  }

  deletions = []
  nextUnitOfWork = wipRoot
}

const workLoop = (deadline) => {
  let shouldYield = false

  while (nextUnitOfWork && !shouldYield) {
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork)

    shouldYield = deadline.timeRemaining() < 1
  }

  if (!nextUnitOfWork && wipRoot) {
    commitRoot()
  }

  requestIdleCallback(workLoop)
}

requestIdleCallback(workLoop)

const performUnitOfWork = (fiber) => {
  // Обработка функционального компонента

  const isFunctionalComponent = fiber.type instanceof Function

  if (isFunctionalComponent) {
    updateFunctionComponent(fiber)
  } else {
    updateHostComponent(fiber)
  }

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

const updateFunctionComponent = (fiber) => {
  wipFiber = fiber
  hookIndex = 0
  wipFiber.hooks = []

  const children = [fiber.type(fiber.props)]
  reconcileChildren(fiber, children)
}

const updateHostComponent = (fiber) => {
  if (!fiber.dom) {
    fiber.dom = createDom(fiber)
  }

  const elements = fiber.props.children
  reconcileChildren(fiber, elements)
}

const reconcileChildren = (wipFiber, elements) => {
  let index = 0
  let oldFiber = wipFiber.alternate && wipFiber.alternate.child
  let prevSibling = null

  while (index < elements.length || oldFiber != null) {
    const element = elements[index]
    let newFiber = null

    const sameType = oldFiber && element && element.type == oldFiber.type

    // если старый волокнистый элемент и новый элемент имеют один и тот же тип,
    // мы можем сохранить узел DOM и просто обновить его новыми реквизитами.
    if (sameType) {
      newFiber = {
        type: oldFiber.type,
        props: element.props,
        dom: oldFiber.dom,
        parent: wipFiber,
        alternate: oldFiber,
        effectTag: 'UPDATE',
      }
    }

    // если тип другой и есть новый элемент, это означает, что нам нужно создать новый узел DOM
    if (element && !sameType) {
      newFiber = {
        type: element.type,
        props: element.props,
        dom: null,
        parent: wipFiber,
        alternate: null,
        effectTag: 'PLACEMENT',
      }
    }

    // а если типы разные и есть старое волокно, то нужно удалить старый узел
    if (oldFiber && !sameType) {
      oldFiber.effectTag = 'DELETION'
      deletions.push(oldFiber)
    }

    if (oldFiber) {
      oldFiber = oldFiber.sibling
    }

    if (index === 0) {
      wipFiber.child = newFiber
    } else if (element) {
      prevSibling.sibling = newFiber
    }

    prevSibling = newFiber
    index++
  }
}

const useState = (initial) => {
  // Проверяем есть ли у нас старый хук
  const oldHook =
    wipFiber.alternate &&
    wipFiber.alternate.hooks &&
    wipFiber.alternate.hooks[hookIndex]

  const hook = {
    // Копируем состояние из старого хука если нет инициализируем
    state: oldHook ? oldHook.state : initial,
    queue: [],
  }

  const actions = oldHook ? oldHook.queue : []

  actions.forEach((action) => {
    hook.state = action(hook.state)
  })

  // Функция для изменения состояния
  const setState = (action) => {
    // Добавляем в очередь
    hook.queue.push(action)

    // устанавливаем новый root, что бы рабочий цикл мог начать новую фазу
    wipRoot = {
      dom: currentRoot.dom,
      props: currentRoot.props,
      alternate: currentRoot,
    }

    nextUnitOfWork = wipRoot
    deletions = []
  }

  // Добавляем новый хук в fiber
  wipFiber.hooks.push(hook)
  // Увеличиваем индекс хука на единицу
  hookIndex += 1
  // Возвращаем состояние
  return [hook.state, setState]
}

const Didact = {
  createElement,
  render,
  useState,
}

export default Didact
