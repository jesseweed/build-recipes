
const path       = require('path'),
      shared     = require('../shared/_config.js');

let config = {

  address: shared.address,

  cache: false,

  cors: false,

  db: false,

  dir: shared.dir,

  domain: shared.domain,

  favicon: path.resolve(__dirname, '../public/favicon.png'),

  gzip: shared.compress,

  name: shared.name,

  passport: {
    use: false,
    strategy: null
  },

  port: shared.port,

  prettify: shared.prettify,

  security: {
    digest: 'sha512',
    length: 512,
    iterations: 10000,
    secret: '!01234567890^0987654321!'
  },

  session: {
    use: false,
    name: 'app',
    httpOnly: false,
    secure: false,
    resave: false,
    rolling: true,
    saveUninitialized: false,
    // REDIS
    driver: {
      type: 'redis',
      url: process.env.REDIS_URL || 'redis://127.0.0.1:6379'
    }
  },

  socket: shared.socket

};

module.exports = config;
