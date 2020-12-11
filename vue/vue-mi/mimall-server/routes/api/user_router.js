const Router = require('koa-router')
const router = new Router()
const user_controller = require('../../app/controllers/user_controller.js')
const good_controller = require('../../app/controllers/good_controller.js')

router.post('/login', user_controller.login)
router.post('/register', user_controller.register)
router.post('/insert_goods', good_controller.insert)


module.exports = router