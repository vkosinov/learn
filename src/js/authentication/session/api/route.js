const express = require('express')

const router = express.Router()

const { login } = require('./auth/login')
const { getUser } = require('./auth/get-user')
const { requireAuth } = require('./middleware/require-auth')

router.route('/login').post(login)

router.route('/get-user').get(requireAuth, getUser)

module.exports = router
