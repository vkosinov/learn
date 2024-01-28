const User = require('../models/user')

exports.getUsers = async (req, res) => {
  await User.find({})
    .then((users) => {
      const userFunction = users.map((user) => {
        const container = {}
        container.username = user.username
        container.role = user.role
        container.id = user.id
        container.email = user.email
        return container
      })
      res.status(200).json({ users: userFunction })
    })
    .catch((err) =>
      res.status(401).json({ message: 'Not successful', error: err.message })
    )
}
