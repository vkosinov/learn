const User = require('../models/user')

exports.deleteUser = async (req, res) => {
  const { id } = req.body

  try {
    const user = await User.findById(id)

    if (user) {
      await User.deleteOne({ _id: id })
      res.status(201).json({ message: 'Пользователь успешно удален', user })
    } else {
      res.status(400).json({ message: 'Пользователь не найден' })
    }
  } catch (error) {
    res.status(400).json({ message: 'An error occurred', error: error.message })
  }
}
