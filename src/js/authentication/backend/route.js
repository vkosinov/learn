const express = require('express')

const { adminAuth } = require('./middleware')

const router = express.Router()
const { register, login, update, deleteUser } = require('./auth')

router.route('/register').post(register)
router.route('/login').post(login)
router.route('/update').put(adminAuth, update)
router.route('/delete-user').delete(adminAuth, deleteUser)

module.exports = router
