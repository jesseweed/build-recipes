'use strict';

const path   = require('path'),
      root   = path.normalize(`${__dirname}/..`);

let config = {

  // BASIC SETTINGS

  name: 'App',

  namespace: 'my-app',

  // OTHER SETTINGS

  compress: false,

  dir: {
    client: {
      root: `${root}/client/`
    },
    dist: {
      root: `${root}/_dist/`
    },
    public: {
      root: `${root}/public/`,
      css: `${root}/public/css/`
    },
    root: `${root}/`,
    server: {
      root: `${root}/server/`,
      router: `${root}/server/routes/`,
      views: `${root}/server/views/`
    }
  },

  domains: {
    production: 'my-app.com',
    staging: 'staging.my-app.com',
    test: 'test.my-app.com'
  },

  engines: {
    css: 'stylus',
    html: 'pug'
  },

  links: {},

  port: 3000,

  prettify: true,

  socket: true

};


// SET DOMAIN
if (process.env.NODE_ENV === 'development') {
  config.domain = require('ip').address();
} else {
  config.domain = config.domains[process.env.NODE_ENV];
}

// SET BASE URL
config.address = `//${config.domain}/`;

// SET PUBLIC DIRECTORIES
config.links.public = {
  css: `${config.address}css/`,
  img: `${config.address}img/`,
  io:  `${config.address}socket.io/socket.io.js`,
  lib: `${config.address}lib/`,
  js:  `${config.address}js/`
};

module.exports = config;
