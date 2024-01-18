const jwt = require('jsonwebtoken')

const { JWT_SECRET } = require('../../../shared/constants')
const { getToken } = require('../auth/utils')

exports.adminAuth = (req, res, next) => {
  const token = getToken(req)

  if (token) {
    jwt.verify(token, JWT_SECRET, (err, decodedToken) => {
      if (err) {
        return res.status(401).json({ message: 'Not authorized' })
      }
      if (decodedToken.role !== 'admin') {
        return res.status(403).json({ message: 'No access' })
      }
      next()
    })
  } else {
    return res
      .status(401)
      .json({ message: 'Not authorized, token not available' })
  }
}
