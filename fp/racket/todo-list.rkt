#lang racket

(require data/gvector)

;
(define (string-trim-right srt) (substring srt 0 (- (string-length srt) 1)))

;Создает пустой список (расширяемый вектор)
(define todo-list (gvector))

;Добавляет новую задачу в список
(define (add-task task)
  (gvector-add! todo-list task))

;Удаляет задачу из списка по индексу
(define (remove-task index)
  (if (and (integer? index)                    ; Проверяем, что index является целым числом
           (>= index 0)                        ; Проверяем, что index неотрицателен
           (< index (gvector-count todo-list))) ; Проверяем, что index меньше длины списка
      (begin
        (gvector-remove! todo-list index)
        (printf "Задача под индексом ~a удалена\n" index))
      (printf "Неверный индекс задачи! \n")))

;Проверем не пуст ли список задач
(define (is-empty-todo-list function)
  (if (= 0 (gvector-count todo-list))
      (printf "\nСписок задач пуст!\n")
       (function)
  )
)

;Выводит на экран список задач
(define (print-tasks)
  (begin
        (printf "\nСписок задач:\n")
        (for ([idx (in-range (gvector-count todo-list))])
          (printf "~a: ~a\n" (add1 idx) (gvector-ref todo-list idx)))
  )
)

;Выводит на экран список доступных команд
(define (command-print)
    (display "--------------------- \n")
    (display "Доступные команды: \n")
    (display "--------------------- \n")
    (display "1. Список задач \n")
    (display "2. Добавить задачу \n")
    (display "3. Удалить задачу \n")
    (display "4. Выйти\n")
    (display "--------------------- \n")
    (display "Введите номер команды: "))

(define (main)
  (let loop ()
    (command-print)

    (let ((choice (read)))
      (cond

      ((= choice 1)
        (system "clear")
        (is-empty-todo-list print-tasks)
        (loop))

        ((= choice 2)
          (system "clear")
          (printf "Введите задачу: ")
          (read-line)
          (define input (read-line))
          (add-task input)
         (loop))

        ((= choice 3)
          (system "clear")
          (is-empty-todo-list print-tasks)
          (printf "Введите индекс удаляемой задачи: ")
          (remove-task (read))
         (loop))

        ((= choice 4)
          (system "clear")
         (printf "Выход... \n"))

        (else
          (system "clear")
         (printf "Неверная команда! \n")
         (loop))))))

(main)
