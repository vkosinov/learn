exports.isAdminAuth = (req, res, next) => {
  if (req.session.userId && req.session.userRole === 'admin') {
    res.locals.userId = req.session.userId

    next()
  } else {
    res.status(401).json({ message: 'No admin' })
  }
}
