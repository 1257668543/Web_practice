const Router = require('koa-router')
const router = new Router()
const goods_controller = require('../../app/controllers/goods_controller.js')


router.post('/goods/insert_goods', goods_controller.insert)
router.get('/goods/getAll_goods', goods_controller.getAll)
router.post('/goods/fetch_selectedGoods', goods_controller.fetch)
router.post('/goods/searchGoods', goods_controller.search)
router.post('/goods/getDetail', goods_controller.getDetail)


module.exports = router