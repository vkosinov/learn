exports.requireAuth = (req, res, next) => {
  if (req.session.userId) {
    next()
  } else {
    res.status(401).json({ message: 'Not authorized, session not available' })
  }
}
