const User_col = require('../models/user')  // 引入模型层（schema）

// 登录
const login = async (ctx, next) => {
  const req = ctx.request.body
  // console.log(req);
  // 获取用户userId
  const user = await User_col.findOne({
    user_id: req.user_id
  })
  if (!user) {
    ctx.status = 200;
    ctx.body = {
      code: 0,
      msg: '账号不存在'
    }
    return;
  }

  if (req.pwd === user.user_pwd) {
    ctx.body = {
      code: 1,
      msg: '登录成功',
      data: user
    }
    return
  }
  ctx.body = {
    code: 0,
    msg: '密码错误'
  }
}

module.exports = {
  login
}