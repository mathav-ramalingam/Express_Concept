var express = require('express');
var app = express();
var router = express.Router();

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

app.use('/vj', router);

// Error handling middleware for 404 Not Found
app.use(function(req, res, next) {
    var err = new Error("Page not found");
    next(err);
});

// Error handling middleware for other errors
app.use(function(err, req, res, next) {
    console.error('Error:', err.message);

    // Set HTTP status code
    res.status(err.status || 500);

    // Send error message
    res.send('Error: ' + (err.message || 'Internal Server Error'));
});
app.listen(8080);
