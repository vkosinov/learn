const User = require('../../../shared/models/user')

exports.getUser = async (req, res) => {
  const { userId } = req.session

  try {
    const user = await User.findById(userId)

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
}
