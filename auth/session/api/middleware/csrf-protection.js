const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require('../../../shared/api/constants')

exports.csrfProtection = (req, res, next) => {
  const token = req.headers['x-csrf-token']

  if (token) {
    jwt.verify(token, JWT_SECRET, (err) => {
      if (err) {
        return res.status(401).json({ message: 'Not valid x-csrf-token' })
      }

      next()
    })
  } else {
    return res.status(400).json({ message: 'Not x-csrf-token header' })
  }
}
