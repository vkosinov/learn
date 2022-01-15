import { toUpper } from 'ramda'

import Wrapper from './Wrapper'

const log = (val) => {
  console.log('log :', val)
}

Wrapper.of('Hello Monads').map(toUpper).map(log)
