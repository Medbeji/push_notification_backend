'use strict';
module.exports = function(app) {
  var tokenController = require('../controllers/tokenController.js');
  // tokens Routes
  app.route('/tokens')
    .get(tokenController.list_all_tokens)
    .post(tokenController.create_a_token);
};