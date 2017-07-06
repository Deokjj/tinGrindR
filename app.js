const express      = require('express');
const path         = require('path');
const favicon      = require('serve-favicon');
const logger       = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser   = require('body-parser');
const layouts      = require('express-ejs-layouts');
const mongoose     = require('mongoose');
const session      = require('express-session');
const passport     = require('passport');

// Import the "dotenv" package and load variables from the ".env" file
// (Must be at the top before we try to use the variables)
require('dotenv').config();

require('./config/passport-config.js');

mongoose.connect(process.env.MONGODB_URI);

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// default value for title local
app.locals.title = 'tinGrindR';

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(layouts);
app.use(session({
  // the value of "secret" doesn't matter except it has to be different for every app
  secret: 'alksjflak sdffjfkaj hssdlfj alskddjf lasjddds',
  resave: true,
  saveUninitialized: true
}));

// PASSPORT middlewares ⟱⟱⟱ --------------------------------------------------
// 🚨🚨🚨 these need to come after "app.use(session(...));" 🚨🚨🚨
app.use(passport.initialize());
app.use(passport.session());
// PASSPORT middlewares ⟰⟰⟰ --------------------------------------------------

// THIS MIDDLEWARE CREATES the "currentUser" for ALL VIEWS
// (if the user is logged in)
// (this needs to be below passport and before your routes)
app.use((req, res, next) => {
  // "req.user" is defined by the passport middleware
  // If the user is NOT logged in, "req.user" will be empty.
  if (req.user) {
    // Create the "currentUser" local variable for all views
    res.locals.currentUser = req.user;
  }
  // 🚨🚨🚨 if you don't do "next()" your pages will load forever 🚨🚨🚨
  next();
});


//InitialView Route -before logged in or signed up
const first = require('./routes/first.js'); // first.js
app.use('/',first);

//home page - after logged in or signed up
const index = require('./routes/index'); // index.js
app.use('/', index);


// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
