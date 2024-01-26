const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../../../shared/models/user')

const { JWT_SECRET, MAX_AGE } = require('../../../shared/constants')

exports.register = async (req, res) => {
  const { username, password, email } = req.body

  if (!username || !password || !email) {
    return res.status(400).json({
      message: 'Username or Password or Email not present',
    })
  }

  try {
    const hash = await bcrypt.hash(password, 10)

    const user = await User.create({ username, password: hash, email })

    const token = jwt.sign(
      { id: user._id, username, role: user.role },
      JWT_SECRET,
      {
        expiresIn: MAX_AGE,
      }
    )

    res
      .status(201)
      .json({ message: 'User successfully created', user: user._id, token })
  } catch (err) {
    res.status(400).json({
      message: 'User not successful created',
      error: err.message,
    })
  }
}
