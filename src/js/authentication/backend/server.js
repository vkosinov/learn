const express = require('express')
const cors = require('cors')

const connectDB = require('./db')

// Connecting DB
connectDB()

const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use('/api/auth', require('./route'))

const PORT = 5000

const server = app.listen(PORT, () =>
  console.info(`Server Connected to port ${PORT}`)
)

// Handling Error
process.on('unhandledRejection', (err) => {
  console.error(`An error occurred: ${err.message}`)

  server.close(() => process.exit(1))
})