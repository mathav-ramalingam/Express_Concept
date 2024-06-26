var express = require('express');
var app = express();

app.get('/', function(req, res){
   res.send("<h1 style='color:red'>Hello world!");
});

app.listen(3000);
