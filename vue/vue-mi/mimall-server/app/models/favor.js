const mongoose = require('mongoose')

const Schema = mongoose.Schema

const FavorSchema = new Schema({
  uid: {
    type: String,
    required: true
  },
  gid: {
    type: String,
    required: true
  }
}, { collection: 'favor', versionKey: false});

module.exports = mongoose.model('favor', FavorSchema);