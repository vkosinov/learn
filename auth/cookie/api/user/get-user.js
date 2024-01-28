const jwt = require('jsonwebtoken')
const User = require('../models/user')

const { JWT_SECRET } = require('../constants')

exports.getUser = async (req, res) => {
  const token = req.cookies.jwt

  if (token) {
    jwt.verify(token, JWT_SECRET, async (err, decodedToken) => {
      if (err) {
        return res
          .status(401)
          .json({ message: 'Не удалось верифицировать токен' })
      }

      try {
        const user = await User.findById(decodedToken.id)

        if (!user) {
          return res.status(401).json({ message: 'Пользователь не найден' })
        }

        const container = {
          username: user.username,
          id: user.id,
          role: user.role,
          email: user.email,
        }

        return res.status(200).json({ user: container })
      } catch (error) {
        res.status(401).json({ message: 'Unauthorized', error: error.message })
      }
    })
  } else {
    return res
      .status(401)
      .json({ message: 'Not authorized, token not available' })
  }
}
