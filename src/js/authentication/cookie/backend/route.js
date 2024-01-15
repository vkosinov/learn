const express = require('express')

const { adminAuth, userAuth } = require('./middleware')

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

router.route('/register').post(register)
router.route('/login').post(login)
router.route('/logout').post(logout)
router.route('/recovery').post(recovery)
router.route('/reset').post(reset)

router.route('/update').put(adminAuth, update)
router.route('/delete-user').delete(adminAuth, deleteUser)

router.route('/get-users').get(getUsers)
router.route('/get-user').get(getUser)

module.exports = router
