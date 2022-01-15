import { startCase, partial } from 'lodash'
import IO from './monads/IO'

const read = (document, selector) => () =>
  document.querySelector(selector).innerHTML

const write = (document, selector) => (val) => {
  document.querySelector(selector).innerHTML = val
  return val
}

const readDom = partial(read, document)
const writeDom = partial(write, document)

const changeToStartCase = IO.from(readDom('#student-name'))
  .map(startCase)
  .map(writeDom('#student-name'))

changeToStartCase.run()
