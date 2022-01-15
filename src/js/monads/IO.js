import { isFunction } from 'lodash'

export default class IO {
  constructor(effect) {
    if (!isFunction(effect)) {
      throw new Error('IO Usage: Function required')
    }

    this.effect = effect
  }

  static of(a) {
    return new IO(() => a)
  }

  static from(fn) {
    return new IO(fn)
  }

  map(fn) {
    const self = this
    return new IO(() => fn(self.effect()))
  }

  chain(fn) {
    return fn(this.effect())
  }

  run() {
    return this.effect()
  }
}
