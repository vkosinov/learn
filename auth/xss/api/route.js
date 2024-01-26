const express = require('express')

const router = express.Router()

const { xss } = require('./xss')

router.route('/xss').get(xss)
router.route('/xss').post(xss)

module.exports = router
