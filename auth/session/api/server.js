const express = require('express')
const cors = require('cors')
const sessions = require('express-session')
const { JWT_SECRET } = require('../../shared/constants')

const connectDB = require('../../shared/db')

connectDB()

const app = express()

app.use(
  sessions({
    secret: JWT_SECRET,
    cookie: {
      maxAge: 1000 * 60 * 60 * 2, // 2 hours
      // secure: true, // https
    },
    resave: true,
    saveUninitialized: false,
  })
)

app.use(cors({ origin: 'http://localhost:8080', credentials: true }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api', require('./route'))

const PORT = 5000

const server = app.listen(PORT, () =>
  console.info(`Server Running at port ${PORT}`)
)

process.on('unhandledRejection', (err) => {
  console.error(`An error occurred: ${err.message}`)

  server.close(() => process.exit(1))
})
