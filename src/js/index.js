import Didact from './didact'

/** @jsx Didact.createElement */
const App = (props) => {
  return <h1>Hi {props.name}</h1>
}

const element = (
  <div>
    <App name="Root" />
  </div>
)
const container = document.getElementById('root')

Didact.render(element, container)
