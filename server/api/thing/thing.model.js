'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BookSchema = new Schema({
  date: String,
  name: String,
  appid: Number,
  classify: String,
  audio: Boolean,
  content: Boolean,
  cover: Boolean,
  upload: {type: Boolean, default:false},
  matter: {type:String, default: ''},
  repair: {type: Boolean, default: false},
  type: String
});

BookSchema.statics.findByLang = function(lang, callback) {
  return this.model('audiobook').find({type: lang}, callback);
}

module.exports = mongoose.model('audiobook', BookSchema);