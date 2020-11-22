const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = new Schema({
  user_id: {
    type: String,
    unique: true,
    require: true
  },
  user_name: {
    type: String
  },
  user_pwd: {
    type: String
  }
}, { collection: 'user', versionKey: false});

module.exports = mongoose.model('user', UserSchema);