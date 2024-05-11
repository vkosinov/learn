#lang racket

(require data/gvector)

(provide print-tasks)

; Выводит на экран список задач
(define (print-tasks todo-list)
  (system "clear")
  (if (= 0 (gvector-count todo-list)) ; Проверем не пуст ли список задач
      (printf "\nСписок задач пуст!\n")
      (begin
        (printf "\nСписок задач:\n")
        (for ([idx (in-range (gvector-count todo-list))]) ; Проходим по вектору и выводим значения
          (printf "~a: ~a\n" idx (gvector-ref todo-list idx))))))
