const router = require('express').Router()
const {signUp} = require('./Signup/signup')
const {login} = require('./Login/login')

router.post('/signup', signUp)
router.post('/login', login)

module.exports = router