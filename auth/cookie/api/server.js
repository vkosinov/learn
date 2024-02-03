const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const https = require('https')
const fs = require('fs')
const path = require('path')

const PORT = 5000

const httpsOptions = {
  key: fs.readFileSync(path.join(__dirname, '../../../cert/key.pem')),
  cert: fs.readFileSync(path.join(__dirname, '../../../cert/cert.pem')),
}

const connectDB = require('../../shared/api/db')

connectDB()

const app = express()

app.use(cors({ origin: 'https://localhost:8000', credentials: true }))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cookieParser())

app.use('/api', require('./route'))

const server = https
  .createServer(httpsOptions, app)
  .listen(PORT, () => console.info(`Server:cookie:api running at port ${PORT}`))

// Handling Error
process.on('unhandledRejection', (err) => {
  console.error(`An error occurred: ${err.message}`)

  server.close(() => process.exit(1))
})
