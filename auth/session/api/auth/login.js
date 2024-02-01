const bcrypt = require('bcryptjs')

const User = require('../../../shared/api/models/user')

exports.login = async (req, res) => {
  const { username, password } = req.body

  try {
    const user = await User.findOne({ username })

    if (!user) {
      res
        .status(401)
        .json({ message: 'Login not successful', error: 'User not found' })
    } else {
      const result = await bcrypt.compare(password, user.password)

      if (result) {
        req.session.userId = user._id
        req.session.userRole = user.role

        res.status(201).json({
          message: 'User successfully Logged in',
          user: user._id,
        })
      } else {
        res.status(400).json({ message: 'Login not successful' })
      }
    }
  } catch (err) {
    res.status(400).json({
      message: 'An error occurred',
      error: err.message,
    })
  }
}
