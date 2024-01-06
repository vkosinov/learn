const User = require('./user')

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
    return await User.create({ username, password }).then((user) =>
      res.status(200).json({ message: 'User successfully created', user })
    )
  } catch (err) {
    res.status(401).json({
      message: 'User not successful created',
      error: err.message,
    })
  }
}

exports.login = async (req, res) => {
  const { username, password } = req.body

  try {
    const user = await User.findOne({ username, password })

    if (!user) {
      res
        .status(401)
        .json({ message: 'Login not successful', error: 'User not found' })
    } else {
      res.status(200).json({
        message: 'Login successful',
        user,
      })
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
