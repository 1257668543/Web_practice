const User_col = require('../models/user')  // 引入用户模型层（schema）
const Goods_col = require('../models/goods')// 引入商品模型层（schema）
const UserInfo_col = require('../models/userInfo')  // 引入用户信息模型层（schema）
const uuidv1 = require('uuid').v1
const goods = require('../models/goods')

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
  const newUserInfo = await UserInfo_col.create({
    user_id: userId,
    orders: [],
    address: [],
    cart: [],
    favor: [],
    assets: []
  })
  if (newUser && newUserInfo) {
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


// 更新商品收藏信息
const changeFavor = async (ctx, next) => {
  const gid = ctx.request.body.gid
  const uid = ctx.request.body.uid
  // 后端二次校验登录状态
  if (!uid) {
    ctx.status = 200;
    ctx.body = {
      code: 0,
      msg: '用户未登录，无法拉取收藏信息'
    }
    return
  }
  // 查找用户是否已收藏
  const userInfo = await UserInfo_col.findOne({
    user_id: uid
  })
  const favorArr = userInfo.favor 
  // 已收藏时判断为取消收藏，更新数据库
  if (favorArr.indexOf(gid) > -1) {
    favorArr.splice(favorArr.indexOf(gid), 1)
    await UserInfo_col.updateOne({user_id: uid}, {favor: favorArr})
    ctx.body = {
      code: 1,
      msg: '移除收藏成功！',
    }
    return;
  }
  // 未收藏状态，添加收藏，更新数据库
  const newFavorArr = favorArr.concat(gid);
  await UserInfo_col.updateOne({user_id: uid}, {favor: newFavorArr})
  ctx.body = {
    code: 1,
    msg: '加入收藏成功！',
  }
}


// 获取所有用户收藏
const fetchFavor = async (ctx, next) => {
  const uid = ctx.request.body.uid
  // 后端二次校验登录状态
  if (!uid) {
    ctx.status = 200;
    ctx.body = {
      code: 0,
      msg: '用户未登录，无法拉取收藏信息'
    }
    return
  }
  const userInfo = await UserInfo_col.findOne({
    user_id: uid
  })
  const favorArr = userInfo.favor
  const promiseArr = []
  for (let i = 0; i < favorArr.length; i++) {
    promiseArr.push(new Promise(async (resolve, reject) => {
      const goods = await Goods_col.findOne({
        goods_id: favorArr[i]
      })
      resolve(goods)
    }))
  }
  const res = await Promise.all(promiseArr).then(goodsArr => {
    return goodsArr
  })
  ctx.body = {
    code: 1,
    msg: '拉取用户所有收藏商品信息成功',
    data: res
  }
}

module.exports = {
  login,
  register,
  changeFavor,
  fetchFavor
}