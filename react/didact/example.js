import Didact from '.'

/** @jsx Didact.createElement */
const Counter = () => {
  const [state, setState] = Didact.useState(1)

  const handleAdd = () => {
    setState((prevState) => prevState + 1)
  }

  const handleRemove = () => {
    setState((prevState) => prevState - 1)
  }

  return (
    <div>
      <h1>Count:{state}</h1>

      <button onClick={handleAdd}>+</button>
      <button onClick={handleRemove}>-</button>
    </div>
  )
}

const element = <Counter />
const container = document.getElementById('root')

Didact.render(element, container)
