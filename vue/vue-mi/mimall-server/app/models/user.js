const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = new Schema({
  user_account: {
    type: String,
    require: true
  },
  user_nickname: {
    type: String
  },
  user_pwd: {
    type: String
  }
}, { collection: 'user', versionKey: false});

module.exports = mongoose.model('user', UserSchema);