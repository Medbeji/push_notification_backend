'use strict';

var mongoose = require('mongoose'),
  Token = mongoose.model('Tokens');
  TokenAndroid = mongoose.model('TokensAndroid')

  // Push notifications parameters
  const apn = require("apn");

    var options = {
      token: {
        key: "tripopt_apn.p8",
        keyId: "7Q494BPKF5",
        teamId: "MWK8U6Z88X"
      },
      production: false
    };
    let service = new apn.Provider(options);

exports.list_all_tokens = function(req, res) {
  Token.find({}, function(err, task) {
    if (err)
    res.send(err);
    res.json(task);
  });
};

exports.create_a_token = function(req, res) {
  var new_token = new Token(req.body);
  Token.findOne({ "token": req.body.token},function(err,token){
    if (err){
      res.send(err);
      return
    }
   if (!token) {
      console.log('This is a new token')
      new_token.save(function(err, token) {
        if (err)
          res.send(err);
        res.json(token);
      });
   } else {
    res.send({
      "message":'the token already exists'
    });
   }
  })
};


exports.delete_a_task = function(req, res) {
  Token.remove({
    _id: req.params.taskId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};

exports.create_token_android = function(req,res){

  // Model mongoose !
  
}


exports.send_a_notification = function (req,res){

 // IOS

    var tokens = []
    // Saving all tokens in a table
    Token.find({}, function(err, token) {
      if (err)
       res.send(err);
      // res.json(task);
        token.forEach(function(value){
           tokens.push(value.token)
        });

        console.log("tokens =")
        console.log(tokens)
        // Push notifications  code
        let note = new apn.Notification({
          alert:  req.body.message,
        });

        // The topic is usually the bundle identifier of your application.
        note.topic = "com.hannilab.tripoptapp";

        // console.log(`Sending: ${note.compile()} to ${tokens}`);

        service.send(note, tokens).then( result => {

            res.json({
              "message": req.body.message,
              "sent": result.sent.length,
              "failed": result.failed.length
            })

        });

        service.shutdown();
    });


// Android









}
