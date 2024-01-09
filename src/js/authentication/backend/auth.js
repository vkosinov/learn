const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('./user')

const { JWT_SECRET, MAX_AGE } = require('./constants')

exports.register = async (req, res) => {
  const { username, password } = req.body

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

    const user = await User.create({ username, password: hash })

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
            expiresIn: MAX_AGE, // 3hrs in sec
          }
        )

        res.cookie('jwt', token, {
          httpOnly: true,
          maxAge: MAX_AGE * 1000, // 3hrs in ms
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

exports.update = async (req, res) => {
  const { role, id } = req.body

  if (role && id) {
    if (role === 'admin') {
      try {
        const user = await User.findById(id)

        if (user.role !== 'admin') {
          user.role = role

          const result = await user.save()

          res.status('201').json({ message: 'Update successful', result })
        } else {
          res.status(400).json({ message: 'User is Already an Admin' })
        }
      } catch (error) {
        res
          .status(400)
          .json({ message: 'An error occurred', error: error.message })
      }
    } else {
      res.status(400).json({ message: 'Role is not admin' })
    }
  } else {
    res.status(400).json({ message: 'Role or id not present' })
  }
}

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

exports.getUsers = async (req, res) => {
  await User.find({})
    .then((users) => {
      const userFunction = users.map((user) => {
        const container = {}
        container.username = user.username
        container.role = user.role
        container.id = user.id
        return container
      })
      res.status(200).json({ user: userFunction })
    })
    .catch((err) =>
      res.status(401).json({ message: 'Not successful', error: err.message })
    )
}

exports.logout = (req, res) => {
  res.cookie('jwt', '', { httpOnly: true, maxAge: '1' })
  res.status(200).json({ message: 'logout success' })
}
