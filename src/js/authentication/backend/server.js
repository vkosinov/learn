const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')

const connectDB = require('./db')
const { adminAuth, userAuth } = require('./middleware')

// Connecting DB
connectDB()

const app = express()

app.use(cors({ origin: 'http://localhost:8080', credentials: true }))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cookieParser())

app.get('/admin', adminAuth, (req, res) => res.send('Admin Route'))
app.get('/basic', userAuth, (req, res) => res.send('User Route'))

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
