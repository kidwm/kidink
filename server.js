var express = require('express');
var app = express()
  .use(express.static(__dirname))
  .use(function(req, res){
	  res.sendfile(__dirname + '/404.html');
  })
 .listen(8179);

