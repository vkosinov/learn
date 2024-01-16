const express = require('express')

const router = express.Router()

const { register } = require('./auth/register')

router.route('/register').post(register)

module.exports = router
