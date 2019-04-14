var app = require('../app');
var debug = require('debug')('express-generator-handlebars:server');
//var http = require('http');

/* */
var fs = require("fs");
var http2 = require('http2');
const options = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
}

/* */

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

//var server = http.createServer(app);
var server = http2.createSecureServer(options, app);

server.listen(port);
server.on('error', onError);

server.on('stream', (stream, headers) => {
  console.log('strem');
  // stream is a Duplex
  stream.respond({
    'content-type': 'text/html',
    ':status': 200
  });
  stream.end('<h1>Hello World</h1>');
});

server.on('listening', onListening);

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

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
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
