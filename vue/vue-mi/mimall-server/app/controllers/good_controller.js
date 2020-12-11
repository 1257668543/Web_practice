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

module.exports = {
  insert
}