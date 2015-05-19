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
  upload: Boolean,
  matter: String,
  repair: Boolean
});

module.exports = mongoose.model('audiobook', BookSchema);