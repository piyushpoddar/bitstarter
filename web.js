var fs = require('fs');
var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
	var content = fs.readFileSync('index.html');
// response.send(fs.readFileSync(__dirname + '/index.html'));
//	var fs=require('fs');
//	var content=fs.readFileSync('index.html','utf-8');
	response.send(content);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
