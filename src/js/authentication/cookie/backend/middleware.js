const jwt = require('jsonwebtoken')

const { JWT_SECRET } = require('./constants')

exports.adminAuth = (req, res, next) => {
  const token = req.cookies.jwt

  if (token) {
    jwt.verify(token, JWT_SECRET, (err, decodedToken) => {
      if (err) {
        return res.status(401).json({ message: 'Not authorized' })
      }
      if (decodedToken.role !== 'admin') {
        return res.status(401).json({ message: 'Not authorized' })
      }
      next()
    })
  } else {
    return res
      .status(401)
      .json({ message: 'Not authorized, token not available' })
  }
}

exports.userAuth = (req, res, next) => {
  const token = req.cookies.jwt

  if (token) {
    jwt.verify(token, JWT_SECRET, (err, decodedToken) => {
      if (err) {
        return res.status(401).json({ message: 'Not authorized' })
      }
      if (decodedToken.role !== 'basic') {
        return res.status(401).json({ message: 'Not authorized' })
      }
      next()
    })
  } else {
    return res
      .status(401)
      .json({ message: 'Not authorized, token not available' })
  }
}
