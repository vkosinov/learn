#lang racket

(require data/gvector)

(provide add-task)

; Добавляет новую задачу в список
(define (add-task todo-list)
  (system "clear")
  (printf "Введите задачу: ")
  (read-line)
  (gvector-add! todo-list (read-line)))
