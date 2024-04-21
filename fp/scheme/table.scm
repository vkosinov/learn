; Таблица
;scheme --quiet < table.scm

;проверяет, что запись, возвращенная assoc, не есть ложь,
;и возвращает значение (то есть cdr)
(define (lookup key table)
  (let ((record (assoc key (cdr table))))
    (if record
      (cdr record)
      false)
  )
)

;проверяем, нет ли уже в таблице записи с этим ключом.
(define (assoc key records) (cond ((null? records) false)
((equal? key (caar records)) (car records)) (else (assoc key (cdr records)))))


(define (insert! key value table)
(let ((record (assoc key (cdr table))))
(if record
(set-cdr! record value) (set-cdr! table
(cons (cons key value) (cdr table)))))
'ok)

;создаем таблицу
(define (make-table)
  (list '*table*))
