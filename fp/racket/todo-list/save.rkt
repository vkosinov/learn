#lang racket

(require 2htdp/batch-io)
(require data/gvector)

(provide save)

; Функция для преобразования вектора в строку
(define (gvector->string vec)
  (string-join (gvector->list vec) "\n"))

; Сохраняет список задач в файл
(define (save todo-list)
  (system "clear")
  (write-file "file.txt" (gvector->string todo-list))
  (printf "Выход...")
)
