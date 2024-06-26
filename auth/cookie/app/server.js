const express = require('express')
const path = require('path')
const https = require('https')
const fs = require('fs')
const helmet = require('helmet')
const { expressCspHeader, SELF, NONCE } = require('express-csp-header')
const route = require('../../shared/app/route')

const app = express()
const PORT = 8000

const httpsOptions = {
  key: fs.readFileSync(path.join(__dirname, '../../../cert/key.pem')),
  cert: fs.readFileSync(path.join(__dirname, '../../../cert/cert.pem')),
}

app.use(
  expressCspHeader({
    directives: {
      'default-src': [SELF],
      'style-src': [SELF, 'https://cdn.jsdelivr.net'],
      'script-src': [SELF, NONCE],
      'connect-src': [SELF, 'https://localhost:5000'],
      'frame-ancestors': 'none',
    },
  })
)

app.use(helmet.frameguard())
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '../../shared/app/views'))
app.use(express.static(path.join(__dirname, '../../shared/app/public')))
app.use(express.static(path.join(__dirname, '/public')))

app.use('/', route)

https
  .createServer(httpsOptions, app)
  .listen(PORT, () => console.info(`Server:cookie:app running at port ${PORT}`))
