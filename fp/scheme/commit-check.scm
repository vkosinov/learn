;scheme --load commit-check.scm
;csi -s myprogram.scm
(newline)
(display "Введите ваше имя: ")
(newline)
(define name (read-line))
(display "Привет, ")
(display name)
(newline)
