const Router = require('koa-router')
const router = new Router()
const user_controller = require('../../app/controllers/user_controller.js')
const good_controller = require('../../app/controllers/good_controller.js')

router.post('/user/login', user_controller.login)
router.post('/user/register', user_controller.register)
router.post('/goods/insert_goods', good_controller.insert)
router.get('/goods/getAll_goods', good_controller.getAll)


module.exports = router