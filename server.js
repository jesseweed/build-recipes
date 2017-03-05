// CONSTANTS
const express = require('express'),
      app     = express(),
      body    = require('body-parser'),
      config  = require('./server/_config.js'),
      favicon = require('serve-favicon'),
      multer  = require('multer'),
      shared  = require('./shared/_config.js');

// SET DEFAULT ENVIRONMENT VARIABLES
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
process.env.PORT     = process.env.PORT || shared.port;

// PROD OVERRIDES
if (process.env.NODE_ENV === 'production') {
  config.compress = true;
  config.gzip = true;
  config.minify = true;
  config.prettify = false;
}

// STYLUS
app.use(require('node-sass-middleware')({
  debug: true,
  src:      './client/_shared/css',
  dest:     './public'
}));

// SET PUBLIC DIR
app.use(express.static(shared.dir.public.root));
app.use(express.static(shared.dir.dist.root));

// OTHER MISC SETTINGS
app.set('config', config);
app.set('views', shared.dir.server.views);
app.set('view engine', shared.engines.html);
app.set('case sensitive routing', false);
app.set('security', config.security);
app.set('upload', multer());
app.use(body.json());
app.use(body.urlencoded({ extended: false }));
app.locals.pretty = config.prettify;
app.use(favicon(config.favicon));

// CONFIG BASED SETTINGS
if (config.cors) app.use(require('cors')());
if (config.gzip) app.use(require('compression')());

// LOAD OUR ROUTER
require(config.dir.server.router)(app, config);

// LIVE RELOAD
if (process.env.NODE_ENV !== 'production') {

  let livereload = require('livereload').createServer({
    exts: ['js', 'jsx', 'css', 'styl', 'scss', 'html', 'pug']
  });
  livereload.watch([
    `${__dirname}/_dist`,
    `${__dirname}/public`,
    `${__dirname}/server`
  ]);

}

app.listen(process.env.PORT, function () {
  console.log('Example app listening on port 3000!');
});
