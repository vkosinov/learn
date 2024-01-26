const express = require('express')
const cors = require('cors')
const connectDB = require('../../shared/db')

connectDB()

const app = express()

app.use(cors({ origin: 'http://localhost:8080', credentials: true }))
app.use(express.json())

app.use('/api', require('./route'))

const PORT = 5000

const server = app.listen(PORT, () =>
  console.info(`Server Connected to port ${PORT}`)
)

process.on('unhandledRejection', (err) => {
  console.error(`An error occurred: ${err.message}`)

  server.close(() => process.exit(1))
})
