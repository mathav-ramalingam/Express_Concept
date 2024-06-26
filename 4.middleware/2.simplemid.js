var express = require('express');
var app = express();
app.use(function(req, res, next) {
    console.log('Welcome message displayed');
    console.log('Request method is:', req.method, 'and', req.url, 'is running');
    next();
});

app.get('/', function(req, res, next) {
    console.log("First page");
    res.send("KEC-II-CSE-B<br>");
    //next();
});
app.get('/exit', function(req, res, next) {
    console.log("Second page");
    res.send("KEC Second");
    //next();
});
app.use(function(req, res){
    console.log('THE END');
    
});

app.listen(8080);
