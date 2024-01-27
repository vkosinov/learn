export default class Either {
  //  В этом объекте может содержаться либо информация об исключении, либо корректное значение
  constructor(value) {
    this.value = value
  }

  get value() {
    return this.value
  }

  static left(a) {
    return new Left(a)
  }

  static right(a) {
    return new Right(a)
  }

  // Принять левый вариант типа Left, если передано недостоверное значением,
  // a иначе - правый вариант типа Right
  static fromNullable(val) {
    return val !== null && val !== undefined
      ? Either.right(val)
      : Either.left(val)
  }

  // Создать новый экземпляр, содержащий значение в структуре типа Right
  static of(a) {
    return Either.right(a)
  }
}

class Left extends Either {
  // Преобразовать значение в структуре типа Right, применяя к ней функцию преобразования.
  // Но не чего не делать со структурой типа Left
  map() {
    return this // пустая операция
  }

  get value() {
    throw new TypeError('Невозможно извлечь значение из Left(a)')
  }

  // Извлечь значение из структуры типа Right. Если же оно не существует,
  // то возвратить значение, заданное по умолчанию.
  getOrElse(other) {
    return other
  }

  // Применить заданную функцию к значению типа Left; ничего не делать со структурой типа Right
  orElse(f) {
    return f(this.value)
  }

  //  Применить функцию к структуре типа Right и возвратить из нее значении;
  // ничего не делать со структурой типа Left
  chain() {
    return this
  }

  // Только из структуры Left
  getOrElseThrow(a) {
    throw new Error(a)
  }

  filter() {
    return this
  }

  toString() {
    return `Either.Left(${this.value})`
  }
}

class Right extends Either {
  // Преобразовать значение в структуре типа Right, ничего не делать в Right
  map(f) {
    return Either.of(f(this.value))
  }

  getOrElse() {
    return this.value
  }

  orElse() {
    return this
  }

  chain(f) {
    return f(this.value)
  }

  getOrElseThrow() {
    return this.value
  }

  filter(f) {
    return Either.fromNullable(f(this.value)) ? this.value : null
  }

  toString() {
    return `Either.Right(${this.value})`
  }
}
