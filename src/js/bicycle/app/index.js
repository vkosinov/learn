import Bicycle from '../lib'

/** @jsx Bicycle.createElement */
const domRoot = document.getElementById('root')

const items = ['a', 'b']

const ListItem = ({ char }) => <li>{char}</li>
const List = ({ items }) => (
  <ul>
    {items.map((item) => (
      <ListItem char={item} />
    ))}
  </ul>
)

const rerender = () => {
  const clockElement = <List items={items} />

  Bicycle.render(clockElement, domRoot)
}

rerender()

// setInterval(() => {
//   rerender()
// }, 1000)
