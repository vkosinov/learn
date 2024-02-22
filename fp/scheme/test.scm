(define pi 3.14159)
(define radius 10)
(define circumference (* 2 pi radius))

(display "circumference = ")
(display circumference)
(newline)

(define (square x) (* x x))

(display "square 2 = ")
(display (square 2))
(newline)

(define (sum-of-squares x y) (+ (square x) (square y)))

(display "sum-of-squares 3 4 = ")
(display (sum-of-squares 3 4))
(newline)

(define (f a) (sum-of-squares (+ a 1) (* a 2)))

(display "f 5 = ")
(display (f 5))
(newline)

(define (abs1 x)
  (cond ((> x 0) x)
       ((= x 0) 0 )
       ((< x 0) (-x))))

(define (abs x)
  (if (< x 0)
    (- x)
    x ))
;; Тестовый комментарий
(display "abs -5 = ")
(display (abs -5))
(newline)
