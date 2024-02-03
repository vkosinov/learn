const express = require('express')

const { isAdminAuth } = require('./middleware/is-admin-auth')
const { isAuth } = require('./middleware/is-auth')
const { csrfProtection } = require('./middleware/csrf-protection')

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

router.route('/login').post(csrfProtection, login)
router.route('/logout').post(csrfProtection, logout)

router.route('/register').post(csrfProtection, register)
router.route('/recovery').post(csrfProtection, recovery)
router.route('/reset').post(csrfProtection, reset)

router.route('/update').put(csrfProtection, isAdminAuth, update)
router.route('/delete-user').delete(csrfProtection, isAdminAuth, deleteUser)

router.route('/users').get(isAdminAuth, getUsers)
router.route('/user').get(isAuth, getUser)

router.route('/add-comment').post(csrfProtection, isAuth, addComment)
router.route('/get-comments').get(isAuth, getComments)

module.exports = router
