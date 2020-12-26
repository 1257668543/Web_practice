const Router = require('koa-router')
const router = new Router()
const user_controller = require('../../app/controllers/user_controller.js')


router.post('/user/login', user_controller.login)
router.post('/user/register', user_controller.register)
router.post('/user/changeFavor', user_controller.changeFavor)
router.post('/user/fetchFavor', user_controller.fetchFavor)


module.exports = router