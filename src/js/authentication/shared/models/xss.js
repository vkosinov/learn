const mongoose = require('mongoose')

const { Schema } = mongoose

const xssSchema = new Schema({
  token: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 3600,
  },
})

module.exports = mongoose.model('xss', xssSchema)
