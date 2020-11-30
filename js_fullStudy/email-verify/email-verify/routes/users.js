const userCtrl = require('../controllers/userController.js') 
var router = require('koa-router')();

router.prefix('/users');

router.post('/user_regist', userCtrl.user_regist)

module.exports = router;
