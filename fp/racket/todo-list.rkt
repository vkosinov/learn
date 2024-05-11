#lang racket

(require data/gvector)
(require readline/rep-start)

;Создает пустой список (расширяемый вектор)
(define todo-list (gvector))

;Добавляет новую задачу в список
(define (add-task task)
  (gvector-add! todo-list task))

;Удаляет задачу из списка по индексу
(define (remove-task index)
  (gvector-remove! todo-list index))

;Проверем не пуст ли список задач
(define is-empty-todo-list function
  (if (= 0 (gvector-count todo-list))
      (printf "\nСписок задач пуст!\n")
      (begin function)
  )
)

;Выводит на экран список задач
(define (print-tasks)
  (if (= 0 (gvector-count todo-list))
      (printf "\nСписок задач пуст!\n")
      (begin
        (printf "\nСписок задач:\n")
        (for ([idx (in-range (gvector-count todo-list))])
          (printf "~a: ~a\n" (add1 idx) (gvector-ref todo-list idx)))
      )
  )
)

;Выводит на экран список доступных команд
(define (command-print)
    (printf "\n\n--------------------- \n")
    (printf "Доступные команды: \n")
    (printf "--------------------- \n")
    (printf "1. Список задач \n")
    (printf "2. Добавить задачу \n")
    (printf "3. Удалить задачу \n")
    (printf "4. Выйти\n")
    (printf "--------------------- \n")
    (printf "Введите команду: \n"))

(define (main)
  (let loop ()
    (command-print)

    (let ((choice (read)))
      (cond

      ((= choice 1)
         (print-tasks)
         (loop))

        ((= choice 2)
         (printf "Введите задачу: \n")
         (add-task "aaa")
         (loop))

        ((= choice 3)
         (printf "Введите индекс удаляемой задачи: ")
         (remove-task (read))
         (loop))

        ((= choice 4)
         (printf "Выход... \n"))

        (else
         (printf "Неверная команда! \n")
         (loop))))))

(main)
