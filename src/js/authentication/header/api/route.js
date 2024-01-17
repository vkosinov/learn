const express = require('express')

const router = express.Router()

const { register } = require('./auth/register')
const { getUser } = require('./auth/get-user')
const { login } = require('./auth/login')
const { getUsers } = require('./auth/get-users')
const { deleteUser } = require('./auth/delete-user')

router.route('/register').post(register)
router.route('/login').post(login)

router.route('/get-user').get(getUser)
router.route('/get-users').get(getUsers)

router.route('/delete-user').delete(deleteUser)

module.exports = router
