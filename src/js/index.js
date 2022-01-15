import { find, curry } from 'ramda'
import Either from './monads/Either'

const student = {
  0: { name: 'Alex' },
  123456: { name: 'Sergey' },
}

const safeFindObject = curry((db, id) => {
  const obj = db[id]

  if (obj) {
    return new Either.of(obj)
  }

  return new Either.left(`Object not found whith ID ${id}`)
})

const findStudent = safeFindObject(student)

findStudent(0)
