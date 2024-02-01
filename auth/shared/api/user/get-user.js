const User = require('../models/user')

exports.getUser = async (req, res) => {
  try {
    const id = res.locals.userId

    const user = await User.findById(id)

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
    res.status(401).json({ message: 'Error', error: error.message })
  }
}
