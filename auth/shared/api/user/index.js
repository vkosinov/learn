const { register } = require('./register')
const { update } = require('./update')
const { deleteUser } = require('./delete-user')
const { getUsers } = require('./get-users')
const { recovery } = require('./recovery')
const { reset } = require('./reset')
const { getUser } = require('./get-user')

module.exports = {
  register,
  update,
  deleteUser,
  getUsers,
  recovery,
  reset,
  getUser,
}
