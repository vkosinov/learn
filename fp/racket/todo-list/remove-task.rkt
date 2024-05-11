#lang racket

(require data/gvector)

(provide remove-task)

(require "./print-tasks.rkt")

; Удаляет задачу из списка по индексу
(define (remove-task todo-list)
  (system "clear")
  (print-tasks todo-list) ; Выводим список задач для наглядности
  (printf "Введите индекс удаляемой задачи: ")
  (define index (read))

  (if (and (integer? index)                    ; Проверяем, что index является целым числом
           (>= index 0)                        ; Проверяем, что index неотрицателен
           (< index (gvector-count todo-list))) ; Проверяем, что index меньше длины списка
      (begin
        (gvector-remove! todo-list index)
        (printf "Задача под индексом ~a удалена\n" index))
      (printf "Неверный индекс задачи! \n")))
