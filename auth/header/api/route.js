const express = require('express')

const router = express.Router()

const { register } = require('./auth/register')
const { getUser } = require('./auth/get-user')
const { login } = require('./auth/login')
const { getUsers } = require('./auth/get-users')
const { deleteUser } = require('./auth/delete-user')
const { adminAuth } = require('./middleware/admin-auth')
const { addComment } = require('./comments/add-comment')
const { getComments } = require('./comments/get-comments')
const { isAuth } = require('./middleware/is-auth')

router.route('/register').post(register)
router.route('/login').post(login)

router.route('/user').get(getUser)
router.route('/get-users').get(adminAuth, getUsers)

router.route('/delete-user').delete(adminAuth, deleteUser)

router.route('/add-comment').post(isAuth, addComment)
router.route('/get-comments').get(getComments)

module.exports = router
