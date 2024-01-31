const Comment = require('../models/comment')

exports.getComments = async (req, res) => {
  await Comment.find({})
    .then((comments) => {
      const commentFunction = comments.map((comment) => {
        const container = {}
        container.id = comment.id
        container.content = comment.content
        container.createdAt = comment.createdAt
        return container
      })
      res.status(200).json({ comments: commentFunction })
    })
    .catch((err) =>
      res.status(401).json({ message: 'Not successful', error: err.message })
    )
}
