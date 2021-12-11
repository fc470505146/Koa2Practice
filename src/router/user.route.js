const Router = require('koa-router')
const router = Router({ prefix: '/users' })
const { login, register } = require('../controller/user.controller')

router.post('/register', register)

router.post('/login',login)
module.exports = router