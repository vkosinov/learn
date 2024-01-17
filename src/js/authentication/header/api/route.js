const express = require('express')

const router = express.Router()

const { register } = require('./auth/register')
const { getUser } = require('./auth/get-user')
const { login } = require('./auth/login')

router.route('/register').post(register)
router.route('/login').post(login)
router.route('/get-user').get(getUser)

module.exports = router
