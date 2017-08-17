'use strict';

var mongoose = require('mongoose'),
  Token = mongoose.model('Tokens');

exports.list_all_tokens = function(req, res) {
  Token.find({}, function(err, task) {
    if (err)
    res.send(err);
    res.json(task);
  });
};


exports.create_a_token = function(req, res) {
  var new_token = new Token(req.body);
  new_token.save(function(err, token) {
    if (err)
      res.send(err);
    res.json(token);
  });
};


exports.delete_a_task = function(req, res) {
  Task.remove({
    _id: req.params.taskId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};
