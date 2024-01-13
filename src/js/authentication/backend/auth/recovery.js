const crypto = require('crypto')
const User = require('../models/user')
const Token = require('../models/token')

exports.recovery = async (req, res) => {
  const { email } = req.body

  try {
    const user = await User.findOne({ email })

    if (!user) {
      res.status(401).json({ message: 'User not found' })
    } else {
      let token = await Token.findOne({ id: user._id })

      if (!token) {
        const newToken = crypto.randomBytes(32).toString('hex')

        token = await new Token({ id: user._id, token: newToken }).save()
      }

      res.status(200).json({ id: user._id, token: token.token })
    }
  } catch (err) {
    res.status(400).json({
      message: 'An error occurred',
      error: err.message,
    })
  }
}
