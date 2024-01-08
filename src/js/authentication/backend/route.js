const express = require('express')

const { adminAuth } = require('./middleware')

const router = express.Router()
const { register, login, update, deleteUser, getUsers } = require('./auth')

router.route('/register').post(register)
router.route('/login').post(login)
router.route('/update').put(adminAuth, update)
router.route('/delete-user').delete(adminAuth, deleteUser)
router.route('/get-users').get(getUsers)

module.exports = router
