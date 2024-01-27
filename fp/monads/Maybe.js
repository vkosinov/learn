// Тип оболочки родительский класс
export default class Maybe {
  static just(a) {
    return new Just(a)
  }

  static nothing() {
    return new Nothing()
  }

  static fromNullable(a) {
    return a !== null ? Maybe.just(a) : Maybe.nothing()
  }

  static of(a) {
    return this.just(a)
  }

  get isNothing() {
    return false
  }

  get isJust() {
    return false
  }
}

// Подтип для обработки в случае, если значение присутствует
class Just extends Maybe {
  constructor(value) {
    super()
    this.value = value
  }

  get value() {
    return this.value
  }

  // Применить к оболочке подтипа Just функцию, сохранив результат обратно в оболочке
  map(f) {
    return Maybe.fromNullable(f(this.value))
  }

  // Извлечь из структуры значение или единичную операцию, предоставляемую монаде по умолчанию
  getOrElse() {
    return this.value
  }

  filter(f) {
    return Maybe.fromNullable(f(this.value)) ? this.value : null
  }

  chain(f) {
    return f(this.value)
  }

  //  Возвратить текстовое представление данной структуры
  toString() {
    return `Maybe.Just(${this.value})`
  }
}

// Подтип Nothing для защиты от отсутствия значения
class Nothing extends Maybe {
  map() {
    return this
  }

  // При попытке извлечь значение из оболочки типа Nothing сгенерировать исключение,
  // обозначающее неверное применение монады, в противном случае  возвратить значение
  get value() {
    throw new TypeError('Невозможно извлечь значение из элемента Nothing.')
  }

  // Проигнорировать данное значение и возвратить другое
  getOrElse(other) {
    return other
  }

  // Если значение имеется и совпадает с заданным предикатом, возвратить оболочку типа Just,
  // описывающую данное значение, в противном случае возвратить оболочку типа Nothing
  filter() {
    return this.value
  }

  chain(f) {
    return f(this.value)
  }

  toString() {
    return 'Maybe.Nothing'
  }
}
