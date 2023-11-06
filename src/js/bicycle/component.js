import reconcile from './reconcile'

class Component {
  constructor(props) {
    this.props = props
    this.state = this.state || {}
  }

  setState(partialState) {
    this.state = { ...this.state, ...partialState }
    updateInstance(this.__internalInstance)
  }
}

const updateInstance = (internalInstance) => {
  const parentDom = internalInstance.dom.parentNode
  const { element } = internalInstance

  reconcile(parentDom, internalInstance, element)
}
