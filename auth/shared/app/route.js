const express = require('express')
const router = express.Router()

router.route('/').get((req, res) => {
  res.render('pages/login')
})

router.route('/user').get((req, res) => {
  res.render('pages/user')
})

router.route('/recovery').get((req, res) => {
  res.render('pages/recovery')
})

router.route('/reset').get((req, res) => {
  res.render('pages/reset')
})

router.route('/users').get((req, res) => {
  res.render('pages/users')
})

router.route('/registration').get((req, res) => {
  res.render('pages/register')
})

router.route('/comments').get((req, res) => {
  res.render('pages/comments')
})

module.exports = router
