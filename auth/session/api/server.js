const express = require('express')
const cors = require('cors')
const sessions = require('express-session')
const https = require('https')
const fs = require('fs')
const path = require('path')

const { JWT_SECRET } = require('../../shared/api/constants')

const connectDB = require('../../shared/api/db')

const httpsOptions = {
  key: fs.readFileSync(path.join(__dirname, '../../../cert/key.pem')),
  cert: fs.readFileSync(path.join(__dirname, '../../../cert/cert.pem')),
}

const PORT = 5000

connectDB()

const app = express()

app.use(
  sessions({
    secret: JWT_SECRET,
    cookie: {
      maxAge: 1000 * 60 * 60 * 2, // 2 hours
      secure: true,
      sameSite: 'strict',
    },
    resave: true,
    saveUninitialized: false,
  })
)

app.use(cors({ origin: 'https://localhost:8000', credentials: true }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', require('./route'))

https
  .createServer(httpsOptions, app)
  .listen(PORT, () =>
    console.info(`Server:session:api running at port ${PORT}`)
  )

process.on('unhandledRejection', (err) => {
  console.error(`An error occurred: ${err.message}`)

  server.close(() => process.exit(1))
})
