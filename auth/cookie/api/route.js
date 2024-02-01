const express = require('express')

const { isAdminAuth } = require('./middleware/is-admin-auth')
const { isAuth } = require('./middleware/is-auth')

const router = express.Router()

const { login } = require('./auth/login')
const { logout } = require('./auth/logout')

const {
  register,
  update,
  deleteUser,
  getUsers,
  recovery,
  reset,
  getUser,
} = require('../../shared/api/user/index')

const { addComment, getComments } = require('../../shared/api/comments/index')

router.route('/login').post(login)
router.route('/logout').post(logout)

router.route('/register').post(register)
router.route('/recovery').post(recovery)
router.route('/reset').post(reset)

router.route('/update').put(isAdminAuth, update)
router.route('/delete-user').delete(isAdminAuth, deleteUser)

router.route('/users').get(isAdminAuth, getUsers)
router.route('/user').get(isAuth, getUser)

router.route('/add-comment').post(isAuth, addComment)
router.route('/get-comments').get(isAuth, getComments)

module.exports = router
