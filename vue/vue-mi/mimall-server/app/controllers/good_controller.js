const Goods_col = require('../models/goods')// 引入商品模型层（schema）
const uuidv1 = require('uuid').v1

// 插入商品
const insert = async (ctx, next) => {
  const req = ctx.request.body.G_form
  console.log(req);
  const G_id = uuidv1()
  const newGood = await Goods_col.create({
    goods_name: req.G_name,
    goods_price: req.G_price,
    goods_id: G_id,
    goods_desc: req.G_desc,
    goods_showPic: req.G_showPic,
    goods_picArr: req.G_picArr,
    goods_categories: req.G_categories
  })
  if (newGood) {
    ctx.body = {
      code: 1,
      msg: '添加成功',
      data: {
        name: newGood.goods_name,
        price: newGood.goods_price,
        desc: newGood.goods_desc,
        id: newGood.goods_id,
        showPic: newGood.goods_showPic,
        picArr: newGood.goods_picArr,
        categories: newGood.goods_categories
      }
    }
  } else {
    ctx.body = {
      code: 0,
      msg: '注册失败'
    }
  }
}

// 获取所有商品
const getAll = async (ctx, next) => {
  let data = [], errmsg = null
  await Goods_col.find({}, (err, doc) => {
    if (err) {
      errmsg = err
      return
    }
    data = doc 
  })
  if (errmsg) {
    ctx.body = {
      code: 0,
      msg: '查询失败'
    }
    return
  }
  ctx.body = {
    code: 1,
    msg: '查询成功',
    data: JSON.stringify(data)
  }
}

// 获取指定类别商品
const fetch = async (ctx, next) => {
  let data = [], errmsg = null
  const category = ctx.request.body.type
  await Goods_col.find({goods_categories: category}, (err, doc) => {
    if (err) {
      errmsg = err
      return
    }
    data = doc
  })
  if (errmsg) {
    ctx.body = {
      code: 0,
      msg: '查询失败'
    }
    return
  }
  ctx.body = {
    code: 1,
    msg: '查询成功',
    data: JSON.stringify(data)
  }
}

// 搜索相关商品
const search = async (ctx, next) => {
  let data = [], errmsg = null
  const keyword = ctx.request.body.keyword
  let regexp = new RegExp(keyword, 'i')
  await Goods_col.find({goods_name: regexp}, (err, doc) => {
    if (err) {
      errmsg = err
      return
    }
    data = doc
  })
  if (errmsg) {
    ctx.body = {
      code: 0,
      msg: '查询失败'
    }
    return
  }
  ctx.body = {
    code: 1,
    msg: '查询成功',
    data: JSON.stringify(data)
  }
}


module.exports = {
  insert,
  getAll,
  fetch,
  search
}