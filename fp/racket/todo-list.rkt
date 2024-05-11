#lang racket

(require data/gvector)

; Создает пустой список (расширяемый вектор)
(define todo-list (gvector))

; Добавляет новую задачу в список
(define (add-task)
  (system "clear")
  (printf "Введите задачу: ")
  (read-line)
  (gvector-add! todo-list (read-line)))

; Удаляет задачу из списка по индексу
(define (remove-task)
  (system "clear")
  (print-tasks) ; Выводим список задач для наглядности
  (printf "Введите индекс удаляемой задачи: ")
  (define index (read))

  (if (and (integer? index)                    ; Проверяем, что index является целым числом
           (>= index 0)                        ; Проверяем, что index неотрицателен
           (< index (gvector-count todo-list))) ; Проверяем, что index меньше длины списка
      (begin
        (gvector-remove! todo-list index)
        (printf "Задача под индексом ~a удалена\n" index))
      (printf "Неверный индекс задачи! \n")))

; Выводит на экран список задач
(define (print-tasks)
  (system "clear")
  (if (= 0 (gvector-count todo-list)) ; Проверем не пуст ли список задач
      (printf "\nСписок задач пуст!\n")
      (begin
        (printf "\nСписок задач:\n")
        (for ([idx (in-range (gvector-count todo-list))]) ; Проходим по вектору и выводим значения
          (printf "~a: ~a\n" idx (gvector-ref todo-list idx))))))

; Выводит на экран список доступных команд
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
    (command-print) ; Выводим список доступных команд
    (let ((choice (read)))
      (cond
        ((= choice 1) ; Вывести список задач
         (print-tasks)
         (loop))
        ((= choice 2) ; Добавить задачу
         (add-task)
         (loop))
        ((= choice 3) ; Удалить задачу
         (remove-task)
         (loop))
        ((= choice 4) ; Выйти
         (system "clear")
         (printf "Выход..."))
        (else ; Обработка на случай если введен номер не из допусимого списка
         (system "clear")
         (printf "Введен недопустимый номер задачи! \n")
         (loop))))))

(main)
