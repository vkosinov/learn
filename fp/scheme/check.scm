;scheme --quiet < check.scm
;user | PTS     | 3      |   ✓  |
(define (printRow user project) (
    (define x (string-append "| " user " | " project " | "))
    (display x)
  )
)


(printRow "viktor.kosinov" "phd")
(newline)
