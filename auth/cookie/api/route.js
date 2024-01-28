const express = require('express')

const { isAdminAuth } = require('./middleware/is-admin-auth')
const { isAuth } = require('./middleware/is-auth')

const router = express.Router()

const { login } = require('./auth/login')
const { logout } = require('./auth/logout')

const { register } = require('./user/register')
const { update } = require('./user/update')
const { deleteUser } = require('./user/delete-user')
const { getUsers } = require('./user/get-users')
const { recovery } = require('./user/recovery')
const { reset } = require('./user/reset')
const { getUser } = require('./user/get-user')

const { addComment } = require('./comments/add-comment')
const { getComments } = require('./comments/get-comments')

router.route('/login').post(login)
router.route('/logout').post(logout)

router.route('/register').post(register)
router.route('/recovery').post(recovery)
router.route('/reset').post(reset)

router.route('/update').put(isAdminAuth, update)
router.route('/delete-user').delete(isAdminAuth, deleteUser)

router.route('/users').get(isAdminAuth, getUsers)
router.route('/user').get(getUser)

router.route('/add-comment').post(isAuth, addComment)
router.route('/get-comments').get(getComments)

module.exports = router
