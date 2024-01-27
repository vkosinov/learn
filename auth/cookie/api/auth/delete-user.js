const User = require('../models/user')

exports.deleteUser = async (req, res) => {
  const { id } = req.body

  try {
    const user = await User.findById(id)

    await User.deleteOne({ _id: id })
    res.status(201).json({ message: 'User successfully deleted', user })
  } catch (error) {
    res.status(400).json({ message: 'An error occurred', error: error.message })
  }
}
