const jwt = require('jsonwebtoken')

const { JWT_SECRET, MAX_AGE } = require('../../../shared/api/constants')

exports.isAuth = (req, res, next) => {
  const token = req.cookies.jwt

  if (token) {
    jwt.verify(token, JWT_SECRET, (err, decodedToken) => {
      if (err) {
        return res.status(401).json({ message: 'Not authorized' })
      }

      res.locals.userId = decodedToken.id

      next()
    })
  } else {
    return res
      .status(401)
      .json({ message: 'Not authorized, token not available' })
  }
}
