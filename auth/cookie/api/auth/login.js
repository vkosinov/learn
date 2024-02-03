const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../../../shared/api/models/user')

const { JWT_SECRET, MAX_AGE } = require('../../../shared/api/constants')

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
        const token = jwt.sign(
          { id: user._id, username, role: user.role },
          JWT_SECRET,
          {
            expiresIn: MAX_AGE,
          }
        )

        res.cookie('jwt', token, {
          httpOnly: true,
          maxAge: MAX_AGE * 1000,
          sameSite: 'strict',
          secure: true,
        })

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
