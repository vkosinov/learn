const express = require('express')
const path = require('path')

const app = express()

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

app.listen(8080)
console.log('Server is listening on port 8080')
