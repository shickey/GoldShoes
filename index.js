var express = require("express");
var path = require("path");
var app = express();

app.use(express.static(path.join(__dirname, 'public')));

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});
