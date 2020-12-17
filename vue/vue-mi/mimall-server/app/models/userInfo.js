const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userInfoSchema = new Schema({
  user_id: {
    type: String,
    required: true,
    unique: true
  },
  orders: {
    type: Array,
    required: true
  },
  address: {
    type: Array,
    required: true
  },
  cart: {
    type: Array,
    required: true
  },
  favor: {
    type: Array,
    required: true
  },
  assets: {
    type: Array,
    required: true    
  }
}, { collection: 'userInfo', versionKey: false});

module.exports = mongoose.model('userInfo', userInfoSchema);