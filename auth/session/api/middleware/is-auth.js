exports.isAuth = (req, res, next) => {
  if (req.session.userId) {
    res.locals.userId = req.session.userId

    next()
  } else {
    res.status(401).json({ message: 'Not authorized, session not available' })
  }
}
