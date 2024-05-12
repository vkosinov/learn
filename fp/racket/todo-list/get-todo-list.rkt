#lang racket

(require 2htdp/batch-io)
(require data/gvector)

(provide get-todo-list)

; Получаем список строк из файла
(define (read-lines filename)
  (call-with-input-file filename
    (lambda (input-port)
      (port->lines input-port))))

; Преобразуем списк в вектор
(define (list->gvector lst)
  (define vec (gvector))
  (for-each (lambda (item) (gvector-add! vec item)) lst)
  vec)

; Получаем список задач из файла
(define (get-todo-list file-name)
  (system "clear")
  (if (file-exists? file-name) ; Проверяем существует ли файл
      (list->gvector (read-lines file-name))
      (gvector))) ; Создаем пустой фектор если файл не найден
