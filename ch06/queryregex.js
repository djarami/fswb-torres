//queryregex.js
const MongoClient = require('mongodb').MongoClient;

var uri = "mongodb://127.0.0.1:27017/";

MongoClient.connect(uri, { useUnifiedTopology: true }, function(err, client) {
  if (err) throw err;

  var dbo = client.db("music");

  //define a regular expression for "starting with I"
  var query = { "title": /^I/ };

  dbo.collection("songs").find(query).toArray(function(err, res) {
    if (err) throw err;

    for (var i=0; i < res.length; i++) {
      console.log( res[i].title );
    }

    client.close();
  });

});