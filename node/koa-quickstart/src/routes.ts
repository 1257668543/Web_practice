import Router from '@koa/router'
import AuthController from './controllers/auth'
import UserController from './controllers/user'

const router = new Router()

router.post('/auth/login', AuthController.login)
router.post('/auth/register', AuthController.register)


export default router