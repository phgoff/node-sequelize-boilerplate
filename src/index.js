/* eslint-disable no-use-before-define */
import http from 'http';
import app from './app';

const server = http.createServer(app);
const port = normalizePort(process.env.PORT || '3000');

server.listen(port);
server.on('error', onError);
console.log(`Server is running on port: ${port}`);

function normalizePort(val) {
  const PORT = parseInt(val, 10);
  // eslint-disable-next-line no-restricted-globals
  if (isNaN(PORT)) {
    // named pipe
    return val;
  }

  if (PORT >= 0) {
    // PORT number
    return PORT;
  }

  return false;
}

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}
