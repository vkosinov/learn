#lang racket

(require data/gvector)

(require "./add-task.rkt")
(require "./remove-task.rkt")
(require "./print-tasks.rkt")
(require "./print-command.rkt")
(require "./save.rkt")
(require "./get-todo-list.rkt")

;Имя файла
(define file-name "file.txt")

; Создать список (расширяемый вектор)
(define todo-list (get-todo-list file-name))

; Основная функция
(define (main)
  (let loop ()
    (print-command) ; Выводим список доступных команд
    (let ((choice (read)))
      (cond
        ((= choice 1) ; Вывести список задач
         (print-tasks todo-list)
         (loop))
        ((= choice 2) ; Добавить задачу
         (add-task todo-list)
         (loop))
        ((= choice 3) ; Удалить задачу
         (remove-task todo-list)
         (loop))
        ((= choice 4) ; Выйти
         (system "clear")
         (printf "Выход..."))
        ((= choice 5) ; Выйти и сохранить
         (save todo-list file-name))
        (else ; Обработка на случай если введен номер не из допусимого списка
         (system "clear")
         (printf "Введен недопустимый номер задачи! \n")
         (loop))))))

(main)
