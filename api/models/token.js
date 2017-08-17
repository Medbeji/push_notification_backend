
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TokenSchema = new Schema({
  token: {
    type: String,
    unique : true,
    Required: 'Please enter the tokenID of the device'
  },
  createdDate: {
    type: Date,
    default: Date.now
  },
  userId:{
    type: String,
    Required: 'Please enter the userId  of who has  that device'
  }
});

module.exports = mongoose.model('Tokens', TokenSchema);