const router =  require('express').Router()
const user = require('./users.js')
const definition = require('./dictionaryRoute.js')
// const book = require('./books.js')

router.use('/users', user)
// router.use('./books', book)
router.use('/definitions', definition)

module.exports = router
