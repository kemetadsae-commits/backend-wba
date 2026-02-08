// backend/src/socketManager.js

const { Server } = require('socket.io');

let io;

const init = (httpServer, options = {}) => {
  io = new Server(httpServer, {
    cors: {
      origin: options.origin,
      methods: options.methods || ["GET", "POST"],
      credentials: options.credentials || true
    }
  });
  console.log('Socket.IO initialized with CORS origins:', options.origin);
  return io;
};

const getIO = () => {
  if (!io) {
    throw new Error('Socket.io not initialized!');
  }
  return io;
};

module.exports = {
  init,
  getIO,
};