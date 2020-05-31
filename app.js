var debug = require('debug')('express:server');

const createError = require('http-errors');
var express = require('express');
var app = express();
var http = require('http').createServer(app);
const io = require('socket.io')(http);
var PORT = process.env.PORT || 8080;

http.on('error', onError);
http.on('listening', onListening);

const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const Tesseract = require('tesseract.js');

const spRouter = require('./routes/smartphone');
const pcRouter = require('./routes/pc');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', spRouter);
app.use('/users', pcRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

io.on('connection',function(socket){
  socket.on('qruuid',function(content){
    console.log('uuid: ' + content.uuid);
    console.log('text: ' + content.text);
    io.emit('qruuid',content);
  });
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

http.listen(PORT, function(){console.log('server listening. Port:' + PORT);});

module.exports = app;


function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
      ? 'Pipe ' + port
      : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = http.address();
  var bind = typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + addr.port;
  debug('Listening on ' + bind);
}