const router = require('express').Router()
const User = require('../controllers/user.js')

router.post('/register', User.register)
router.post('/login', User.login)

module.exports = router