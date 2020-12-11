const mongoose = require('mongoose')

const Schema = mongoose.Schema

const GoodsSchema = new Schema({
  goods_name: {
    type: String,
    require: true
  },
  goods_price: {
    type: String,
    require: true
  },
  goods_id: {
    type: String,
    unique: true,
    require: true
  },
  goods_desc: {
    type: String
  },
  goods_picArr: {
    type: Array
  },
  goods_categories: {
    type: String
  }
}, { collection: 'goods', versionKey: false});

module.exports = mongoose.model('goods', GoodsSchema);