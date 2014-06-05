var express = require("express");
var jade = require("jade");
var path = require("path");
var app = express();

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.get('/', function(req, res) {
  res.render('shoes');
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});
