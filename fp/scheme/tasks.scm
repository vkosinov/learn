;Упражнение 1.2.
;Переведите выражение в префиксную форму
(display "task 1.2:")
(newline)
(display (/ (+ 5 (+ 4 (- 2 (- 3 (+ 6 (/ 4 5)))))) (*(* 3 (- 6 2))(- 2 7))))
(newline)

; Упражнение 1.3.
; Определите процедуру, которая принимает в качестве аргументов три числа и возвращает сумму квадратов двух больших из них.

(define (square a) (* a a))



(define (sum-of-max-squares a b c)
  (
    + (square (max a b)) (square (max (min a b) c))
  )
)

(newline)
(display "task 1.3:")
(newline)
(display (sum-of-max-squares 1 2 3 ))
(newline)
