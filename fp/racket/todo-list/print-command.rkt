#lang racket

(provide print-command)

; Выводит на экран список доступных команд
(define (print-command)
  (display "--------------------- \n")
  (display "Доступные команды: \n")
  (display "--------------------- \n")
  (display "1. Список задач \n")
  (display "2. Добавить задачу \n")
  (display "3. Удалить задачу \n")
  (display "4. Выйти\n")
  (display "5. Выйти и сохранить\n")
  (display "--------------------- \n")
  (display "Введите номер команды: "))
