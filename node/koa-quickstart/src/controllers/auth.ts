import { Context } from 'koa'

export default class AuthController {
  public static async login(ctx: Context) {
    ctx.body = 'login controller'
  }
  public static async register(ctx: Context) {
    ctx.body = 'register controller'
  }
}