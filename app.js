var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var redis = require('redis');
var client = redis.createClient(6379, "127.0.0.1");
var JSON = require('JSON');
var _ = require('underscore');
var app = require('express')();

var server = require('http').Server(app);
var io = require('socket.io')(server);
server.listen(3001, "127.0.0.1");

function addZero(i) {
  if(i < 10) {
     i = "0" + i;
  }
  return i;
}

    io.on('connection', function(socket) {
        var userName = socket.id;
        io.to(socket.id).emit('change name', userName);
        socket.on('change name', function(recvUserName) {
            userName = recvUserName;
            io.to(socket.id).emit('change name', userName);
            });    
    
    socket.on('disconnect', function() {
        io.emit('leave', socket.id);
    });

    socket.on('send message', function(text) {
        var date = new Date();
        client.rpush('chatLog', JSON.stringify({
            userName: socket.id,
            message: text,
            date: addZero(date.getHours()) 
          + ":" + addZero(date.getMinutes())
        }));

        io.emit('receive message', {
            userName: socket.id,
            message: text,
            date: addZero(date.getHours()) 
          + ":" + addZero(date.getMinutes())
            });
    });
});

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function(req, res, next) {
    var chatLogs;

    client.lrange('chatLogs', -10, -1, (err, charArr) => {
        chatLogs = _.map(charArr, function(char) {
            return JSON.parse(char);
            });
        res.render('index', {
            title: 'Chat App',
            chatLogs: chatLogs     
        });
    });    
});

app.use(function(req, res, next) {
    next(createError(404));
});

app.use(function(err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
