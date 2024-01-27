const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../models/user')

const { JWT_SECRET, MAX_AGE } = require('../constants')

exports.register = async (req, res) => {
  const { username, password, email } = req.body

  if (!username || !password) {
    return res.status(400).json({
      message: 'Username or Password not present',
    })
  }

  if (password.length < 6) {
    return res.status(400).json({ message: 'Password less than 6 characters' })
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

    res.cookie('jwt', token, {
      httpOnly: true,
      maxAge: MAX_AGE * 1000, // 3hrs in ms
    })

    res
      .status(201)
      .json({ message: 'User successfully created', user: user._id })
  } catch (err) {
    res.status(400).json({
      message: 'User not successful created',
      error: err.message,
    })
  }
}
