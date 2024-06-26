var express = require('express');
var app = express();
var router=express.Router();
router.use(function(req, res, next) {
    console.log('Welcome message displayed');
    console.log('Request method is:', req.method, 'and', req.url, 'is running');
    next();
});

app.get('/', function(req, res, next) {
    console.log("Main Page");
    res.send("Main Page<br>");
   next();
});
app.get('/vj', function(req, res, next) {
    console.log("First page");
    res.send("First Page");
   next();
});
router.get('/contact', function(req, res, next) {
    console.log("Second page");
    res.send("Second page");
   next();
});
router.get('/exit', function(req, res, next) {
    console.log("Third page");
    res.send("Third Page");
    next();
});
/*app.use(function(req, res){
    console.log('THE END');
    
});*/
app.use('/vj',router);
app.listen(8080);
