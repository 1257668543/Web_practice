const User_col = require('../models/user')  // 引入用户模型层（schema）
const Favor_col = require('../models/favor')  // 引入收藏模型层（schema）
const uuidv1 = require('uuid').v1

// 登录
const login = async (ctx, next) => {
  const req = ctx.request.body
  // 获取用户userId
  const user = await User_col.findOne({
    user_account: req.user_account
  })
  if (!user) {
    ctx.status = 200;
    ctx.body = {
      code: 0,
      msg: '账号不存在'
    }
    return;
  }
  if (req.user_pwd === user.user_pwd) {
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

// 注册
const register = async (ctx, next) => {
  // 判断当前账号是否可注册
  const req = ctx.request.body
  console.log(req.user_account, req.user_nickname);
  // 获取用户userId
  const user = await User_col.findOne({
    user_account: req.user_account
  })
  ctx.status = 200;
  if (user) {
    ctx.body = {
      code: 0,
      msg: '用户名已被注册'
    }
    return
  }
  // 插入用户
  const userId = uuidv1()
  const newUser = await User_col.create({
    user_id: userId,
    user_account: req.user_account,
    user_nickname: req.user_nickname,
    user_pwd: req.user_pwd
  })
  if (newUser) {
    ctx.body = {
      code: 1,
      msg: '注册成功',
      data: {
        account: newUser.user_account,
        nickname: newUser.user_nickname,
        userId: newUser.user_id
      }
    }
  } else {
    ctx.body = {
      code: 0,
      msg: '注册失败'
    }
  }
}


const changeFavor = async (ctx, next) => {
  const gid = ctx.request.body.gid
  const uid = ctx.request.body.uid
  // 查找用户是否已收藏
  const favor = await Favor_col.findOne({
    uid: uid,
    gid: gid
  })
  if (favor) {
    let error = null;
    await Favor_col.deleteOne({
      uid: uid,
      gid: gid
    }, (err) => {
      error = err
    })
    if (error) {
      ctx.body = {
        code: 0,
        msg: '取消收藏失败'
      }
      return;
    }
    ctx.body = {
      code: 1,
      msg: '取消收藏成功'
    }
    return;
  }
  // 未收藏情况下插入数据
  const newFavor = await Favor_col.create({
    uid: uid,
    gid: gid
  })
  if (newFavor) {
    ctx.body = {
      code: 1,
      msg: '收藏成功'
    }
    return;
  }
  ctx.body = {
    code: 0,
    msg: '添加收藏失败'
  }
}

module.exports = {
  login,
  register,
  changeFavor
}