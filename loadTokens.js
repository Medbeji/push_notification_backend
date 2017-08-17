var mongodb = require('mongodb');
var mongoClient = mongodb.MongoClient;
 
var url = 'mongodb://localhost:27017/tripopt_pn';
 
mongoClient.connect(url, function(err, db) {
      createApnToken(db, function() {
        db.close();
      });
});
 
var createApnToken = function(db, callback) {
     var collection = db.collection("apn_tokens");
     collection.insert([
      {token : "429208638836f7e634548c4d64fe48de76d566f9386fb695d4d5e627d92119f0"}
    ], function(err, result) {
         callback(result);
    });
}