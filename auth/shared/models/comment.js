const mongoose = require('mongoose')

const { Schema } = mongoose

const commentSchema = new Schema({
  id: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'user',
  },
  content: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 3600,
  },
})

module.exports = mongoose.model('comment', commentSchema)
