var express = require('express');
var app = express();
var path = require('path');

app.use(express.static("public"));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
    });

app.listen(3000, function () {
	  console.log('Example app listening on port 3000!');
})

var port = process.env.PORT || 5000
var server = app.listen(port, function() {
	console.log('Listening on port 5000');
});

