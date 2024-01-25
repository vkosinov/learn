const Comment = require('../../../shared/models/comment')

exports.addComment = async (req, res) => {
  const { content } = req.body
  const { userId } = res.locals

  try {
    const comment = await Comment.create({ content, id: userId })

    res.status(201).json({ message: 'Comment successfully created', comment })
  } catch (err) {
    res.status(400).json({
      message: 'An error occurred',
      error: err.message,
    })
  }
}
