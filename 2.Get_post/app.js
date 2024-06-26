//GET METHOD
var express = require('express');
var app = express();
app.get('/', function(req, res){
   res.sendFile(__dirname+"/"+"index.html");
});
app.get('/home', function(req, res){
    console.log("Home route accessed");
    console.log("Username:", req.query['username']);
    console.log("MailID:", req.query['mailid']);
    res.send(`<h1 style="color:red">Welcome: ${req.query['username']}</h1><br><h2>MailID: ${req.query['mailid']}</h2>`);
});

app.listen(8080, function() {
    console.log("Server listening on port 8080");
});

/* POST METHOD
var express = require('express');
var app = express();
var bodyparser=require('body-parser');
var url=bodyparser.urlencoded({extended:false});
app.get('/', function(req, res){
   res.sendFile(__dirname+"/"+"index.html");
});
app.post('/home',url, function(req, res){
    /*console.log("Home route accessed");
    console.log("Username:", req.query['username']);
    console.log("MailID:", req.query['mailid']);
    res.send('<h1 style="color:red">Welcome:' +req.body.username+'</h1><br><h2>MailID:'+req.body.mailid+'</h2>');
});

app.listen(8080, function() {
    console.log("Server listening on port 8080");
});*/
