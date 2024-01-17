const jwt = require('jsonwebtoken')
const User = require('../../../shared/models/user')

const { JWT_SECRET } = require('../../../shared/constants')

exports.getUser = async (req, res) => {
  const token = req.headers.authorization.split(' ')[1]

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
        return res
          .status(401)
          .json({ message: 'Unauthorized', error: error.message })
      }
    })
  } else {
    return res
      .status(401)
      .json({ message: 'Not authorized, token not available' })
  }
}
