const express = require('express')
const path = require('path')
const { expressCspHeader, SELF, UNSAFE_EVAL } = require('express-csp-header')

const app = express()

app.use(
  expressCspHeader({
    directives: {
      'default-src': [SELF],
      'style-src': [SELF, 'https://cdnjs.cloudflare.com/'],
      'script-src': [SELF, UNSAFE_EVAL],
      'connect-src': [SELF, 'http://localhost:5000'],
    },
  })
)

app.set('view engine', 'ejs')

app.set('views', path.join(__dirname, '/views'))
app.use(express.static(`${__dirname}/public`))

// index page
app.get('/', (req, res) => {
  res.render('pages/login')
})

app.get('/user', (req, res) => {
  res.render('pages/user')
})

app.get('/recovery', (req, res) => {
  res.render('pages/recovery')
})

app.get('/reset', (req, res) => {
  res.render('pages/reset')
})

app.get('/users', (req, res) => {
  res.render('pages/users')
})

app.get('/registration', (req, res) => {
  res.render('pages/register')
})

app.get('/comments', (req, res) => {
  res.render('pages/comments')
})

app.listen(8080)
console.log('Server is listening on port 8080')
