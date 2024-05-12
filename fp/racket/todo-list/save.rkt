#lang racket

(require 2htdp/batch-io)
(require data/gvector)

(provide save)

; Функция для преобразования вектора в строку
(define (gvector->string vec)
  (string-join (gvector->list vec) "\n"))

; Сохраняет список задач в файл
(define (save todo-list file-name)
  (system "clear")

  (when (file-exists? file-name)
    (delete-file file-name))

  (write-file "file.txt" (gvector->string todo-list))
  (printf "Выход...")
)
