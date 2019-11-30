const bodyParser = require('koa-bodyparser')
const helmet = require('koa-helmet')
const Koa = require('koa')

const app = new Koa()
const router = require('./router/pets.routes')

app.on('error', (err, ctx) => {
  ctx.status = err.status || 500
  err.expose = true
  ctx.body = err.message
})

app.use(bodyParser())

app.use(helmet())

router(app)

module.exports = app
