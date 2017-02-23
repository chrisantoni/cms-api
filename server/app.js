var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var mongoose = require('mongoose')
var cors = require('cors')
var passport = require('passport')
var localStrategy = require('passport-local').Strategy
var index = require('./routes/index');
var users = require('./routes/users');
var passport = require('passport');
var passwordHash = require('password-hash');
var jwt = require('jsonwebtoken');
var User = require('./models/user')
var configDB = require('./config/db')
require('dotenv').config()
var app = express();


mongoose.connect(configDB.url)


passport.use('local', new localStrategy(function(username, password, done){
  User.findOne({ username: username }, function(err, data){
    if (!data) {
      done(null, false, {message: 'incorect username'})
    }else{
      if (passwordHash.verify(password, data.password)) {
        done(null, data)
      }else{
        done(null, false, {message: 'incorect password'})
      }
    }
  })
}))


passport.serializeUser(function(user, callback){
  callback(null, user)
})

app.use(passport.initialize())
app.use(passport.session())



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(cors())
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
