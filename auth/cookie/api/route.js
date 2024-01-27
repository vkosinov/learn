const express = require('express')

const { adminAuth, isAuth } = require('./middleware')

const router = express.Router()
const { register } = require('./auth/register')
const { login } = require('./auth/login')
const { update } = require('./auth/update')
const { deleteUser } = require('./auth/delete-user')
const { getUsers } = require('./auth/get-users')
const { logout } = require('./auth/logout')
const { recovery } = require('./auth/recovery')
const { reset } = require('./auth/reset')
const { getUser } = require('./auth/get-user')
const { addComment } = require('./comments/add-comment')
const { getComments } = require('./comments/get-comments')

router.route('/register').post(register)
router.route('/login').post(login)
router.route('/logout').post(logout)
router.route('/recovery').post(recovery)
router.route('/reset').post(reset)

router.route('/update').put(adminAuth, update)
router.route('/delete-user').delete(adminAuth, deleteUser)

router.route('/users').get(getUsers)
router.route('/user').get(getUser)

router.route('/add-comment').post(isAuth, addComment)
router.route('/get-comments').get(getComments)

module.exports = router
