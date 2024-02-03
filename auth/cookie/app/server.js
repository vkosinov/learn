const express = require('express')
const path = require('path')
const { expressCspHeader, SELF, UNSAFE_EVAL } = require('express-csp-header')
const route = require('../../shared/app/route')

const app = express()

app.use(
  expressCspHeader({
    directives: {
      'default-src': [SELF],
      'style-src': [SELF, 'https://cdn.jsdelivr.net'],
      'script-src': [SELF, UNSAFE_EVAL],
      'connect-src': [SELF, 'http://localhost:5000'],
      'frame-ancestors': 'none',
    },
  })
)

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '../../shared/app/views'))
app.use(express.static(path.join(__dirname, '../../shared/app/public')))
app.use(express.static(path.join(__dirname, '/public')))

app.use('/', route)

app.listen(8080)
console.log('Server is listening on port 8080')
