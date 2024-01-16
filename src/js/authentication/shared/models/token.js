const mongoose = require('mongoose')

const { Schema } = mongoose

const tokenSchema = new Schema({
  id: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'user',
  },
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

module.exports = mongoose.model('token', tokenSchema)
