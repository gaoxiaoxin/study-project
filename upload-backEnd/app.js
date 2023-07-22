const Koa = require('koa');
require("./utils/log4js")
const app = new Koa()

app.use(async ctx => {
    ctx.body = 'Hello World'
})

app.listen(3000, () => {
    console.log('服务已启动在http://localhost:3000');
})