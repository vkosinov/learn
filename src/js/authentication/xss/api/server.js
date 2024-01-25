const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')

const connectDB = require('../../shared/db')

connectDB()

const app = express()

app.use(cors({ origin: 'http://localhost:8080', credentials: true }))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

app.use('/', require('./route'))

const PORT = 7000

const server = app.listen(PORT, () =>
  console.info(`Server Running at port ${PORT}`)
)

process.on('unhandledRejection', (err) => {
  console.error(`An error occurred: ${err.message}`)

  server.close(() => process.exit(1))
})
