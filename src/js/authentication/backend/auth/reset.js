const bcrypt = require('bcryptjs')
const User = require('../models/user')
const Token = require('../models/token')

const { MAX_TOKEN_AGE } = require('../constants')

exports.reset = async (req, res) => {
  const { password, token, id } = req.body

  try {
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: 'Пароль должен состоять минимум из 6 символов' })
    }

    const foundToken = await Token.findOne({ token })

    if (!foundToken) {
      return res.status(400).json({ message: 'Невалидный токен' })
    }

    const user = await User.findById(id)

    if (!user) {
      return res.status(400).json({ message: 'Пользователь не найден' })
    }

    const timeDiff = Math.abs(
      foundToken.createdAt.getTime() - new Date().getTime()
    )

    const diff = Math.ceil(timeDiff / 1000)

    if (diff > MAX_TOKEN_AGE) {
      await Token.deleteOne({ token })

      return res.status(400).json({ message: 'Истекло время действия токена' })
    }

    const hash = await bcrypt.hash(password, 10)

    user.password = hash
    await user.save()

    return res.status(200).json({ message: 'Пароль успешно изменен' })
  } catch (err) {
    res.status(400).json({
      message: 'An error occurred',
      error: err.message,
    })
  }
}
