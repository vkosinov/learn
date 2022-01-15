// Монада

// конструктор типа
export default class Wrapper {
  constructor(value) {
    this.value = value
  }

  // Единичная функция
  static of(a) {
    return new Wrapper(a)
  }

  // Функция связывания (функтор)
  map(f) {
    return new Wrapper(f(this.value))
  }

  // Функция сведения вложенных уровней
  join() {
    if (!(this.value instanceof Wrapper)) {
      return this
    }

    return this.value.join()
  }

  get() {
    return this.value
  }

  toString() {
    return `wrapper (${this.value})`
  }
}
