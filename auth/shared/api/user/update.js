const User = require('../models/user')

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
