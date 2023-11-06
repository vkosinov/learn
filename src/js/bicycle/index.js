import render from './render'
import createElement from '../didact/utils/create-element'

// // Корневой элемент
// const domRoot = document.getElementById('root')

// // Создаем элемент и устанавливаем атрибуты
// const domInput = document.createElement('input')
// domInput.type = 'text'
// domInput.value = 'Hi world'
// domInput.className = 'my-class'
// const handleChange = (e) => {
//   console.log(e.target.value)
// }
// domInput.addEventListener('input', handleChange)

// const domText = document.createTextNode('')
// domText.nodeValue = 'Foo'

// // Добавляем элементы в корневой компонент
// domRoot.appendChild(domInput)
// domRoot.appendChild(domText)

/** @jsx createElement */
const domRoot = document.getElementById('root')

const tick = () => {
  const format = (count) => {
    return count < 10 ? `0${count}` : count
  }

  const hours = new Date().getHours()
  const minutest = new Date().getMinutes()
  const seconds = new Date().getSeconds()

  const clockElement = (
    <h1>
      <b>{format(hours)}</b>:<b>{format(minutest)}</b>:<b>{format(seconds)}</b>
    </h1>
  )

  render(clockElement, domRoot)
}

tick()

setInterval(() => {
  tick()
}, 1000)
