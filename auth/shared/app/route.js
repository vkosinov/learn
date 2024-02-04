const express = require('express')
const router = express.Router()

router.route('/').get((req, res) => {
  res.render('pages/login', { nonce: req.nonce })
})

router.route('/user').get((req, res) => {
  res.render('pages/user', { nonce: req.nonce })
})

router.route('/recovery').get((req, res) => {
  res.render('pages/recovery', { nonce: req.nonce })
})

router.route('/reset').get((req, res) => {
  res.render('pages/reset', { nonce: req.nonce })
})

router.route('/users').get((req, res) => {
  res.render('pages/users', { nonce: req.nonce })
})

router.route('/registration').get((req, res) => {
  res.render('pages/register', { nonce: req.nonce })
})

router.route('/comments').get((req, res) => {
  res.render('pages/comments', { nonce: req.nonce })
})

module.exports = router
