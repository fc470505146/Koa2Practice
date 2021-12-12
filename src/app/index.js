const Koa=require('koa')
const app=new Koa()
const path=require('path')
const koa_body=require('koa-body')
const serve=require('koa-static')
const userRouter=require('../router/user.route')

app.use(serve(path.resolve('public')))

console.log(path.resolve('public'));
app.use(koa_body())
app.use(userRouter.routes())

module.exports=app