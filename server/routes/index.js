const router =  require('express').Router()
const user = require('./users.js')
// const book = require('./books.js')

router.use('/users', user)
// router.use('./books', book)

module.exports = router
