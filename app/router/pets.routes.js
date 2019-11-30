const Router = require('koa-router')
const router = new Router({ prefix: '/pets' })
const pets = require('../controller/pets.controller')

router.get('/', pets.list)
router.post('/', pets.add)
router.get('/:name', pets.show)
router.delete('/:name', pets.remove)

module.exports = app => {
  app.use(router.routes()).use(router.allowedMethods())
}
