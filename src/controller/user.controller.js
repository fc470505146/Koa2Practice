const { createUser } = require('../service/user.service')
class UserController {
    async register(ctx, next) {
        const { username, password } = ctx.request.body
        ctx.body = await createUser(username, password)
    }
    async login(ctx, next) {
        ctx.body = "登录成功"
    }
}

module.exports = new UserController()