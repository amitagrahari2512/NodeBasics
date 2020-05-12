var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));

app.use(express.json());

app.use(function(req,res,next){
    if(req.method == 'POST'){
        console.log("Body of Request is :",req.body)
    }
    next()
});
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use(function(req,res,next){
    next(createError(404))
})

app.use(function(err,req,res,next){
    
});

module.exports = app;
